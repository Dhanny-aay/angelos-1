import { useState } from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Partners from "../components/partnets";
import Product from "../components/product";
import Service from "../components/service";
import Story from "../components/story";
import logo from './assets/logo.webp';

const Landing = () => {

    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Story/>
        <Product/>
        <Service/>
        <Partners/>
        <Footer/>
        </>
    );
}
 
export default Landing;