import React, { useEffect } from 'react'

export const Status = ({cantidad, medida, deg}) => {

  const viento = {
    "0": "N",
    "22.5": "NNE",
    "45": "NE",
    "67.5": "ENE",
    "90": "E",
    "112.5": "ESE",
    "135": "SE",
    "157.5": "SSE",
    "180": "S",
    "202.5": "SSW",
    "225": "SW",
    "247.5": "WSW",
    "270": "W",
    "292.5": "WNW",
    "315": "NW",
    "337.5": "NNW",
  }

  useEffect(()=>{
    console.log('deg',deg);
    console.log(viento[`${deg}`]);
    if(deg >=270){
      console.log('W');
    }
  },[])
  return (
      <div className="bg-[#1E213A] flex flex-col justify-center items-center p-[22px] ">
        <h4 className='font-medium text-[#E7E7EB]'>Wind status</h4>            
        <div className="flex flex-row items-center text-[#E7E7EB]">
          <h1 className="text-silver font-bold text-[44px]">{cantidad} 
            <span className="text-silver text-4xl">{medida}</span>
          </h1>
        </div>
        <div className="flex flex-row items-center">
          {/* <figure className={`w-20 h-20`} style={{rotate: `${deg}deg`}}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-[17px] h-[17px] text-[#E7E7EB]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>  
          </figure> */}
            <button className="w-[29px] h-[29px] rounded-full bg-[#A09FB1] flex items-center justify-center ml-7" style={{rotate: `${deg}deg`}}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-[17px] h-[17px] text-[#E7E7EB]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>  
            </button> 
            <span className="text-sm font-medium leading-normal text-silver text-[#E7E7EB] px-5 ">{viento[deg]}</span>
        </div>
      </div>
  )
}


