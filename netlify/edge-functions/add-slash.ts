import type { Config, Context } from '@netlify/edge-functions'

export default async function handler(request: Request, context: Context) {
  if (context.url.pathname === '/' || request.headers.get('x-nf-sub-request')) {
    return
  }

  for (const suffix of ['/index.html', '.html']) {
    if (context.url.pathname.endsWith(suffix)) {
      return Response.redirect(`${context.url.origin}${context.url.pathname.slice(
        0,
        -suffix.length
      )}/${context.url.search}`, 301)
    }
  }

  console.log(context.url, request.headers)

  if (!context.url.pathname.endsWith('/') && !context.url.pathname.split('/').pop()?.includes('.')) {
    return Response.redirect(`${context.url.origin}${context.url.pathname}/${context.url.search}`, 301)
  }

  const response = await context.next({
    sendConditionalRequest: true
  })

  console.log(response)

  if (response.status === 301 && !context.url.pathname.endsWith('/')) {
    request.headers.set('x-nf-sub-request', '1')
    const newLocation = new URL(response.headers.get('location') || '', request.url)
    newLocation.search = context.url.search
    return newLocation
  }

  return response
}

export const config: Config = {
  excludedPath: '/_next/*',
  path: '/*'
}