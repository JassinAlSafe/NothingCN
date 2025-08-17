// GitHub API integration for real contributor stats and activity
export interface GitHubContributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: string;
  name?: string;
  bio?: string;
  location?: string;
  blog?: string;
  company?: string;
}

export interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  } | null;
  html_url: string;
}

export interface GitHubPullRequest {
  id: number;
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  created_at: string;
  updated_at: string;
  state: 'open' | 'closed';
  merged_at: string | null;
  html_url: string;
  labels: Array<{
    name: string;
    color: string;
  }>;
}

export interface GitHubRepoStats {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  subscribers_count: number;
  network_count: number;
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: Array<{
    name: string;
    color: string;
  }>;
  state: 'open' | 'closed';
  created_at: string;
  updated_at: string;
  html_url: string;
  body: string;
  comments: number;
}

// Use our API proxy to avoid CSP issues
const GITHUB_API_BASE = '/api/github';

// Repository configuration with fallbacks
// Repository configuration - pointing to the actual NothingCN repository
const REPO_OWNER = process.env.NEXT_PUBLIC_GITHUB_REPO_OWNER || 'JassinAlSafe';
const REPO_NAME = process.env.NEXT_PUBLIC_GITHUB_REPO_NAME || 'NothingCN';

// Export repository URLs for consistent usage across the app
export const GITHUB_REPO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
export const GITHUB_ISSUES_URL = `${GITHUB_REPO_URL}/issues`;
export const GITHUB_FORK_URL = `${GITHUB_REPO_URL}/fork`;
export const GITHUB_NEW_ISSUE_URL = `${GITHUB_ISSUES_URL}/new`;

// Cache for API responses to avoid rate limiting
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes (increased cache duration)

function getCachedData(key: string) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

function setCachedData(key: string, data: unknown) {
  cache.set(key, { data, timestamp: Date.now() });
}

// Enhanced error handling and retry logic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchGitHubAPI(endpoint: string, options?: RequestInit, retries = 2): Promise<any> {
  const cacheKey = endpoint;
  const cached = getCachedData(cacheKey);
  if (cached) {
    return cached;
  }

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const headers: Record<string, string> = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'NothingCN-Website',
      };

      // Token is handled by the API proxy on the server side

      const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
        headers,
        ...options,
      });

      // Handle rate limiting with exponential backoff
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');

        if (attempt < retries) {
          const delay = retryAfter
            ? parseInt(retryAfter) * 1000
            : Math.pow(2, attempt) * 1000; // Exponential backoff

          console.warn(`Rate limited. Retrying after ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
      }

      // Handle other errors
      if (!response.ok) {
        const errorDetails = {
          status: response.status,
          statusText: response.statusText,
          rateLimit: response.headers.get('X-RateLimit-Remaining'),
          resetTime: response.headers.get('X-RateLimit-Reset'),
        };

        console.error('GitHub API error details:', errorDetails);
        
        // Provide helpful error context
        if (response.status === 404) {
          throw new Error(`Repository ${REPO_OWNER}/${REPO_NAME} not found. Please check the repository name and ensure it's publicly accessible.`);
        }

        if (response.status === 403) {
          const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
          if (rateLimitRemaining === '0') {
            throw new Error(`GitHub API rate limit exceeded. Resets at ${new Date(parseInt(response.headers.get('X-RateLimit-Reset') || '0') * 1000).toISOString()}`);
          } else {
            throw new Error(`GitHub API access forbidden. Check repository permissions and token validity.`);
          }
        }

        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setCachedData(cacheKey, data);
      return data;
    } catch (error) {
      console.error(`GitHub API fetch error (attempt ${attempt + 1}):`, error);

      if (attempt === retries) {
        throw error;
      }

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
}

// Mock data fallbacks for when API fails or repository doesn't exist
const mockStats: GitHubRepoStats = {
  stargazers_count: 150,
  forks_count: 25,
  open_issues_count: 5,
  watchers_count: 150,
  subscribers_count: 12,
  network_count: 25,
};

const mockContributors: GitHubContributor[] = [
  {
    login: 'JassinAlSafe',
    id: 1,
    avatar_url: 'https://github.com/JassinAlSafe.png',
    html_url: 'https://github.com/JassinAlSafe',
    contributions: 47,
    type: 'User',
    name: 'Jassin Al Safe',
    bio: 'Frontend enthusiast, component creator',
    location: 'San Francisco, CA',
  },
  {
    login: 'sarah-designer',
    id: 2,
    avatar_url: 'https://github.com/identicons/sarah-designer.png',
    html_url: 'https://github.com/sarah-designer',
    contributions: 32,
    type: 'User',
    name: 'Sarah Designer',
    bio: 'UI/UX designer passionate about accessibility',
    location: 'New York, NY',
  },
  {
    login: 'mike-docs',
    id: 3,
    avatar_url: 'https://github.com/identicons/mike-docs.png',
    html_url: 'https://github.com/mike-docs',
    contributions: 28,
    type: 'User',
    name: 'Mike Documentation',
    bio: 'Technical writer and documentation expert',
    location: 'Austin, TX',
  },
];

