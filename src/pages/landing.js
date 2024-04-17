import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Product from "../components/product";
import Service from "../components/service";
import Story from "../components/story";

const Landing = () => {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Story/>
        <Product/>
        <Service/>
        <Footer/>
        </>
    );
}
 
export default Landing;