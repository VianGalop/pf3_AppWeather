import React, { useEffect, useState } from "react";
import { useGeolocation } from "../CustomHook/useGeolocation";
import useModalSearch from "../CustomHook/useModalSearch";
import { Sidebar } from "../BarraBusqueda";


export const Header = ({getGeoLocation, onOpen}) => {


    return (
    <>
      <div className="flex flex-row justify-between px-7 mt-6 xl:justify-between">
        <button
          className="bg-[#6E707A] w-[165px] h-[50px]  hover:bg-slate-400  text-base px-[18px] y-[11px] text-zinc-200 "
          onClick={onOpen} >            
          Search for places
        </button>
        <button className="flex items-center justify-center bg-[#6E707A] hover:bg-slate-400 font-medium h-[40px] w-[40px] text-base rounded-full box__shadow" onClick={getGeoLocation}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-[22px] w-[22px] text-white " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"  >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
          </svg>
        </button>
        <img srcSet="./images/Cloud.png" alt="clouds bg" className='absolute top-[75px] left-0  w-[500px]  object-fill bg-no-repeat bg-cover  opacity-10' />
      </div>
      {/* <Sidebar openMenu={openMenu} onClose={onClose}/> */}
    </>
  );
};
