import { NextResponse } from 'next/server';
import registryData from '@/registry/registry.json';

export async function GET() {
  return NextResponse.json(registryData);
}