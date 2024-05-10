import React from 'react'

export const Humidity = ({porcentaje}) => {
  return (
      <div className="bg-[#1E213A] flex flex-col justify-center items-center p-[22px] ">
          <h4 className='text-silver  font-medium text-[#E7E7EB]'>Humidity</h4>            
          <div className="flex flex-row items-center text-[#E7E7EB]"><h1 className="text-silver font-bold text-[44px]">{porcentaje} <span className="text-silver text-4xl">%</span></h1></div>
          <div className="flex flex-row justify-between text-[#A09FB1] w-full text-xs font-bold mb-1">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
          </div>
          <div className="w-full h-[8px] bg-silver rounded-[80px]">    
              <div className="bg-yellow-400 h-full bg-[#FFEC65] rounded-[80px] md:h-full" style={{porcentaje}}></div>
          </div>                
      </div>
  )
}
