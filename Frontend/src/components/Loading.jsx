import React from 'react'

const Loading = ({text="Loading...",src="/logo.svg"}) => {
  return (
    <div className='flexCol gap-3 h-[100vh] w-full absolute top-0 text-black font-bold text-2xl italic ' >
      <div style={{backgroundImage: `url(${src})`,backgroundSize: "50%",backgroundPosition: "center"}} className="w-[80px] h-[80px] bg-no-repeat  ">
      <span  className='border-[5px] block rounded-full border-dotted animate-spin w-[80px] h-[80px] border-blue-700 p-[2px] ' >.</span>

      </div>
      <span> {text}</span>
        </div>
  )
}

export default React.memo(Loading);