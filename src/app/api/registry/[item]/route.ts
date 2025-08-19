import { NextResponse } from 'next/server';
import registryData from '@/registry/registry.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ item: string }> }
) {
  const { item } = await params;
  
  const registryItem = registryData.items.find(
    (registryItem) => registryItem.name === item
  );

  if (!registryItem) {
    return NextResponse.json(
      { error: 'Component not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(registryItem);
}