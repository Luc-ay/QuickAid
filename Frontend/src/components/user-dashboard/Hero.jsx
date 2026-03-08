import React from 'react'
import '../styles.css'; 
import jsonData from "/data/dashboard.json"; 
import { useSelector } from "react-redux";  

const { hero } = jsonData; 

const Hero = () => {
  const fullName = useSelector((state) => state.user.fullName || "Guest"); 

  return (
    <div id='Hero2' className='max-w-[1120px] mx-auto min-h-[472px] rounded-[10px] flexCenter'>
      {/* content  */}
      <div className="flexCenter flex-col w-full h-[472px] bg-[#75757594] rounded-[10px] px-4">
        <h2 className="font-jakarta text-center font-bold text-[40px] md:text-[40px] lg:text-[48px] text-white ">
          <span className=""> {hero.greet}{fullName} </span> 
        </h2>
        <p className="font-sans font-normal text-center text-[24px] text-white">
          {hero.p}
        </p>
        <form className='inline-block' onSubmit={(e)=> {e.preventDefault()}}>
          <fieldset className="flexCenter flex-col md:flex-row gap-2 mt-6">
            <input 
              className='w-[300px] md:max-w-[531px] md:min-w-[531px] h-[52px] rounded-[10px] bg-white border-[1px] border-white p-2 placeholder:text-[#747474] placeholder:text-base font-sans outline-none focus:outline-[2px] focus:ring-2 focus:ring-[#007AFF]'
              placeholder={hero.search.placeholder} 
              type="search" 
              name="search" 
              id="search" 
            />
            <button 
              type='submit' 
              className="max-w-[122px] h-[52px] bg-[#007AFF] text-[white] rounded-[10px] font-sans font-[500] text-base min-w-[122px]">
              {hero.search.button}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Hero
