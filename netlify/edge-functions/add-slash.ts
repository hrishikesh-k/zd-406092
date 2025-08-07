import type { Config, Context } from '@netlify/edge-functions'

export default async function handler(_: Request, context: Context) {
  const redirectUrl = context.url.searchParams.get('x-redirect-url')
  const rewriteUrl = context.url.searchParams.get('x-rewrite-url')

  if (redirectUrl) {
    return Response.redirect(`${redirectUrl}?x-redirected=true`)
  }

  if (rewriteUrl) {
    return new URL(rewriteUrl || '')
  }
}

export const config: Config = {
  excludedPath: '/_next/*',
  path: '/*'
}