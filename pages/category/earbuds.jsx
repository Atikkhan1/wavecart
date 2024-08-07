import Categorybar from "@/components/Categorybar";
import ProductDesign from "@/components/ProductDesign";
import React, { useEffect, useState } from "react";


const hoodies = () => {
    const [Data, setData] = useState([])
    useEffect(()=>{
      fetch('/api/getProducts?key=category&&value=earbuds').then((res)=>{
        return res.json();
      }).then((fetchData)=>{
        setData(fetchData)
      })
    },[])
    
  
    return (
      <div>
        <Categorybar></Categorybar>
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto ">
            <div className="flex flex-wrap  max-md:gap-x m-4">
  
              
            {Data.map((pro)=>{
                return  (<ProductDesign key={pro.name} id={pro._id} name={pro.name.slice(0,30)+'...'} 
                image={pro.image} 
                price={pro.price}
                category={pro.category}
                />)})}
  
  
  
            </div>
          </div>
        </section>
      </div>
  )
}

export default hoodies