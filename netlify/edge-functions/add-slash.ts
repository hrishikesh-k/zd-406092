import type { Config, Context } from '@netlify/edge-functions'

export default async function handler(request: Request) {
  const rewrite = request.headers.get('x-middleware-rewrite-2')
  if (rewrite) {
    return Response.redirect(request.headers.get('x-middleware-original-url') || rewrite)
  }
}

export const config: Config = {
  excludedPath: '/_next/*',
  path: '/*'
}