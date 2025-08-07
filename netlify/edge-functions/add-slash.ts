import type { Config, Context } from '@netlify/edge-functions'

export default async function handler(request: Request, context: Context) {
  const rewrite = request.headers.get('x-middleware-rewrite')
  if (rewrite) {
    return Response.redirect(rewrite)
  }
}

export const config: Config = {
  excludedPath: '/_next/*',
  path: '/*'
}