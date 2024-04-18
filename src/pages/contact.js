import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import left from './assets/left.svg';

const Contact = () => {
    return ( 
        <>
        <Navbar/>
        <div className=" mt-24 w-full px-6 md:px-20 py-12 md:py-16">
            <span className=" flex space-x-3 items-center">
                <Link to='/'><p className=" font-Satoshi text-lg font-medium text-[#98CFBE]">Home</p></Link>
                <img src={ left } alt="" />
                <p className=" font-Satoshi text-lg font-medium text-[#000]">Contact Us</p>
            </span>
            <p className=' text-[#761116] text-[40px] font-bold font-Satoshi mt-8'>Contact Us</p>

            <div className=" w-full flex flex-col-reverse md:flex-row justify-between mt-6 md:mt-12 items-start">
                <div className=" w-full md:w-[30%]">
                    <p className=" underline font-Satoshi font-normal text-base">Info@ahl.com</p>
                    <p className=" mt-3 font-Satoshi font-normal text-base">+234-806-001-2678</p>

                    <p className=" mt-12 text-xl font-medium font-Satoshi mb-5">Follow Us on:</p>
                    <span className=" space-y-3 font-Satoshi text-base font-normal">
                        <p className="">Instagram</p>
                        <p className="">Twitter</p>
                        <p className="">Facebook</p>
                    </span>
                </div>

                <div className=" w-full mt-6 md:mt-0 md:w-[60%]">
                    <input type="text" name="name" placeholder="Your Name*" required className=" w-full py-2.5 placeholder:font-Satoshi font-Satoshi border-b border-[#000000]" id="" />
                    <input type="text" name="name" placeholder="Your Email*" required className=" w-full py-2.5 placeholder:font-Satoshi font-Satoshi border-b mt-4 border-[#000000]" id="" />
                    <textarea type="text" name="name" placeholder="Message*" required className=" w-full py-2.5 placeholder:font-Satoshi font-Satoshi border-b mt-4 border-[#000000]" id="" />
                    <span className=" w-full ">
                        <button className=' py-2 px-5 block mt-6 ml-auto bg-[#053C2B] rounded-[30px] text-base font-medium font-Satoshi text-center text-white'>Send</button>
                    </span>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Contact;