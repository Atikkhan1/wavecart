import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar></Navbar>

      
    <Sidebar></Sidebar><Component {...pageProps} />
    
    <Footer></Footer>
    </>
  );
}
