import React from 'react'

export const Days = ({day, urlImg, gradMin, gradMax}) => {
  return (
    <div style={{opacity:1}}className=" bg-lightBlue py-[18px]  px-2 flex flex-col justify-center items-center cursor-pointer  duration-200 hover:translate-y-1 bg-[#1E213A]">
        <h4 className="text-silver text-base font-medium  leading-normal text-[#E7E7EB] ">{day}</h4>
        <img src={urlImg}></img>
        <div className="text-center flex flex-row gap-4 mt-[31px]">
        <span className="text-silver font-medium text-base text-[#E7E7EB]"> {gradMin}°C</span>
        <span className="text-[#A09FB1] font-medium text-base">{gradMax}°C</span>
        </div>
    </div>
  )
}
