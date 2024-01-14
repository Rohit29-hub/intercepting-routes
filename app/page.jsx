import Link from 'next/link'
import './globals.css'
export default function Home() {
  return (
    <main className='m-2'>
        <h1 className='text-4xl'>Go to Project Page....</h1>
        <Link className='text-2xl underline text-blue-600' href='/feed'>Checkout Project...</Link>
    </main>
  )
}
