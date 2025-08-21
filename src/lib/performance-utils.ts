/**
 * Performance optimization utilities for NothingCN
 * Core utilities without JSX components
 */


/**
 * Configuration for performance optimizations
 */
export const performanceConfig = {
  // Code splitting thresholds
  codeSplitting: {
    componentSizeThreshold: 10 * 1024, // 10KB
    routeSizeThreshold: 50 * 1024, // 50KB
    vendorSizeThreshold: 100 * 1024, // 100KB
  },
  
  // Lazy loading settings
  lazyLoading: {
    intersectionThreshold: 0.1, // Load when 10% visible
    rootMargin: '50px', // Start loading 50px before viewport
    enableImages: true,
    enableComponents: true,
  },
  
  // Bundle optimization
  bundleOptimization: {
    enableTreeShaking: true,
    enableMinification: true,
    enableCompression: true,
    splitChunks: {
      vendor: true,
      components: true,
      pages: true,
    }
  }
};

/**
 * Bundle analyzer data collection
 */
export interface BundleStats {
  totalSize: number;
  components: {
    name: string;
    size: number;
    gzipped: number;
    dependencies: string[];
  }[];
  chunks: {
    name: string;
    size: number;
    modules: number;
  }[];
  duplicateModules: string[];
  largestModules: {
    name: string;
    size: number;
  }[];
}

/**
 * Performance metrics collection
 */
export interface PerformanceMetrics {
  // Core Web Vitals
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay  
  cls: number; // Cumulative Layout Shift
  
  // Custom metrics
  componentRenderTime: number;
  bundleLoadTime: number;
  imageLoadTime: number;
  
  // Resource metrics
  totalJSSize: number;
  totalCSSSize: number;
  totalImageSize: number;
  
  // Network metrics
  ttfb: number; // Time to First Byte
  networkSpeed: 'slow-2g' | '2g' | '3g' | '4g' | 'unknown';
}

/**
 * Collect performance metrics
 */
export function collectPerformanceMetrics(): Promise<PerformanceMetrics> {
  return new Promise((resolve) => {
    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      gatherMetrics();
    } else {
      window.addEventListener('load', gatherMetrics);
    }

    function gatherMetrics() {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      // Get LCP from Performance Observer if available
      let lcp = 0;
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime?: number };
            lcp = lastEntry?.startTime || 0;
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP measurement failed:', e);
        }
      }

      // Calculate metrics
      const metrics: PerformanceMetrics = {
        lcp,
        fid: 0, // Will be updated by FID observer
        cls: 0, // Will be updated by CLS observer
        componentRenderTime: 0, // Custom measurement
        bundleLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        imageLoadTime: 0, // Custom measurement
        totalJSSize: 0, // From resource timing
        totalCSSSize: 0, // From resource timing
        totalImageSize: 0, // From resource timing
        ttfb: navigation.responseStart - navigation.requestStart,
        networkSpeed: getNetworkSpeed()
      };

      // Calculate resource sizes
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      resources.forEach(resource => {
        const size = resource.transferSize || 0;
        
        if (resource.name.includes('.js')) {
          metrics.totalJSSize += size;
        } else if (resource.name.includes('.css')) {
          metrics.totalCSSSize += size;
        } else if (resource.name.match(/\.(png|jpg|jpeg|gif|webp|svg)$/)) {
          metrics.totalImageSize += size;
        }
      });

      resolve(metrics);
    }
  });
}

/**
 * Get network speed estimation
 */
function getNetworkSpeed(): PerformanceMetrics['networkSpeed'] {
  if ('connection' in navigator) {
    const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
    const effectiveType = connection?.effectiveType;
    
    switch (effectiveType) {
      case 'slow-2g':
      case '2g':
      case '3g':  
      case '4g':
        return effectiveType;
      default:
        return 'unknown';
    }
  }
  return 'unknown';
}

/**
 * Component-specific performance optimization
 */
export class ComponentPerformanceOptimizer {
  private static renderTimeCache = new Map<string, number>();
  private static intersectionObserver: IntersectionObserver | null = null;

  /**
   * Measure component render time
   */
  static measureRenderTime(componentName: string, renderFn: () => void): number {
    const startTime = performance.now();
    renderFn();
    const endTime = performance.now();
    const renderTime = endTime - startTime;

    this.renderTimeCache.set(componentName, renderTime);
    
    // Log slow renders in development
    if (process.env.NODE_ENV === 'development' && renderTime > 16) {
      console.warn(`Slow render detected: ${componentName} took ${renderTime.toFixed(2)}ms`);
    }

    return renderTime;
  }

  /**
   * Get render time for component
   */
  static getRenderTime(componentName: string): number | undefined {
    return this.renderTimeCache.get(componentName);
  }

  /**
   * Initialize lazy loading with intersection observer
   */
  static initializeLazyLoading() {
    if (typeof window === 'undefined' || this.intersectionObserver) return;

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const componentName = element.dataset.component;
            
            if (componentName) {
              // Trigger lazy loading
              element.classList.add('lazy-loaded');
              this.intersectionObserver?.unobserve(element);
            }
          }
        });
      },
      {
        threshold: performanceConfig.lazyLoading.intersectionThreshold,
        rootMargin: performanceConfig.lazyLoading.rootMargin
      }
    );
  }

  /**
   * Observe element for lazy loading
   */
  static observeElement(element: HTMLElement, componentName: string) {
    if (this.intersectionObserver) {
      element.dataset.component = componentName;
      this.intersectionObserver.observe(element);
    }
  }

  /**
   * Get performance report
   */
  static getPerformanceReport() {
    return {
      renderTimes: Object.fromEntries(this.renderTimeCache),
      averageRenderTime: Array.from(this.renderTimeCache.values())
        .reduce((sum, time) => sum + time, 0) / this.renderTimeCache.size,
      slowComponents: Array.from(this.renderTimeCache.entries())
        .filter(([, time]) => time > 16)
        .sort(([, a], [, b]) => b - a),
    };
  }
}

/**
 * Tree shaking configuration helper
 */
export const treeShakingConfig = {
  // Mark these modules as side-effect free
  sideEffects: false,
  
  // Webpack tree shaking optimization
  optimization: {
    usedExports: true,
    sideEffects: false,
    
    // Mark specific modules as having no side effects
    providedExports: true,
    
    // Enable more aggressive dead code elimination
    innerGraph: true,
  },
  
  // Rollup tree shaking (if using Rollup)
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
  }
};

/**
 * Code splitting strategies
 */
export const codeSplittingStrategies = {
  // Split by route/page
  byRoute: {
    name: 'pages',
    test: /[\\/]pages[\\/]/,
    chunks: 'all' as const,
    priority: 10,
  },
  
  // Split vendor libraries
  vendor: {
    name: 'vendor',
    test: /[\\/]node_modules[\\/]/,
    chunks: 'all' as const,
    priority: 20,
  },
  
  // Split UI components  
  components: {
    name: 'components',
    test: /[\\/]components[\\/]/,
    chunks: 'all' as const,
    priority: 15,
  },
  
  // Split common utilities
  common: {
    name: 'common',
    minChunks: 2,
    chunks: 'all' as const,
    priority: 5,
  }
};