import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  
  let optionsData = [
    {name:"Tshirts",link:"/category/tshirts"},
    {name:"Toys",link:"/category/toys"},
    {name:"Shoes",link:"/category/shoes"},
    {name:"Watch",link:"/category/watch"},
    {name:"Hoodies",link:"/category/hoodies"},
    {name:"Shirts",link:"/category/shirts"},
    {name:"Jeans",link:"/category/jeans"},
    {name:"Shorts",link:"/category/shorts"},
  ]


  return (
  <div>
    <div className='w-full flex bg-slate-900 max-md:h-16 shadow-md items-center '>
      <Link href={'/'} className='w-full flex bg-slate-900 max-md:h-16 shadow-md '>
        <img src="/logo.png" alt=""  className='size-12 flex my-auto ml-2' />
        <p  alt=""  className='text-3xl flex my-auto font-sans' > avecart</p>
      </Link>

      <Link className='stroke-white size-8 mx-4' href={'/user/cart'}>
        <svg  viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></  circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      </Link>
      <Link className='stroke-white size-8 mx-4' href={'/user/signup'}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </Link>
    </div>



    <div className='flex  w-full h-10  max-md:overflow-x-auto bg-slate-800 gap-3 p-1'>
{optionsData.map((d)=>{
    return (
    <Link key={d.name} href={d.link} className='flex h-full w-auto px-2 pt-0.5 text-xs rounded-lg md:text-xl   font-extrabold font-mono justify-center items-center'>{d.name}</Link>
  )})}

    </div>
  </div>
  )
}

export default Navbar
