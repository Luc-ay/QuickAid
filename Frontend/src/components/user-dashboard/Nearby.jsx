import React, { useRef, useState } from "react";
import MyMap from "../Maps";
import jsonData from "/data/dashboard.json"; // Import JSON data
const { nearby,directions } = jsonData; // Destructure to get the nearby data

const Nearby = () => {
     const mapRef = useRef(null);
  const [mapUrl, setMapUrl] = useState(
    'https://www.google.com/maps?q=Lagos%20State%20University%20Teaching%20Hospital&output=embed'
  );
  const [title,setTitle] = useState("LASUTH Location")

  const scrollToMap = () => {
   mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  };

  const handleDirectionsClick = (toUrl) => {
    setMapUrl(toUrl);
    scrollToMap();
  };
    function generateEmbedURL(name, address) {
  const query = encodeURIComponent(`${name}, ${address}`);
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

  return (
    <div
      ref={mapRef}  // ✅ Add ref here
    className="max-w-[1120px] mx-auto mt-[64px] px-4 lg:px-0 " >
        <h3 
        
        className="font-jakarta font-bold text-[24px] text-black text-center md:text-start  ">
          {nearby.title}
        </h3>
        <p className="mt-2 font-sans text-[#3C3C3C] text-base font-normal text-center md:text-start "> {nearby.p} </p>
      <div 
       className="w-full h-[200px] lg:h-[400px] rounded-md shadow-lg overflow-hidden mt-[24px] border-[2px] border-primary-500 ">
        <MyMap mapUrl={mapUrl} />
      </div>
      {/* directions */}
      <div className="mt-6 ">
        {directions.map((item, idx) => (
        <div key={idx} className="mb-4 shadow-md min-h-[124px] bg-[#F8F8F8] rounded px-1 py-2 md:p-4 flex items-center justify-between flex-col sm:flex-row gap-y-4 ">
          <div className="flexStart flex-nowrap gap-2 md:gap-6 ">
            <div className="min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-full flexCenter bg-[#007AFF26] border-[1px] border-[#007AFF26] ">
                <img src={item.icon} alt="hospital icon" className="w-6 h-6" />
            </div>
            <div className="">
                <h2 className="font-bold font-jakarta font-base text-black ">{item.title}</h2>
            <p className="font-sans font-normal text-sm text-[#3C3C3C]">{item.p}</p>
            </div>
          </div>
          <button
            onClick={() => {handleDirectionsClick(generateEmbedURL(item.title, item.p));setTitle(item.title)}}
            className="border-[2px] w-fit md:w-[188px] h-[49px] md:h-[59px] flexCenter border-[#1976D299] text-primary-500 px-3 py-1 rounded-[10px] hover:bg-green-200 ga-4 font-semibold "
          >
            <img src={item.button.icon} alt="get direction icon" className="w-6 h-6" />
            <span>{item.button.text}</span>
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Nearby;
