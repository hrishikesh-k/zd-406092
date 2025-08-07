import { url } from 'inspector'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const rewriteUrl = new URL('/page-1/', request.url)
  rewriteUrl.searchParams.set('x-middleware-original-url', request.url)
  return NextResponse.rewrite(rewriteUrl)
}

export const config = {
  matcher: ['/rewrite/:path*']
}