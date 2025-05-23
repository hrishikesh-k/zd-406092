import type { PropsWithChildren } from 'react'

export default function(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}