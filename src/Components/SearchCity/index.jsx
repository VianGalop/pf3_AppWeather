import React from 'react'

export const SearchCity = ({City, Country}) => {
  return (
    <li className="flex flex-row px-3 justify-between cursor-pointer w-full h-[64px] items-center hover:border-[1px]  duration-100  border-[#616475] text-[#E7E7EB]"> <p>{City}</p>
      <i className='group cursor-pointer w-full h-[64px] flex flex-row px-3 justify-between items-center text-silver hover:border-[1px]  duration-100  border-[#616475]'>
        {Country}
      </i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </li>
)
}
