import React, { useEffect, useState } from 'react'
import { SearchCity } from '../SearchCity';
import { useSearchCity } from '../CustomHook/useSearchCity';

export const Sidebar = ({openMenu, onClose, getCity, getWeatherCity, dataCity, searchData}) => {

  /* const {getCity, getWeatherCity, dataCity, setDataCity } = useSearchCity()

  useEffect(()=>{    
  },[openMenu, onClose, getCity, getWeatherCity, dataCity, setDataCity ])
 */

  return (
    <aside id='modal' className={`absolute w-full h-screen h-full  py-[10px] md:w-[500px] top-0 2xl:absolute  md:flex-shrink-0 flex-shrink-0 ${openMenu? 'visibility' : 'hidden'}`}>
            <div className="border-r-2  w-full h-screen  bg-[#1E213A] md:w-full md:h-screen  dark:border-none">
              <div className="flex flex-row justify-end py-3 px-3 md:flex md:flex-row md:justify-end">
                 <button className="flex items-center justify-center text-silver text-white hover:bg-slate-400 font-medium h-[40px] w-[40px] text-base rounded-full box__shadow" id='modal' onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                  </button>
              </div>
              <div className="mt-[38px] mb-[28px] mr-[20px] flex flex-row items-center gap-2  ">
                <div className=" border-[1px] border-silver w-4/5 h-[48px] flex flex-row items-center px-3 py-3 ml-5 mr-5 gap-[13px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>             
                    <input type="text" placeholder="Search Location" className=" text-base w-4/5 font-medium bg-transparent hover:right-0 focus:ring-0 focus:outline-none hover:outline-none border-[#E7E7EB] text-[#E7E7EB]" id='searchCity' autoComplete='off' onChange={getCity} >
                    </input>               
                </div>
                <button type='submit' onClick={getWeatherCity} className="bg-[#3C47E9] disabled:bg-[#5d64ca] text-silver h-[48px] w-[86px] font-semibold text-base text-[#E7E7EB]" >Search</button>
              </div>
              <ul className="flex flex-col text-silver mr-5 ml-5"> 
                {<SearchCity City={dataCity.name} Country={dataCity.country} id={dataCity.id} searchData={searchData}/>}
              </ul>
            </div>
        </aside>
  )
}
