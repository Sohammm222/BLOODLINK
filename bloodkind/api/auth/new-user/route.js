// app/api/auth/new-user/route.ts

import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs';
import { prisma } from '@/lib/db'; // ✅ make sure path is correct

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const user = await currentUser();

  if (!user) {
    return new NextResponse('User not found', { status: 404 });
  }

  let dbUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
        email: user.emailAddresses[0]?.emailAddress ?? '',
        imageUrl: user.imageUrl ?? '',
      },
    });
  }

  return NextResponse.redirect('http://localhost:3000/dashboard');
}
