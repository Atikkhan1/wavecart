import React, { useState } from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
const Navbar = () => {
  
  const [value,setValue] = useState(true)

  const [display, setdisplay] = useState('none')

  let optionsData = [
    {name:"Tshirts",link:"/category/tshirts"},
    {name:"Toys",link:"/category/toys"},
    {name:"Shoes",link:"/category/shoes"},
    {name:"Watch",link:"/category/watch"},
    {name:"Hoodies",link:"/category/hoodies"},
    {name:"Shirts",link:"/category/shirts"},
    {name:"Jeans",link:"/category/jeans"},
    {name:"Shorts",link:"/category/shorts"},
    {name:"earbuds",link:"/category/earbuds"},
  ]


  return (
  <div className=' shadow-2xl shadow-gray-500'>
  <style jsx global>
  {`

  .SideBardisplay{
    display:${display};
  }
    
    `}
</style>

    <div className='w-full flex bg-white 
    items-center '>

    <button className='text-black' >

    <svg onClick={()=>{
      value == true ? setValue(false): setValue(true)
      value == true ? setdisplay('none') : setdisplay('flex')
    }}
    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 19 19" fill="none" stroke="currentColor" strokeWidth="1.5"  strokeLinejoin="round" className="size-10 ml-3 cursor-pointer "><line x1="15" y1="10" x2="3" y2="10"></line><line x1="15" y1="6" x2="3" y2="6"></line><line x1="15" y1="14" x2="3" y2="14"></line></svg>
    </button>
    
      <Link href={'/'} className=' flex max-md:h-16 text-black'>
        <img src="/logo.png" alt=""  className='size-12 flex my-auto ml-1' />
        <p  alt=""  className='text-3xl flex my-auto font-sans -mx-1' > avecart</p>
      </Link>

      <Searchbar className="max-md:hidden"></Searchbar>

      <Link className='stroke-white size-6 mx-4 ml-auto text-black' href={'/user/cart'}>
        <svg  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></  circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      </Link>
      <Link className='stroke-white size-6 mx-4 text-black' href={'/user/signup'}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </Link>
    </div>
    <div className='flex md:hidden w-full h-12 bg-white'>
      <Searchbar className="mx-2 "></Searchbar>

    </div>
    <div className={`flex w-full h-10  max-md:overflow-x-auto bg-gray-100 gap-3 p-1 shadow-inner shadow-gray-400`}>
      {optionsData.map((d)=>{
      return (
      <Link key={d.name} href={d.link} className='flex h-full w-auto px-2 pt-0.5 text-xs rounded-lg md:text-xl   font-extrabold font-mono justify-center text-black items-center'>{d.name}</Link>
  )})}

    </div>
  </div>
  )
}

export default Navbar
