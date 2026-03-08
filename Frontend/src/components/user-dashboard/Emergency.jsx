import React from "react";
import SelectOptions from "../SelectOptions";
import JsonData from "/data/dashboard.json";

const { emergency } = JsonData;

const Emergency = () => {
  const [selectedEmergency, setSelectedEmergency] = React.useState(null);
  return (
      <div className=" max-w-[1120px] mx-auto mt-[64px] px-4 ">
        <h3 className="font-jakarta font-bold text-[24px] text-[red] max-w-[1120px] mx-auto ">
          {" "}
          {emergency.title}{" "}
        </h3>
        <div className="h-fit md:h-[329px] grid grid-cols-1 md:grid-cols-2 gap-[31px] border-[1.5px] border-[red] rounded-[10px] py-[41px] ps-4 md:px-[42px] mt-[50px] md:mt-[24px] bg-[#FF3B302B] ">
          {/* boxa */}
          <div className="order-2 md:order-1 ">
            <h3 className="font-jakarta font-bold text-[24px] text-black "> {emergency.boxa.title} </h3>
            <p className="font-sans font-normal text-[12px] text-black mt-2 "> {emergency.boxa.p} </p>
            <div className="mt-[24px] w-[70%] md:w-full ">
            <SelectOptions
              selectedState={selectedEmergency}
              setSelectedState={setSelectedEmergency}
              placeholder={emergency.boxa.placeholder}
              options={emergency.boxa.options}
            />

            </div>
            <div className="flexStart gap-[10px] mt-[24px] ">
                <img src={emergency.boxa.icon1} alt="press the bottom below" loading="lazy" />
                <span className="font-sans text-[12px] font-[500] text-[red] "> {emergency.boxa.h4} </span>
            </div>
            <button className="flexCenter gap-2 font-sans text-white font-[500] text-base mt-[7px] w-[241px] h-[56px] rounded-[10px] bg-[red] "> 
                <img src={emergency.boxa.icon2} alt="call icon" loading="lazy" />
                <span className="">{emergency.boxa.button}</span>
                 </button>
          </div>
          {/* boxb */}
          <div className="order-1 md:order-2">
            <img className="mt-[-70px] md:mt-[-104px] w-full h-[361px] object-contain md:object-cover block " src={emergency.boxb.img} alt="Emergency in action image" loading="lazy" />
          </div>
        </div>
    </div>
  );
};

export default Emergency;
