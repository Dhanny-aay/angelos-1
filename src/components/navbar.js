import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import menu from './assets/menu.svg';

const Navbar = () => {

    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.remove('-translate-y-[500px]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.add('-translate-y-[500px]')
        }
    };


    return ( 
        <>

        <div className=' w-full flex justify-center items-center bg-[#fff]'>
            <div id="overlay" className=" w-full bg-[#FFFFFF] backdrop-blur-xl  flex flex-col -translate-y-[500px] shadow transition-all duration-700 top-[90px] fixed z-[99]">
                <div className="w-full flex flex-col pb-12 font-Satoshi font-medium text-[#121212] text-[15px]">
                    
                    <Link to='/'><p className=" py-4 border-b border-[#000] px-6 mt-2  font-normal transition-all cursor-pointer">Home</p></Link>

                    <Link to='/Services'><span className=' py-4 text-center border-b border-[#000] px-6  flex items-center w-full justify-between'>
                        <p className=''>Services</p>
                    </span></Link>
                    <Link to='/Our-story'><span className=' py-4 text-center border-b border-[#000] px-6  flex items-center w-full justify-between'>
                        <p className=''>About Us</p>
                    </span></Link>
                    <Link to='/contact'><span className=' py-4 text-center bg-[#053C2B] text-white border-b border-[#000] px-6  flex items-center w-full justify-between'>
                        <p className=''>Contact Us</p>
                    </span></Link>
                </div>
            </div>
        </div>

        <div className=" fixed top-0 left-0 w-full px-6 md:px-20 py-6 flex bg-white justify-between items-center">
            <span className=' flex items-center space-x-'>
                <img src={ logo } className=' w-24 md:w-auto' alt="" />
                <p className=' font-Satoshi text-black font-bold text-sm md:text-xl'> Holdings Limited</p>
            </span>
            <div 
            onClick={ overlay }
            className="menu-icon block lg:hidden">
                <input className="menu-icon__cheeckbox" type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <span className=' hidden lg:flex items-center space-x-6 text-black'>
                <Link to='/'><p className=' text-base font-medium font-Satoshi'>Home</p></Link>
                <Link to='/Services'><p className=' text-base font-medium font-Satoshi'>Services</p></Link>
                <Link to='/Our-story'><p className=' text-base font-medium font-Satoshi'>About Us</p></Link>
                <Link to='/contact'><button className=' py-2 px-5 bg-[#053C2B] rounded-[30px] text-base font-medium font-Satoshi text-center text-white'>Contact Us</button></Link>
            </span>
        </div>
        </>
     );
}
 
export default Navbar;