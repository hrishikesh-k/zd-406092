import type { Config, Context } from '@netlify/edge-functions'

export default async function handler(request: Request, context: Context) {
  const originalUrl = context.url.searchParams.get('x-middleware-original-url')
  const rewrite = request.headers.get('x-middleware-rewrite')
  console.log('originalUrl:', originalUrl, 'rewrite:', rewrite)
  if (originalUrl && rewrite) {
    return Response.redirect(`${originalUrl}?x-redirected=true`)
  }
}

export const config: Config = {
  excludedPath: '/_next/*',
  path: '/*'
}