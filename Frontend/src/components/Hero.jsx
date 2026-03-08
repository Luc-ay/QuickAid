import { motion } from 'framer-motion';
import '../components/styles.css'; // Import your styles;
import jsonData from "/data/hero.json";
import { useNavigate } from 'react-router-dom';
const left = jsonData.left;


const Hero = () => {
  const redir = useNavigate();
  return (
    <section id='Hero'  className="relative h-[550px] md:h-[720px] grid grid-cols-1 md:grid-cols-[450px_1fr] lg:grid-cols-[541px_1fr] 2xl:grid-cols-2 ">
      {/* left */}
      <div className="px-6 md:ps-[70px] md:max-w-[541px] flex flex-col items-center md:items-start  ">
        <h2 className="flexColStart items-center md:items-start pt-[100px] md:pt-[172px] font-jakarta md:leading-[63.48px] font-bold text-[30px]  text-center md:text-left md:text-5xl text-nowrap text-[#333333] ">
          <span className=""> {left.h2a} </span>
          <span className=""> {left.h2b} </span>
        </h2>
        <p className="font-sans font-normal text-[#374151] text-center md:text-left text-base mt-4   "> {left.p} </p>
        {/* cta */}
        <div className="flexStart gap-[24px] mt-10 ">
          {/* emargency */}
          <button className='py-[10px] px-[25px] md:py-[19.5px]  md:px-[52px] text-nowrap rounded-[6px] bg-[#E53935] text-[white] flexCenter font-inter font-[500] text-[12px] ' onClick={()=> redir(left.buttons.red.path)}  aria-label="Request immediate emergency assistance" >
            {left.buttons.red.text}
          </button>
          {/* get started */}
          <button className='py-[10px] px-[25px] md:py-[19.5px]  md:px-[52px] text-nowrap rounded-[6px] bg-primary-500 text-[white] flexCenter font-inter font-[500] text-[12px] ' onClick={()=> redir(left.buttons.blue.path)}  aria-label="Get started with the sign-up process" >
            {left.buttons.blue.text}
          </button>
        </div>
        {/* stats */}
        <div className="flexStart gap-[24px] mt-[42.95px] ">
          {
            left.stats.map((each,i)=>(
              <div key={i} className="flexColStart gap-2 ">
                <h3 className="font-bold text-[24px] font-inter text-[#333333] "> {each.number} </h3>
                <p className="font-normal text-[12px] font-sans text-[#374151]"> {each.text} </p>
              </div>
            ))
          }
        </div>
      </div>
      {/* right */}
      <div id='Hero-img'  className=" hidden md:grid "></div>
    </section>
  );
};

export default Hero;