import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ProductDesign from "@/components/ProductDesign";
import Categorybar from '@/components/Categorybar';



const slug = () => {
  let router = useRouter()
  let {slug}= router.query
  const [Data, setData] = useState([])
    useEffect(()=>{
      console.log(slug)
      fetch(`/api/getProducts?key=category&&value=${slug}`).then((res)=>{
        return res.json();
      }).then((fetchData)=>{
        setData(fetchData)
        console.log(fetchData)
      })
    },[])
  
    return (
      <div>
        <Categorybar></Categorybar>
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto ">
            <div className="flex flex-wrap  max-md:gap-x m-4">
  
              
            {Data.map((pro)=>{
                return  (
                <ProductDesign key={pro._id} id={pro._id} name={pro.name.slice(0,30)+'...'} 
                image={pro.image} 
                price={pro.price}
                category={pro.category}
                />)})}
  
  
  
            </div>
          </div>
        </section>
      </div>
    );
  }

export default slug
