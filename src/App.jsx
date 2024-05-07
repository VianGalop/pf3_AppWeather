import React, { useEffect, useState } from "react"

export default function App() {
  const  [openMenu, setOpenMenu] = useState(true)

  const onClose = (e)=>{
   e.stopPropagation()
   setOpenMenu(false)
  }
   
useEffect(()=>{
    console.log(openMenu);
},[openMenu,setOpenMenu])
  
  return (
     <div className="w-full flex flex-col px-[11px] py-[18px] bg-[]">
        <div className="flex flex-row justify-between">
          <button className= "bg-[#6E707A] w-[161px] h-[40px]  hover:bg-slate-400  text-base px-[18px] y-[11px] text-zinc-200 " onClick={setOpenMenu}>Search for places</button>
          <button className="flex items-center justify-center bg-[#6E707A] hover:bg-slate-400 font-medium h-[40px] w-[40px] text-base rounded-full box__shadow">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-[22px] w-[22px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
          </button>
        </div>
         <aside id='modal' className={`absolute w-full min-h-screen h-full  flex-shrink-0 ${!openMenu && 'hidden'}`}>
            <div className="border-r-2  w-full h-full bg-[#1E213A] dark:border-none">
              <div className="flex flex-row justify-end py-3 px-3">
                 <button className="flex items-center justify-center text-silver text-white hover:bg-slate-400 font-medium h-[40px] w-[40px] text-base rounded-full box__shadow" onClick={onClose}>
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
                  <input type="text" placeholder="Search Location" className=" text-silver text-base w-4/5 font-medium bg-transparent hover:right-0 focus:ring-0 focus:outline-none hover:outline-none border-[#E7E7EB]" >
                  </input>                  
                </div>
                <button className="bg-[#3C47E9] disabled:bg-[#5d64ca] text-silver h-[48px] w-[86px] font-semibold text-base text-[#E7E7EB]">Search</button>
              </div>
              <ul className="flex flex-col text-silver mr-5 ml-5">
                <li className="group cursor-pointer w-full h-[64px] flex flex-row px-3 justify-between items-center hover:border-[1px]  duration-100  border-[#616475] text-[#E7E7EB]"> <p>London</p>
                  <i className='group cursor-pointer w-full h-[64px] flex flex-row px-3 justify-between items-center text-silver hover:border-[1px]  duration-100  border-[#616475]'>
                    US
                  </i>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </li>
              </ul>
            </div>
        </aside>
        <div className="self-center  mt-[46px]  mb-[10px] 2xl:mt-[76px] opacity-5 translate-y-14" >
            <img src='./images/Shower.png' alt="weather" width="150" height="174" />
        </div>
        <div className="text-center">
          <h1 className="text-silver font-medium text-[120px]">15<span className="text-[] text-5xl duration-700">C</span></h1>
          <h5 className="text-2xl text-[#A09FB1] font-semibold mt-[13px] capitalize">Shower</h5>    
         <div className="flex flex-row gap-[16px] justify-center text-[#88869D] text-lg mt-[48px] mb-[33px]">
            <p>Today</p>
            <p>-</p>
            <p>May 24</p>
          </div>
          <div className="flex flex-row gap-2 justify-center text-[#88869D] ">
            <p>location</p>
          </div>
        </div>
    </div>    
  )
}

