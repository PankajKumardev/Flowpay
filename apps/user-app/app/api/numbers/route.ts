import prisma from '@repo/db/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';

  const numbers = await prisma.user.findMany({
    where: {
      number: {
        contains: search,  // Filtering numbers based on user input
      },
    },
    select: {
      number: true,
    },
  });

  return NextResponse.json({ numbers });
}