export async function getRepositoryStats(): Promise<GitHubRepoStats> {
  try {
    const data = await fetchGitHubAPI(`/repos/${REPO_OWNER}/${REPO_NAME}`);
    return {
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count,
      open_issues_count: data.open_issues_count,
      watchers_count: data.watchers_count,
      subscribers_count: data.subscribers_count,
      network_count: data.network_count,
    };
  } catch (error) {
    console.warn('Failed to fetch repository stats, using fallback data:', error);
    return mockStats;
  }
}

export async function getTopContributors(limit: number = 10): Promise<GitHubContributor[]> {
  try {
    const contributors = await fetchGitHubAPI(`/repos/${REPO_OWNER}/${REPO_NAME}/contributors?per_page=${limit}`);

    // Fetch additional user details for top contributors (limited to avoid rate limits)
    const detailedContributors = await Promise.all(
      contributors.slice(0, Math.min(3, contributors.length)).map(async (contributor: GitHubContributor) => {
        try {
          const userDetails = await fetchGitHubAPI(`/users/${contributor.login}`);
          return {
            ...contributor,
            name: userDetails.name,
            bio: userDetails.bio,
            location: userDetails.location,
            blog: userDetails.blog,
            company: userDetails.company,
          };
        } catch {
          return contributor;
        }
      })
    );

    // Add remaining contributors without extra details
    const remainingContributors = contributors.slice(3);
    return [...detailedContributors, ...remainingContributors];
  } catch (error) {
    console.warn('Failed to fetch contributors, using fallback data:', error);
    return mockContributors;
  }
}

export async function getRecentCommits(limit: number = 10): Promise<GitHubCommit[]> {
  try {
    const commits = await fetchGitHubAPI(`/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=${limit}`);
    return commits;
  } catch (error) {
    console.warn('Failed to fetch recent commits, using fallback data:', error);
    return [
      {
        sha: 'abc123',
        commit: {
          author: {
            name: 'Jassin Al Safe',
            email: 'jassin@example.com',
            date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          },
          message: 'feat: add pixel button variant with retro animations',
        },
        author: {
          login: 'JassinAlSafe',
          avatar_url: 'https://github.com/JassinAlSafe.png',
          html_url: 'https://github.com/JassinAlSafe',
        },
        html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/commit/abc123`,
      },
      {
        sha: 'def456',
        commit: {
          author: {
            name: 'Sarah Designer',
            email: 'sarah@example.com',
            date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          },
          message: 'fix: improve dark mode contrast ratios in components',
        },
        author: {
          login: 'sarah-designer',
          avatar_url: 'https://github.com/identicons/sarah-designer.png',
          html_url: 'https://github.com/sarah-designer',
        },
        html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/commit/def456`,
      },
    ];
  }
}

export async function getRecentPullRequests(limit: number = 10): Promise<GitHubPullRequest[]> {
  try {
    const prs = await fetchGitHubAPI(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=all&sort=updated&per_page=${limit}`);
    return prs;
  } catch (error) {
    console.warn('Failed to fetch pull requests, using fallback data:', error);
    return [
      {
        id: 1,
        number: 42,
        title: 'Add Interactive Date Picker Component',
        user: {
          login: 'emma-ux',
          avatar_url: 'https://github.com/identicons/emma-ux.png',
          html_url: 'https://github.com/emma-ux',
        },
        created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        state: 'open',
        merged_at: null,
        html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/pull/42`,
        labels: [
          { name: 'enhancement', color: 'a2eeef' },
          { name: 'component', color: '0075ca' },
        ],
      },
    ];
  }
}

export async function getOpenIssues(limit: number = 10): Promise<GitHubIssue[]> {
  try {
    const issues = await fetchGitHubAPI(`/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&per_page=${limit}&sort=updated`);
    return issues.filter((issue: { pull_request?: unknown }) => !issue.pull_request); // Filter out PRs
  } catch (error) {
    console.warn('Failed to fetch issues, using fallback data:', error);
    return [
      {
        id: 1,
        number: 15,
        title: 'Add Data Visualization Components',
        user: {
          login: 'data-lover',
          avatar_url: 'https://github.com/identicons/data-lover.png',
        },
        labels: [
          { name: 'enhancement', color: 'a2eeef' },
          { name: 'good first issue', color: '7057ff' },
        ],
        state: 'open',
        created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/issues/15`,
        body: 'We need chart components for data visualization...',
        comments: 8,
      },
    ];
  }
}

// Utility functions
export function proxyAvatarUrl(originalUrl: string): string {
  if (!originalUrl) return '';
  
  // If it's already a GitHub avatar URL, proxy it
  if (originalUrl.startsWith('https://avatars.githubusercontent.com/') || 
      originalUrl.startsWith('https://github.com/')) {
    return `/api/avatar?url=${encodeURIComponent(originalUrl)}`;
  }
  
  // Return as-is for other URLs (shouldn't happen with GitHub API)
  return originalUrl;
}

export function getTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}

export function formatCommitMessage(message: string): string {
  // Take only the first line and limit length
  const firstLine = message.split('\n')[0];
  return firstLine.length > 60 ? `${firstLine.substring(0, 60)}...` : firstLine;
}

export function getContributionTypeFromCommit(message: string): string {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.startsWith('feat') || lowerMessage.includes('feature')) return 'feature';
  if (lowerMessage.startsWith('fix') || lowerMessage.includes('bug')) return 'fix';
  if (lowerMessage.startsWith('docs') || lowerMessage.includes('documentation')) return 'docs';
  return 'other';
}