import React from 'react'
import jsonData from "/data/dashboard.json"; // Import JSON data
const {tips} = jsonData;

const FirstAidTips = () => {
  return (
    <div className='max-w-[1120px] mx-auto mt-[64px] px-4 lg:px-0  ' >
        <h2 className="font-jakarta font-bold text-[24px] text-black "> {tips.title} </h2>
        <p className="font-sans font-normal text-[16px] text-[#3C3C3C] mt-2 "> {tips.p} </p>
        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-[20px] place-content-center mt-6 ">
            {
                tips.cards.map((each,i)=> (
                    <div key={i} className="bg-[#F7F7F8] p-4 rounded-2xl ">
                        <img className='' src={each.img} alt={each.title} />
                        <h3 className="font-jakarta font-bold text-[24px] text-black "> {each.title} </h3>
                        <p className="font-sans font-normal text-base text-[#9EA2AD] mb-4 "> {String(each.p).length >100? `${String(each.p).slice(0,100)}...`: `${each.p}`} </p>
                        <button className='flexCenter gap-1  mt-4 ' >
                            <span className="font-sans font-normal text-[12px] text-[#007AFF] "> {each.button.text} </span>
                            <img src={each.button.icon} alt="read more icon" />
                        </button>
                    </div>
                ))
            }
        </div>
        <button className="border-[1px] border-primary-500 font-[500] font-sans text-base text-primary-500 text-center h-[52px] flexCenter w-full rounded-[10px] mt-6 ">
            {tips.more.text}
        </button>
    </div>
  )
}

export default FirstAidTips