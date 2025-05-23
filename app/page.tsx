import Link from 'next/link'

export default function() { 
  return (
    <>
      <h1>Home</h1>
      <Link href="/page-1">Go to Page 1</Link>
      <br/>
      <Link href="/rewrite">Rewrite to Page 1</Link>
    </>
  )
}