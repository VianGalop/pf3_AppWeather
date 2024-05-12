import React from 'react'

export const Medidas = () => {
  return (
    <div className="flex flex-row items-center justify-end gap-3 mt-[20px] px-10 xl:px-0">
          <button type="button" className="rounded-full  h-[40px] w-[40px] font-bold text-silver bg-[#A09FB1] undefined" onClick=''>°C</button>
          <button type="button" className="rounded-full  h-[40px] w-[40px] font-bold text-silver bg-[#585676] undefined " onClick=''>°F</button>
    </div>
  )
}
