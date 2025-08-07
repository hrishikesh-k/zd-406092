import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log('nextUrl:', request.nextUrl)
  const rewriteUrl = new URL('/page-1/', request.url)
  if (!request.nextUrl.searchParams.has('x-redirected')) {
    rewriteUrl.searchParams.set('x-middleware-original-url', request.url)
  }
  return NextResponse.rewrite(rewriteUrl)
}

export const config = {
  matcher: ['/rewrite/:path*']
}