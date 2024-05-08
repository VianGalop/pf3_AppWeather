import React from 'react'

export const VisibilityAir = ({title, cantidad, medida}) => {
  return (
    <div className="bg-[#1E213A] flex flex-col justify-center items-center gap-3 p-[22px] text-[#E7E7EB]  ">
        <h4 className="text-silver  font-medium ">{title}</h4>
        <div className="flex flex-row items-center">
            <h1 className="text-silver font-bold text-[44px]">{cantidad}</h1>
            <span className="text-silver text-4xl px-4">{medida}</span>
        </div>
    </div>
  )
}
