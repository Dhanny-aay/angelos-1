import serve1 from './assets/serve1.svg';
import serve2 from './assets/serve2.svg';
import serve3 from './assets/serve3.svg';
import serve4 from './assets/serve4.svg';
import serve5 from './assets/serve5.svg';
import serve6 from './assets/serve6.svg';

const Service = () => {

    const serve =[
        {name:'Aviation In-flight Catering', img:serve1},
        {name:'Street Food and Beverage Mobile Nescafe Vans', img:serve2},
        {name:'Educational Institution Catering', img:serve3},
        {name:'Marine Catering', img:serve4},
        {name:'Offshore Catering', img:serve5},
        {name:'Cafe Operation at the Airport', img:serve6},
    ]
    return ( 
        <>
        <div className=" w-full py-6 md:py-16 px-6 md:px-20">
            <p className=' text-[#761116] text-[40px] font-bold font-Satoshi'>Services</p>
            <div className=' mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {serve.map((item, index) =>(
                    <div key={index} className=' w-full flex flex-col'>
                        <div style={{backgroundImage:`url(${item.img})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' w-full h-[200px] rounded-[12px]'></div>
                        <p className=' font-Satoshi text-base md:text-lg font-medium text-black'>{ item.name }</p>
                    </div>
                ))}
            </div>
        </div>
        </>
     );
}
 
export default Service;