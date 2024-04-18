import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import left from './assets/left.svg';
import stoImg from './assets/stoImg.svg';
import sds from './assets/sds.svg';

const Story = () => {

    const board =[
        {name:'Mr. Michael Orimobi,', position:'  LL.B, LL.M (Cantab), BL', about:`Is the Chairman of the Board at Angelos Holdings Limited and also chairs TOLG, Ash Xander consultancy, and BEX conglomerate in Nigeria. Known as "MO," he excels in capital and money markets, corporate finance, and project finance, holding director roles in DLM Capital Group and Adino Capital. Michael's career spans investment banking and law, earning recognition in IFLR1000 and Who’s Who Legal. With a master’s degree in commercial law from the University of Cambridge, focusing on corporate finance, tax, intellectual property law, and corporate governance, he is a member of the Nigerian Bar Association (NBA) and the International Bar Association (IBA). Michael is a mentor contributing to the Tokunbo Orimobi Foundation's MEA focus, embodying excellence in both legal and business realms as a senior legal practitioner with significant capital markets and investment banking experience.`},

        {name:'Edwin Moore Momife,', position:'Group Managing Director', about:`Edwin, is a corporate transformation and business growth leader with over 30 years of experience. His expertise spans roles at Xerox, SAP, and the Mobile Telecom Industry. Edwin successfully grew Mtel, a government-owned mobile operator, from fledgling to N20bn turnover in 24 months as both CMO and CEO. In recent years, Edwin served as a sales growth transformation leader to PE firms like Actis, contributing to over N100Bn in sales for brands such as Mouka Foam, GDK Fragrances, Xpression Hair Products, and Frutta Juice. He owns and directs the sales function, physical distribution, and overall business strategy at Angelos Holdings, aiming to capture significant market share in the bread and specialist breads market. Edwin's strategic partnership’s role has been pivotal in the success of Angelos Aviation Catering and Angelos Gourmet Café, each with a substantial presence in the industry. With degrees in Marketing, Economics, and a Master’s in International Business Management, Edwin has driven the Angelos brand to prominence in the food industry.`},

        {name:'Dr Donald Eneh,', position:'Executive Director Operations', about:'Donald Eneh, our Executive Director of Operations, is a Medical Doctor (MBBS) and a seasoned operations management leader. With a strong background in public health and a fellowship from the Institute of Health Insurance Practitioners of Nigeria, Donald combines medical expertise with operational prowess. A Harvard Business School alum in management, leadership, and strategy, Donald brings over 10 years of experience in operations, organizational design, and administrative excellence. His role as the founding CEO of the Nigeria Police Health Maintenance Organization demonstrates his ability to manage healthcare operations, supporting the largest HMO in Africa. In his capacity at Angelos Holdings, Donald leverages his extensive operational experience to drive efficiency and excellence, ensuring the company becomes a well-oiled organization capable of meeting and exceeding its operational goals.'},

        {name:'Mr. Francis Osuyah,', position:'Non-Executive Director', about:'Is a Chartered Accountant with over twenty-five years of corporate management experience. He is the CEO of FROS CAPITAL, a capitalraising and corporate management company based in South Africa. Osuyah has extensive experience in management and accounting, his professional background and expertise revolve around finance, management, and corporate governance.'},

        {name:'Mr. Kanayo Chuks Okoye,', position:'Non-Executive Director', about:`Kanayo Chuks Okoye is a prominent figure in the business and legal sectors. He is the Managing Partner and Head of the Transaction Advisory Services Group of Pentagon Partners LP, a Consulting Partner at the same firm, and a Director at Whitfield Global Resources Limited. Okoye also holds a Master's of Law degree. His professional experience and leadership roles underscore his expertise in legal service delivery and strategic development. Additionally, he is associated with Industrial and General Insurance Plc, where he serves in a non-executive director.`},

        {name:'Mr. Zainab Abiola,', position:'Director', about: `Zainab Abiola is a seasoned product and distribution strategist: she drives commercial strategy. She also has a significant experience in distribution and FMCG channel development, her role is to expand our channel capacity with innovative partnerships and alliances to service our growing manufacturing volume. In order to soak up our volume and supermarket market expansion Zainab has Bachelor's Degree  in Chemistry from University of Surrey, UK. Zainab ia an alumni of Harvard Business School`},
    ]
    return ( 
        <>
        <Navbar/>
        <div className=" w-full px-6 md:px-20 py-12 mt-24 md:py-16">
            <span className=" flex space-x-3 items-center">
                <Link to='/'><p className=" font-Satoshi text-lg font-medium text-[#98CFBE]">Home</p></Link>
                <img src={ left } alt="" />
                <p className=" font-Satoshi text-lg font-medium text-[#000]">About Us</p>
            </span>
            <p className=' text-[#761116] text-[40px] font-bold font-Satoshi mt-8'>Our Story</p>
            <div className=" flex lg:flex-row flex-col mt-6 justify-between items-start pb-16">
                <div className="w-full lg:w-[48%] text-justify">
                    <p className=" font-Satoshi text-sm 2xl:text-base font-normal ">Founded in 2010 in Nigeria, Angelos Holdings Limited (AHL) was established to bridge the gap in the market for high-quality convenience foods and bakery products. Our mission is to become Africa’s premier, home-grown, innovative food brand, specializing in a direct-to-market approach for an extensive range of bakery and snack items.</p>

                    <div className=" mt-4">
                        <p className=" text-[#751115] text-base font-bold font-Satoshi">Mission</p>
                        <p className="font-Satoshi text-sm 2xl:text-base font-normal mt-2"> Enjoy freshly baked bread from our ovens, featuring a variety of options for every taste and occasion, including traditional sourdough, whole grain, savory focaccia, and sweet brioche.</p>
                    </div>
                    <div className=" mt-4">
                        <p className=" text-[#751115] text-base font-bold font-Satoshi">Vision</p>
                        <p className="font-Satoshi text-sm 2xl:text-base font-normal mt-2">Our vision is to transform the baking and food service industry, achieving market leadership to enhance service delivery to a broader consumer base in the most viable and economically sustainable ways possible. We are committed to values of people first, health, affordability, expertise, benevolence, and prosperity.</p>
                    </div>
                    <div className=" mt-4">
                        <p className=" text-[#751115] text-base font-bold font-Satoshi">Culture</p>
                        <p className="font-Satoshi text-sm 2xl:text-base font-normal mt-2"> At Angelos, we are driven by speed, growth, and knowledge. Leveraging years of experience, profound industry knowledge, and scientific innovation, we are poised to disrupt and lead in the fragmented yet substantial bread, baked goods, and snacks market valued at $68 billion in Nigeria and, subsequently, across the broader sub-Saharan Africa region.</p>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${stoImg})`, backgroundPosition:'', backgroundSize:'cover'}} className="w-full lg:w-[48%] h-[500px] rounded-[14px] mt-6 lg:mt-0 bg- bg-[#D9D9D9]"></div>
            </div>

            <div className=" py-16 border-y border-[#000]">
                <div className=" flex lg:flex-row flex-col mt-6 justify-between items-start pb-16">
                    <div className="w-full lg:w-[48%] text-justify">
                        <div className="">
                            <p className=" text-[#751115] text-base font-bold font-Satoshi">Growth and Expansion</p>
                            <p className="font-Satoshi text-sm 2xl:text-base font-normal mt-2">Angelos Holdings Limited is actively seeking sustained strategic and channel partners deepen our to fuel our growth and cater to increasing demand for our bakery products. We have secured off-taker agreements with top supermarket brands, this will significantly boosting business growth over time.</p>
                        </div>
                        <div className=" mt-4">
                            <p className=" text-[#751115] text-base font-bold font-Satoshi">New Initiatives</p>
                            <p className="font-Satoshi text-sm 2xl:text-base font-normal mt-2">In our quest to expand our market reach, AHL is set to launch a mobile mass-market café in collaboration with Nescafe. This initiative will offer affordable hot and cold beverages, popular street food, and mass-market bread. Additionally, through our Angelos Offshore Catering Subsidiary, we provide aviation, marine, sports, and institutional catering services, further diversifying our business and enhancing our market footprint.</p>
                        </div>
                        <div className=" mt-4">
                            <p className=" text-[#751115] text-base font-bold font-Satoshi">Digital Engagement</p>
                            <p className="font-Satoshi text-sm 2xl:text-base font-normal mt-2">Embrace convenience with Onibread.com, our B2B and B2C ecommerce platform that delivers our entire range of bread and bakery products directly to households, offices, and the HORECA sector.</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${sds})`, backgroundPosition:'', backgroundSize:'cover'}} className="w-full lg:w-[48%] h-[450px] rounded-[14px] mt-6 lg:mt-0 bg- bg-[#D9D9D9]"></div>
                </div>
            </div>

            <div className=" w-full pt-16">
                <p className=' text-[#761116] text-[40px] font-bold font-Satoshi'>Board of Directors</p>
                <div className=" w-full overflow-x-auto">
                    <div className=" mt-8 space-x-8 flex items-start">
                        {board.map((item, index) =>(
                            <div key={index} className=" flex flex-col font-Satoshi">
                                <div className=" h-[7em]">
                                    <p className=" font-bold text-4xl">{ item.name }</p>
                                    <p className=" font-medium text-xl mt-3 italic">{ item.position }</p>
                                </div>
                                <p className=" mt-4 text-sm 2xl:text-base w-[280px] md:w-[450px]">{ item.about }</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
 
export default Story;