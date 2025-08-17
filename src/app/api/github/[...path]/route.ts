import { NextRequest, NextResponse } from 'next/server';

const GITHUB_API_BASE = 'https://api.github.com';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const { searchParams } = new URL(request.url);
    
    // Reconstruct the GitHub API URL
    const githubPath = path.join('/');
    const githubUrl = new URL(`${GITHUB_API_BASE}/${githubPath}`);
    
    // Forward query parameters
    searchParams.forEach((value, key) => {
      githubUrl.searchParams.append(key, value);
    });

    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'NothingCN-Website',
    };

    // Add GitHub token if available (server-side only)
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(githubUrl.toString(), {
      headers,
      // Cache for 1 minute to avoid rate limiting
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { error: `GitHub API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('GitHub API proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from GitHub API' },
      { status: 500 }
    );
  }
}