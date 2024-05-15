import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server'
import {auth} from "@/auth"
 
export async function middleware(request: NextRequest): Promise<NextResponse> {
  const session = await auth()
 
  
  if (session) {
    
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      
      if (session.user.role === 'admin') {
        return NextResponse.next()
      } 
        
      return NextResponse.redirect(new URL('/', request.url))
      
    }
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