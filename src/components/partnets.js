import part1 from './assets/part1.svg';
import part2 from './assets/part2.svg';
import part3 from './assets/part3.svg';
import part4 from './assets/part4.svg';
import part5 from './assets/part5.svg';
import part6 from './assets/part6.svg';
import part7 from './assets/part7.svg';
import part8 from './assets/part8.svg';
import part9 from './assets/part9.svg';
import part10 from './assets/part10.svg';
import part11 from './assets/part11.svg';


const Partners = () => {

    const partner1 = [
        part1, part2, part3, part4, part5, part6
    ];

    const partner2 = [
        part7, part8, part9, part10, part11
    ];

    return ( 
        <>
        <div className=" px-6 md:px-20 py-8 md:py-16 border-y border-[#000] mb-16">
            <p className=' text-[#761116] text-2xl md:text-[40px] font-bold font-Satoshi'>Strategic Partners</p>
            <div className=' overflow-x-auto'>
                <div className=" w-full pb-6 md:pb-12 mt-8">
                    <div className=" w-full flex flex-row justify-between items-start">
                        { partner1.map((item, index) =>(
                            <img key={index} src={ item } className=' w-[15%] md:w-[12%]' alt="" />
                        )) }
                    </div>
                </div>

                <div className=" w-full mt-8 pt-6 md:pt-12 border-t border-[#000]">
                    <div className=" w-full flex flex-row justify-between items-center">
                        { partner2.map((item, index) =>(
                            <img key={index} src={ item } className=' w-[15%] md:w-[12%]' alt="" />
                        )) }
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Partners;