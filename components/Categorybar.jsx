import Link from 'next/link'
import React from 'react'

const Categorybar = () => {

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
    <div className={`flex w-full h-10  max-md:overflow-x-auto bg-gray-100 gap-3 p-1 shadow-inner shadow-gray-400`}>
    {optionsData.map((d)=>{
    return (
    <Link key={d.name} href={d.link} className='flex h-full w-auto px-2 pt-0.5 text-xs rounded-lg md:text-xl   font-extrabold font-mono justify-center text-black items-center'>{d.name}</Link>
)})}

  </div>
  )
}

export default Categorybar
