import Categorybar from "@/components/Categorybar";
import Footer from "@/components/Footer";
import Loadingbar from "@/components/Loadingbar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { Suspense } from "react";


export default function App({ Component, pageProps }) {


  return (
    < >
    <Navbar ></Navbar>
    
    <div className="flex w-full" style={{height:'100vh'}}>
      <Sidebar ></Sidebar>
      
      <div className=" w-full overflow-y-scroll" >

      
        
        <Component {...pageProps}></Component>

      
      <Footer></Footer>
      </div>
    </div>
    </>
  );
}
