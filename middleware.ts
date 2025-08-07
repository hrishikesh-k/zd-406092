import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const headers = new Headers()
  headers.set('x-middleware-original-url', request.url)
  headers.set('x-middleware-rewrite-2', new URL('/page-1/', request.url).toString())
  const res = NextResponse.next({
    request: {
      headers
    }
  })
  console.log(res)
  return NextResponse.rewrite(new URL('/page-1/', request.url))
}

export const config = {
  matcher: ['/rewrite/:path*']
}