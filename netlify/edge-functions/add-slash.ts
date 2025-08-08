import type { Config, Context } from '@netlify/edge-functions'

export default async function handler(_: Request, context: Context) {
  const redirectUrl = context.url.searchParams.get('x-redirect-url')
  const rewriteUrl = context.url.searchParams.get('x-rewrite-url')

  console.log('Redirect URL:', redirectUrl)
  console.log('Rewrite URL:', rewriteUrl)

  if (redirectUrl) {
    return Response.redirect(`${redirectUrl}?x-redirected=true`)
  }

  if (rewriteUrl) {
    return await context.next(
      new Request(rewriteUrl)
    )
  }
}

export const config: Config = {
  excludedPath: '/_next/*',
  path: '/*'
}