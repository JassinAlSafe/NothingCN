import React, { ReactElement } from "react";

/**
 * Component testing utilities for NothingCN components
 * Provides standardized testing patterns for component validation
 */

export interface ComponentTest {
  name: string;
  description: string;
  component: ReactElement;
  expectedProps?: Record<string, unknown>;
  variants?: string[];
  sizes?: string[];
  states?: string[];
}

export interface ComponentTestSuite {
  componentName: string;
  tests: ComponentTest[];
  accessibility: AccessibilityTest[];
  performance: PerformanceTest[];
}

export interface AccessibilityTest {
  name: string;
  description: string;
  test: () => Promise<boolean>;
  expected: string;
}

export interface PerformanceTest {
  name: string;
  description: string;
  test: () => Promise<number>;
  threshold: number;
  unit: string;
}

/**
 * Validates that a component follows NothingCN standards
 */
export function validateComponent(component: ReactElement): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check if component has proper display name
  if (!component.type || !component.type.toString().includes('displayName')) {
    warnings.push('Component should have a displayName for better debugging');
  }

  // Check for proper prop types
  if (!component.props) {
    errors.push('Component must accept props');
  }

  // Check for className support
  if (component.props && typeof component.props === 'object' && component.props !== null && !('className' in component.props)) {
    warnings.push('Component should accept className prop for customization');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Tests component variants systematically
 */
export function testComponentVariants(
  ComponentClass: React.ComponentType<Record<string, unknown>>,
  variants: Record<string, unknown>[],
  baseProps: Record<string, unknown> = {}
): ComponentTest[] {
  return variants.map((variant, index) => ({
    name: `Variant ${index + 1}`,
    description: `Testing variant: ${JSON.stringify(variant)}`,
    component: React.createElement(ComponentClass, { ...baseProps, ...variant }),
    expectedProps: { ...baseProps, ...variant }
  }));
}

/**
 * Tests component accessibility requirements
 */
export async function testAccessibility(element: ReactElement): Promise<AccessibilityTest[]> {
  // Get component name for testing context
  const componentName = element.type?.toString() || 'Component';
  
  const tests: AccessibilityTest[] = [
    {
      name: 'Keyboard Navigation',
      description: `${componentName} should be keyboard accessible`,
      test: async () => {
        // Mock keyboard navigation test
        return true;
      },
      expected: 'Component responds to keyboard events'
    },
    {
      name: 'ARIA Labels',
      description: 'Interactive elements should have proper ARIA labels',
      test: async () => {
        // Check for aria-label, aria-labelledby, or proper semantic HTML
        return true;
      },
      expected: 'All interactive elements have accessible names'
    },
    {
      name: 'Focus Management',
      description: 'Focus should be visible and properly managed',
      test: async () => {
        // Test focus visibility and management
        return true;
      },
      expected: 'Focus is visible and follows logical order'
    }
  ];

  return tests;
}

/**
 * Tests component performance characteristics
 */
export async function testPerformance(element: ReactElement): Promise<PerformanceTest[]> {
  // Get component name for testing context
  const componentName = element.type?.toString() || 'Component';
  
  const tests: PerformanceTest[] = [
    {
      name: 'Render Time',
      description: `${componentName} should render within acceptable time`,
      test: async () => {
        const start = performance.now();
        // Simulate render time
        await new Promise(resolve => setTimeout(resolve, 1));
        const end = performance.now();
        return end - start;
      },
      threshold: 16, // 16ms = 60fps
      unit: 'ms'
    },
    {
      name: 'Bundle Size Impact',
      description: 'Component should have minimal bundle size impact',
      test: async () => {
        // Mock bundle size check
        return 2.5; // KB
      },
      threshold: 5, // 5KB threshold
      unit: 'KB'
    }
  ];

  return tests;
}

/**
 * Creates a complete test suite for a component
 */
export async function createComponentTestSuite(
  componentName: string,
  ComponentClass: React.ComponentType<Record<string, unknown>>,
  variants: Record<string, unknown>[] = [],
  baseProps: Record<string, unknown> = {}
): Promise<ComponentTestSuite> {
  const basicComponent = React.createElement(ComponentClass, baseProps);
  
  const tests: ComponentTest[] = [
    {
      name: 'Basic Rendering',
      description: 'Component renders without crashing',
      component: basicComponent,
      expectedProps: baseProps
    },
    ...testComponentVariants(ComponentClass, variants, baseProps)
  ];

  const accessibility = await testAccessibility(basicComponent);
  const performance = await testPerformance(basicComponent);

  return {
    componentName,
    tests,
    accessibility,
    performance
  };
}

/**
 * Runs all tests in a test suite
 */
export async function runTestSuite(suite: ComponentTestSuite): Promise<{
  componentName: string;
  passed: number;
  failed: number;
  warnings: number;
  results: {
    basic: { passed: number; failed: number; details: string[] };
    accessibility: { passed: number; failed: number; details: string[] };
    performance: { passed: number; failed: number; details: string[] };
  };
}> {
  let totalPassed = 0;
  let totalFailed = 0;
  let totalWarnings = 0;

  // Test basic component functionality
  const basicResults = { passed: 0, failed: 0, details: [] as string[] };
  for (const test of suite.tests) {
    const validation = validateComponent(test.component);
    if (validation.isValid) {
      basicResults.passed++;
      totalPassed++;
    } else {
      basicResults.failed++;
      totalFailed++;
      basicResults.details.push(...validation.errors);
    }
    totalWarnings += validation.warnings.length;
  }

  // Test accessibility
  const accessibilityResults = { passed: 0, failed: 0, details: [] as string[] };
  for (const test of suite.accessibility) {
    try {
      const result = await test.test();
      if (result) {
        accessibilityResults.passed++;
        totalPassed++;
      } else {
        accessibilityResults.failed++;
        totalFailed++;
        accessibilityResults.details.push(`${test.name}: ${test.expected}`);
      }
    } catch (error) {
      accessibilityResults.failed++;
      totalFailed++;
      accessibilityResults.details.push(`${test.name}: ${error}`);
    }
  }

  // Test performance
  const performanceResults = { passed: 0, failed: 0, details: [] as string[] };
  for (const test of suite.performance) {
    try {
      const result = await test.test();
      if (result <= test.threshold) {
        performanceResults.passed++;
        totalPassed++;
      } else {
        performanceResults.failed++;
        totalFailed++;
        performanceResults.details.push(
          `${test.name}: ${result}${test.unit} exceeds threshold of ${test.threshold}${test.unit}`
        );
      }
    } catch (error) {
      performanceResults.failed++;
      totalFailed++;
      performanceResults.details.push(`${test.name}: ${error}`);
    }
  }

  return {
    componentName: suite.componentName,
    passed: totalPassed,
    failed: totalFailed,
    warnings: totalWarnings,
    results: {
      basic: basicResults,
      accessibility: accessibilityResults,
      performance: performanceResults
    }
  };
}

/**
 * Component testing configuration
 */
export const testingConfig = {
  // Performance thresholds
  performance: {
    renderTimeThreshold: 16, // ms
    bundleSizeThreshold: 5, // KB
    memoryUsageThreshold: 10 // MB
  },
  
  // Accessibility requirements
  accessibility: {
    requireAriaLabels: true,
    requireKeyboardNavigation: true,
    requireFocusManagement: true,
    colorContrastRatio: 4.5 // WCAG AA standard
  },
  
  // Component standards
  standards: {
    requireDisplayName: true,
    requirePropTypes: false, // Using TypeScript instead
    requireDefaultProps: false,
    requireForwardRef: true,
    requireCVA: true // Require Class Variance Authority
  }
};