import serve1 from './assets/serve1.svg';
import serve2 from './assets/serve2.svg';
import serve3 from './assets/serve3.svg';
import serve4 from './assets/serve4.svg';
import serve5 from './assets/serve5.svg';
import serve6 from './assets/serve6.svg';
import serve7 from './assets/serve7.svg';

const Service = () => {

    const serve =[
        { mobWidth:'199px', width:'275px', name:'Aviation In-flight Catering', img:serve1},
        { mobWidth:'199px', width:'275px', name:'Street Food and Beverage Mobile Nescafe Vans', img:serve2},
        { mobWidth:'199px', width:'275px', name:'Educational Institution Catering', img:serve3},
        { mobWidth:'199px', width:'275px', name:'Marine Catering', img:serve4},
        { mobWidth:'199px', width:'275px', name:'Offshore Catering', img:serve5},
        { mobWidth:'199px', width:'275px', name:'Airport’s Cafe Operations', img:serve6},
        { mobWidth:'293px', width:'510px', name:'Our Strategic Partnership Nestle Nigeria plc in the operation of Mobile Cafe Vans has a huge variety of local street foods and snacks in a planned initial 25 Vans for Lagos we will increase these with time.', img:serve7},
    ]
    return ( 
        <>
        <div className=" w-full py-6 md:py-16 px-6 md:px-20">
            <p className=' text-[#761116] text-[40px] font-bold font-Satoshi'>Services</p>
            <div className=' mt-8 flex flex-row space-x-[24px] overflow-x-auto'>
                {serve.map((item, index) =>(
                    <div key={index} className=' w-full flex flex-col'>
                        <div style={{backgroundImage:`url(${item.img})`, backgroundPosition:'center', backgroundSize:'cover', width: window.innerWidth <= 768 ? item.mobWidth : item.width}} className=' h-[230px] rounded-[12px]'></div>
                        <p className=' font-Satoshi text-base md:text-lg font-medium text-black mt-3'>{ item.name }</p>
                    </div>
                ))}
            </div>
        </div>
        </>
     );
}
 
export default Service;