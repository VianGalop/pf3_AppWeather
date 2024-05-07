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
    <>
     <div className="w-full flex flex-col px-[11px] py-[18px] bg-[#1E213A]">
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </li>
              </ul>
            </div>
        </aside>
        <div className="self-center  mt-[46px]  mb-[10px] 2xl:mt-[76px]" >
            <img src='./images/Shower.png' alt="weather" width="150" height="174" />
        </div>
        <div className="text-center">
          <h1 className="text-silver font-medium text-[120px] text-[#E7E7EB]">15<span className="text-[] text-5xl duration-700">C</span></h1>
          <h5 className="text-2xl text-[#A09FB1] font-semibold mt-[13px] capitalize">Shower</h5>    
         <div className="flex flex-row gap-[16px] justify-center text-[#88869D] text-lg mt-[48px] mb-[33px]">
            <p>Today</p>
            <p>-</p>
            <p>May 24</p>
          </div>
          <div className="flex flex-row gap-2 justify-center text-[#88869D] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
            <span className="font-semibold">location</span>
          </div>
        </div>
    </div>
    <div className="bg-darkBlue w-full flex flex-col xl:px-[100px] bg-[#100E1D] ">
        <div className="flex flex-row items-center justify-end gap-3 mt-[20px] px-10 xl:px-0">
          <button type="button" className="rounded-full  h-[40px] w-[40px] font-bold text-silver bg-[#A09FB1] undefined">°C</button>
          <button type="button" className="rounded-full  h-[40px] w-[40px] font-bold text-silver bg-[#585676] undefined ">°F</button>
        </div>
        <div className="px-10 py-9 grid grid-cols-2 gap-[22px] lg:grid-cols-4 xl:grid-cols-5 xl:px-0">
          <div style={{opacity:1}}className=" bg-lightBlue py-[18px]  px-2 flex flex-col justify-center items-center cursor-pointer  duration-200 hover:translate-y-1 bg-[#1E213A]">
            <h4 className="text-silver text-base font-medium  leading-normal text-[#E7E7EB] ">Tomorrow</h4>
            <img></img>
            <div className="text-center flex flex-row gap-4 mt-[31px]">
              <span className="text-silver font-medium text-base text-[#E7E7EB]"> 9°C</span>
              <span className="text-[#A09FB1] font-medium text-base">20°C</span>
            </div>
          </div>
          <div style={{opacity:1}}className=" bg-lightBlue py-[18px]  px-2 flex flex-col justify-center items-center cursor-pointer  duration-200 hover:translate-y-1 bg-[#1E213A]">
            <h4 className="text-silver text-base font-medium  leading-normal text-[#E7E7EB]">Sun 7 Jun</h4>
            <img></img>
            <div className="text-center flex flex-row gap-4 mt-[31px]">
              <span className="text-silver font-medium text-base text-[#E7E7EB]"> 16°C</span>
              <span className="text-[#A09FB1] font-medium text-base">11°C</span>
            </div>
          </div>
          <div style={{opacity:1}}className=" bg-lightBlue py-[18px]  px-2 flex flex-col justify-center items-center cursor-pointer  duration-200 hover:translate-y-1 bg-[#1E213A]">
            <h4 className="text-silver text-base font-medium  leading-normal text-[#E7E7EB] ">Mon 8 Jun</h4>
            <img></img>
            <div className="text-center flex flex-row gap-4 mt-[31px]">
              <span className="text-silver font-medium text-base text-[#E7E7EB]"> 16°C</span>
              <span className="text-[#A09FB1] font-medium text-base">11°C</span>
            </div>
          </div>
          <div style={{opacity:1}}className=" bg-lightBlue py-[18px]  px-2 flex flex-col justify-center items-center cursor-pointer  duration-200 hover:translate-y-1 bg-[#1E213A]">
            <h4 className="text-silver text-base font-medium  leading-normal text-[#E7E7EB] ">Tue 9 Jun</h4>
            <img></img>
            <div className="text-center flex flex-row gap-4 mt-[31px]">
              <span className="text-silver font-medium text-base text-[#E7E7EB]"> 16°C</span>
              <span className="text-[#A09FB1] font-medium text-base">11°C</span>
            </div>
          </div>
          <div style={{opacity:1}}className=" bg-lightBlue py-[18px]  px-2 flex flex-col justify-center items-center cursor-pointer  duration-200 hover:translate-y-1 bg-[#1E213A]">
            <h4 className="text-silver text-base font-medium  leading-normal text-[#E7E7EB]  ">Wed 10 Jun</h4>
            <img></img>
            <div className="text-center flex flex-row gap-4 mt-[31px]">
              <span className="text-silver font-medium text-base text-[#E7E7EB]"> 16°C</span>
              <span className="text-[#A09FB1] font-medium text-base">11°C</span>
            </div>
          </div>
        </div>
        <div className="px-[21px] mt-[10px] mb-[8px] xl:px-0 xl:mt-[21px] xl:mb-[12px]" style={{opacity:1}}>
          <h3 className=" text-2xl font-bold mb-[10px] text-[#E7E7EB]">Today’s Hightlights</h3>
          <div className="grid grid-cols-1  gap-6  md:grid-cols-2">
             <div className="bg-[#1E213A] flex flex-col justify-center items-center p-[22px] ">
                <h4 className='text-silver  font-medium text-[#E7E7EB]'>Wind status</h4>            
                <div className="flex flex-row items-center text-[#E7E7EB]"><h1 className="text-silver font-bold text-[44px]">3 <span className="text-silver text-4xl">mps</span></h1></div>
                <div className="flex flex-row items-center">
                  <button className="w-[29px] h-[29px] rounded-full bg-[#A09FB1] flex items-center justify-center rotate-[220deg] ml-7">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-[17px] h-[17px] text-[#E7E7EB]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>  
                  </button>
                  <span className="text-sm font-medium leading-normal text-silver text-[#E7E7EB] px-5 ">WSW</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1  gap-6  md:grid-cols-2"></div>
            <div></div>
            <div></div>
        </div>
    </div>    
    </>
  )
}

