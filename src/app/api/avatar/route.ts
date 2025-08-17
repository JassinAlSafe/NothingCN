import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const avatarUrl = searchParams.get('url');
    
    if (!avatarUrl) {
      return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
    }

    // Validate that this is a GitHub avatar URL
    if (!avatarUrl.startsWith('https://avatars.githubusercontent.com/')) {
      return NextResponse.json({ error: 'Invalid avatar URL' }, { status: 400 });
    }

    const response = await fetch(avatarUrl, {
      // Cache for 1 hour since avatars don't change frequently
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch avatar: ${response.status}` },
        { status: response.status }
      );
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/png';
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Avatar proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch avatar' },
      { status: 500 }
    );
  }
}