import { Link } from 'react-router-dom';
import fb from './assets/fb.svg';
import ig from './assets/ig.svg';
import twi from './assets/twi.svg';

const Footer = () => {
    return ( 
        <>
        <div className=' bg-gradient-to-b from-[#751115] to-[#053C2B]'>
            <div className=" w-full pt-8 md:pt-16 px-6 md:px-20 flex flex-row justify-between">
                <div className=" pl-3 md:pl-[5%] pr-3 md:pr-[12%] border-x-[0.5px] border-[#ffffff8b] text-white">
                    <p className=" font-Satoshi font-bold text-sm md:text-xl">Company</p>
                    <Link to='/'><p className=" font-Satoshi font-normal text-xs md:text-base mt-6">Home</p></Link>
                    <Link to='/Services'><p className=" font-Satoshi font-normal text-xs md:text-base mt-2">Services</p></Link>
                    <Link to='/Our-story'><p className=" font-Satoshi font-normal text-xs md:text-base mt-2">About Us</p></Link>
                    <Link to='/contact'><p className=" font-Satoshi font-normal text-xs md:text-base mt-2">Contact Us</p></Link>
                </div>
                <div className="pl-3 md:pl-[5%] pr-3 md:pr-[12%] border-r-[0.5px] border-[#ffffff8b] text-white">
                    <p className=" font-Satoshi font-bold text-sm md:text-xl">Address</p>
                    <p className=" font-Satoshi font-normal md:w-[250px] text-xs md:text-base mt-6">Km5 Lekki-Epe Ekpress Way Near Nicon Town Estate Gate Igbokosu Village, Ikate Elegushi, Lekki Phase One.</p>
                </div>
                <div className="pl-3 md:pl-[5%] pr-0 md:pr-[12%] pt-6 w-full space-y-6 text-white">
                    <img src={ fb } className='w-4 ' alt="" />
                    <img src={ ig } className='w-4 ' alt="" />
                    <img src={ twi } className='w-4 ' alt="" />
                </div>
            </div>
            <div className=' pb-8 text-white text-xs md:text-sm text-center pt-16 font-Satoshi'>
                ©2024 Angelos Holdings Copmany - NO 1203643. All rights reserved.
            </div>
        </div>
        </>
    );
}
 
export default Footer;