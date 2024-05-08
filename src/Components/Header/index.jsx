import React, { useEffect } from "react";
import { UseOpenModal } from "../CustomHook/OpenModal";


export const Header = () => {
  const {openMenu, setOpenMenu,onClose, onOpen } = UseOpenModal(true);
  
  return (
    <>
      <div className="flex flex-row justify-between px-5">
        <button
          className="bg-[#6E707A] w-[161px] h-[40px]  hover:bg-slate-400  text-base px-[18px] y-[11px] text-zinc-200 "
          onClick={onOpen} >            
          Search for places
        </button>
        <button className="flex items-center justify-center bg-[#6E707A] hover:bg-slate-400 font-medium h-[40px] w-[40px] text-base rounded-full box__shadow">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="h-[22px] w-[22px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};
