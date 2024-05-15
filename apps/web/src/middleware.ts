import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server'
import {auth} from "@/auth"
 
export async function middleware(request: NextRequest): Promise<NextResponse> {
  const session = await auth()
 
  // If the user is authenticated, continue as normal
  if (session) {
    return NextResponse.next()
  }
 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL(`/login?url=${request.nextUrl.pathname}`, request.url))
}
 
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile',
    '/dashboard/edit/:id*', 
    '/dashboard/delete/:id*'

  ],
}