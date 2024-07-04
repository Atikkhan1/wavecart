import Link from 'next/link'
import React, { useState } from 'react'
const Sidebar = () => {
  const [Sdisplay, setSdisplay] = useState('none')
  return (

    <div className={` md:w-2/12 max-md:w-2/5 SideBardisplay max-md:fixed z-10 border-r-2  shadow-lg max-md:shadow-black bg-slate-50`} style={{height:'100%'}}>
    <Link href={'/category/tshirts'} onClick={()=>{
    
    }}>
    tshirts</Link>

    </div>
  )
}

export default Sidebar
