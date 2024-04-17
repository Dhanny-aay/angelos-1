import { Link } from 'react-router-dom';
import stoImg from './assets/stoImg.svg';


const Story = () => {
    return ( 
        <>
        <div className=" px-6 md:px-20 py-8 md:py-16 flex lg:flex-row flex-col  justify-between items-start">
            <div className=" w-full lg:w-[48%]">
                <p className=' text-[#761116] text-[40px] font-bold font-Satoshi'>Our Story</p>
                <p className=' mt-6 text-base md:text-lg font-normal text-justify text-black'>Founded in 2010 in Nigeria, Angelos Holdings Limited (AHL) was established to bridge the gap in the market for high-quality convenience foods and bakery products. Our mission is to become Africa’s premier, home-grown, innovative food brand, specializing in a direct-to-market approach for an extensive range of bakery and snack items.</p>
                <Link to='/Our-story'><button className=' py-2 px-5 bg-[#053C2B] mt-6 rounded-[30px] text-base font-medium font-Satoshi text-center text-white'>Read more</button></Link>
            </div>
            <div style={{backgroundImage:`url(${stoImg})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full lg:w-[48%] h-[400px] rounded-[14px] mt-6 lg:mt-0 bg-center bg-[#D9D9D9]"></div>
        </div>
        </>
    );
}
 
export default Story;