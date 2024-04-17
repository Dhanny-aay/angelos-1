import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import left from './assets/left.svg';
import service from './assets/service.svg';
import one from './assets/one.svg';
import two from './assets/two.svg';
import three from './assets/three.svg';
import four from './assets/four.svg';
import five from './assets/five.svg';
import six from './assets/six.svg';
import seven from './assets/seven.svg';
import eight from './assets/eight.svg';
import nine from './assets/nine.svg';
import ten from './assets/ten.svg';
import eleven from './assets/eleven.svg';
import twelve from './assets/twelve.svg';
import thirteen from './assets/thirteen.svg';
import fourteen from './assets/fourteen.svg';
import fifteen from './assets/fifteen.svg';
import sixteen from './assets/sixteen.svg';
import seventeen from './assets/seventeen.svg';
import eighteen from './assets/eighteen.svg';

const Services = () => {

    const product = [
        { name:'Gluten Free Bread', img:one},
        { name:'Angelos Seeded Wheat Bread', img:two},
        { name:'Burger Buns', img: three}, 
        { name:'Sourdough Breads', img:four},
        { name:'Angelos Wholemeal Wheat Bread', img:five},
        { name:'Cinnamon Twirl (Pastry)', img:six},
        { name:'Angelos Fruit Carnival Bread', img:seven},
        { name:'Angelos Mega Meat Pies', img:eight},
        { name:'LongShelf Life Puff-Puff', img:nine},
        { name:'Brioche Loaf', img:ten},
        { name:'Burger Buns', img:eleven},
        { name:'Croissants', img:twelve},
        { name:'Tortillas', img:thirteen},
        { name:'Muffins', img:fourteen},
        { name:'Sourdough Loaf', img:fifteen},
        { name:'Premium White loaf', img:sixteen},
        { name:'8 Long Shelf Life Pancakes', img:seventeen},
        { name:'Hot Dog Buns', img:eighteen},
    ];

    return ( 
        <>
        <Navbar/>
        <div className=" w-full px-6 mt-24 md:px-20 py-12 md:py-16">
            <span className=" flex space-x-3 items-center">
                <Link to='/'><p className=" font-Satoshi text-lg font-medium text-[#98CFBE]">Home</p></Link>
                <img src={ left } alt="" />
                <p className=" font-Satoshi text-lg font-medium text-[#000]">Services</p>
            </span>
            <p className=' text-[#761116] text-[40px] font-bold font-Satoshi mt-8'>Our Services</p>
            <div className=" flex lg:flex-row flex-col mt-6 justify-between items-start">
                <div className="w-full lg:w-[48%] text-justify">
                    <p className=" font-Satoshi text-sm font-normal ">We provide a wide range of services at Angelos Holding Company that are customized to fulfil your requirements. Our team of passionate professionals is dedicated to providing outstanding solutions that will propel you. We take great delight in providing a delightful selection of baked goods and artisanal bread to suit all palates. Here is a sample of what we offer:</p>

                    <div className=" mt-6">
                        <p className="font-Satoshi text-sm font-normal"><span className=" font-semibold">Taste and Aroma of Freshly Baked Bread:</span> Enjoy freshly baked bread from our ovens, featuring a variety of options for every taste and occasion, including traditional sourdough, whole grain, savory focaccia, and sweet brioche.</p>
                    </div>
                    <p className="font-Satoshi text-sm mt-3 font-normal"><span className=" font-semibold">Handmade Pastries:</span> Our handcrafted pastries, including buttery danishes, flaky croissants, rich cinnamon rolls, and delicate macarons, are expertly made using top-quality ingredients and time-honored methods.</p>
                
                    <p className="font-Satoshi text-sm mt-3 font-normal"><span className=" font-semibold">Special Orders:</span> Are you in the mood for something special or unusual? With our custom order service, you can design bespoke bread and pastry selections based on your dietary requirements and personal preferences.</p>
                
                    <p className="font-Satoshi text-sm mt-3 font-normal"><span className=" font-semibold">Retail and Wholesale:</span>  We provide wholesale options to outfit your café, restaurant, or retail store with our mouthwatering bread and bakery goods. We also encourage retail clients to stop by our bakery and experience our products firsthand.</p>

                    <p className="font-Satoshi text-sm mt-3 font-normal"><span className=" font-semibold">Community Engagement:</span> We seek to have a positive influence and contribute to causes that are important to our neighbours and customers through collaborations with neighbourhood groups and projects.</p>
                    
                </div>
                <div style={{backgroundImage:`url(${service})`, backgroundPosition:'', backgroundSize:'cover'}} className="w-full lg:w-[48%] h-[500px] rounded-[14px] mt-6 lg:mt-0 bg- bg-[#D9D9D9]"></div>
            </div>

            <div className=" mt-16">
                <p className=' text-[#761116] text-[40px] font-bold font-Satoshi mt-8'>Products or Services Offered</p>
                <div className=' w-full mt-8 grid grid-cols-2 lg:grid-cols-3 gap-8'>
                    {product.map((item, index) =>(
                        <div  key={index}>
                            <div style={{backgroundImage:`url(${item.img})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' border-8 border-[#761116] rounded-[20px] h-[100px] md:h-[200px]'></div>
                            <p className=" mt-4 font-Satoshi font-bold text-base">{ item.name }</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Services;

       