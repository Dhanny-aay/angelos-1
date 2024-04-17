import one from './assets/one.svg';
import two from './assets/two.svg';
import three from './assets/three.svg';
import four from './assets/four.svg';
import five from './assets/five.svg';
import six from './assets/six.svg';
import bullet from './assets/bullet.svg';
import { Link } from 'react-router-dom';
import right from './assets/right.svg';


const Product = () => {

    const product = [one, two, three, four, five, six];
    return ( 
        <>
        <div className=" w-full py-8 md:py-16 px-6 md:px-20 border-y border-[#000] flex flex-col lg:flex-row items-center justify-between">
            <div className=' w-full lg:w-[63%] grid grid-cols-3 gap-5'>
                {product.map((item, index) =>(
                    <div key={index} style={{backgroundImage:`url(${item})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' border-8 border-[#761116] rounded-[20px] h-[100px] md:h-[200px]'></div>
                ))}
            </div>
            <div className=' w-full lg:w-[33%] mt-8 lg:mt-0'>
                <p className=' text-3xl md:text-[40px] md:leading-[60px] font-Satoshi font-bold mb-8'>Products or Services Offered</p>
                <span className='space-y-3'>
                    <p className=' flex items-center font-Satoshi font-medium text-black text-base md:text-lg'><span  className=' mr-3'><img src={ bullet } alt="" /></span>30+ Products</p>
                    <p className=' flex items-center font-Satoshi font-medium text-black text-base md:text-lg'><span  className=' mr-3'><img src={ bullet } alt="" /></span>Premium Quality</p>
                    <p className=' flex items-center font-Satoshi font-medium text-black text-base md:text-lg'><span  className=' mr-3'><img src={ bullet } alt="" /></span>100+ Flavours</p>
                </span>
                <Link to='/Services'><button className=' py-2 px-5 border border-[#000] flex space-x-3 items-center mt-6 rounded-[30px] text-base font-medium font-Satoshi text-center text-black'>
                    <p>See all products</p>
                    <img src={ right } alt="" />
                </button></Link>
            </div>
        </div>
        </>
     );
}
 
export default Product;