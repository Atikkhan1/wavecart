import ProductDesign from "@/components/ProductDesign";
import React, { useEffect, useState } from "react";


const tshirts = () => {
  const [Data, setData] = useState([])
  useEffect(()=>{
    fetch('/api/getProducts?key=category&&value=tshirt').then((res)=>{
      return res.json();
    }).then((fetchData)=>{
      setData(fetchData)
    })
  },[])

  return (
    <div>
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
  );
}

export default tshirts;
