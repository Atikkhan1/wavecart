import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {


  return (
    <div className="" style={{height:'100vh'}}>
    <Navbar ></Navbar>
    
    <div className="flex w-full" style={{height:'100vh'}}>
      <Sidebar ></Sidebar>
      
      <div className=" w-full overflow-y-scroll" >
      <Component {...pageProps} />
      
      <Footer></Footer>
      </div>
    </div>
    </div>
  );
}
