import React from 'react'

export const VisibilityAir = ({title, cantidad, medida}) => {
  return (
    <div className="bg-[#1E213A] flex flex-col justify-center items-center p-[22px] ">
        <h4 className="font-medium text-[#E7E7EB] ">{title}</h4>
        <div className="flex flex-row items-center text-[#E7E7EB]">
            <h1 className="flex flex-col text-silver font-bold text-[44px] ">{cantidad}
              <span className="text-silver text-4xl px-2">{medida}</span>
            </h1>
        </div>
    </div>
  )
}
