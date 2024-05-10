import React,{useEffect, useState} from 'react'
import { useInfoData } from '../CustomHook/useInfoData';

export const SearchCity = ({City, Country, id}) => {
  
  const [infoData, setInfoData] = useState({});
  const [dataWeather, setDataWeather ] = useState({});
  const [idCity, setIdCity] = useState();
/*   const {dataWeather, setDataWeathern, getDataIdCity} = useInfoData() */

  const getDataIdCity = async () =>{
    const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=3ca65afd6685b30d2cb2ae1195983749`)    
    const jsonData = await rs.json();

    setDataWeather({
      icon: jsonData.weather[0].icon,
      temperature : jsonData.main.temp,
      day:jsonData.dt,
    })    
    console.log('datos ciudad', dataWeather);
  }

  function temperatureConversation(){
    return Math.trunc(setDataWeather.temperature - 273.15) 
    
  }

  function wordIcon(){
    return setDataWeather.icon.slice(0, -1);
  }

  function conversationDay() {
    let date = new Date(setDataWeather.day * 1000)
    let date2 = date.getMonth() +' ' +date.getDay()
    console.log('fecha ', date2);
    return date2 
  } 

  useEffect(()=>{      
    setDataWeather()
  },[idCity,dataWeather])

  function newWeather(){    
    setIdCity(id)
  }

  
  
  return (
    <li className="flex flex-row px-3 justify-between cursor-pointer w-full h-[64px] items-center hover:border-[1px]    border-[#616475] text-[#E7E7EB]" onClick={newWeather}>
      <p>{City}</p>
      <i className='group cursor-pointer w-full h-[64px] flex flex-row px-3 justify-end items-center text-silver hover:border-dotted  hover:duration-150  border-[#616475]'>
        {Country}
      </i>
    </li>
)
}
