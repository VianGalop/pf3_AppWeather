import React,{useEffect, useState} from 'react'

export const SearchCity = ({City, Country, id, searchData}) => {
   
  return (
    <li className="flex flex-row px-3 justify-between cursor-pointer w-full h-[64px] items-center hover:border-[1px]    border-[#616475] text-[#E7E7EB]" onClick={searchData}>
      <p>{City}</p>
      <i className='group cursor-pointer w-full h-[64px] flex flex-row px-3 justify-end items-center text-silver hover:border-dotted  hover:duration-150  border-[#616475]'>
        {Country}
      </i>
    </li>
)
}
