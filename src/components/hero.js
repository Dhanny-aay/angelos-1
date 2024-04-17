import { Link } from 'react-router-dom';
import heroBg from './assets/heroImg.svg';
import dough from './assets/dough.svg';

const Hero = () => {
    return ( 
        <>
        <div className=" w-full px-6 md:px-20 py-12 mt-24 md:py-24 bg-[#053C2B]">
            <div className=" w-full justify-between items-start flex flex-col lg:flex-row">
                <div style={{backgroundImage:`url(${heroBg})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full lg:w-[45%] h-[450px] rounded-[14px] bg-[#D9D9D9]"></div>
                <div className=' w-full lg:w-[50%] flex flex-col'>
                    <p className=' text-3xl md:text-[68px] md:leading-[72px] font-black mt-6 lg:mt-0 text-white font-Satoshi'>We are Africa’s Bread Company</p>
                    <p className=' mt-3 md:mt-8 text-lg md:text-2xl font-normal font-Satoshi text-white'>We are about everything bread</p>
                    <Link to='/Services'><button className=' py-2 px-5 bg-[#fff] rounded-[30px] text-base font-medium font-Satoshi text-center text-black mt-4 md:mt-8'>Learn more</button></Link>
                    <div  style={{backgroundImage:`url(${dough})`, backgroundPosition:'center', backgroundSize:'cover'}}className=' mt-7 bg-[#D9D9D9] h-[140px] rounded-[14px]'></div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Hero;