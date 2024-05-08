import React from 'react'

export const Weather = () => {
  return (
    <>
      <div className="self-center  mt-[46px]  mb-[10px] 2xl:mt-[76px]" >
          <img src='./images/Shower.png' alt="weather" width="150" height="174" />
      </div>
      <div className="text-center">
            <h1 className="text-silver font-medium text-[120px] text-[#E7E7EB]">15<span className="text-[] text-5xl duration-700">C</span></h1>
            <h5 className="text-2xl text-[#A09FB1] font-semibold mt-[13px] capitalize">Shower</h5>    
          <div className="flex flex-row gap-[10px] justify-center text-[#88869D] text-lg mt-[40px] mb-[33px]">
              <p>Today</p>
              <p>-</p>
              <p>May 24</p>
            </div>
            <div className="flex flex-row gap-2 justify-center text-[#88869D] mb-[40px] ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
              <span className="font-semibold">location</span>
            </div>
      </div>
    </>
  )
}
