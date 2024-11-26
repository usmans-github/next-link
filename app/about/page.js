import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="container mx-auto px-4 py-8">
         <Link href="/" className='font-semibold'>Back to home</Link>
          <h1 className="text-2xl font-bold mb-4">About NextLink</h1>
          <p>NextLink is a powerful URL shortening service that helps you create concise, shareable links.</p>
        </div>
      )
}

export default page





