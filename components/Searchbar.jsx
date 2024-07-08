import Link from 'next/link'
import React from 'react'

const Searchbar = (p) => {
  return (
    <div className={'flex h-10 md:m-auto md:w-1/2 max-md:w-full border-4 border-current rounded-full bg-green-400 text-green-400 ' + p.className}>
      <input className='w-full text-green-400 rounded-l-full indent-4 focus:outline-none ' type="text" name="search" id="search" placeholder='search products ...'/>
      <Link href={'/'} className='flex my-auto mx-2 text-white' >
      <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </Link>
    </div>
  )
}

export default Searchbar
