import React, { useContext, useEffect, useState } from "react"
import { Header } from "./Components/Header"
import { Weather } from "./Components/Weather";
import { DaysWather } from "./Components/DaysWeather";
import { Medidas } from "./Components/Medidas/Index";
import { Status } from "./Components/Status/Status";
import { Humidity } from "./Components/Status/Humidity";
import { VisibilityAir } from "./Components/Status/VisibilityAir";
import { useSearchCity } from "./Components/CustomHook/useSearchCity";
import { useGeolocation } from "./Components/CustomHook/useGeolocation";
import useModalSearch from "./Components/CustomHook/useModalSearch";
import { Sidebar } from "./Components/BarraBusqueda";
import { ApiDataContext } from "./Components/Context/useContextData";

export default function App() {

  const { getGeoLocation} = useGeolocation({});
  const {openMenu, onClose, onOpen } = useModalSearch(true);
  const {getCity, getWeatherCity, dataCity, dataCoord, dataWeather,conversationDay} = useSearchCity() 
/* 
   const { dateToday, location} = useContext(ApiDataContext);
   console.log('otros datos', dateToday, location); */

   const apiData = useContext(ApiDataContext);
   console.log('apiDataAPP', apiData);
   

  useEffect(()=>{
    
  },[openMenu, onClose, onOpen, getCity, getWeatherCity, dataCity])
 

 /*  useEffect(()=>{  

  },[openMenu, onClose, getCity, getWeatherCity, dataCity, ]) */



  return (
    <>
     <div className="w-full flex flex-col min-h-screen h-full md:flex-row md:w-full py-[18px] bg-[#1E213A] 2xl:border">
        <div className="2xl:self-center 2xl:w-[500px] 2xl:flex-shrink-0">
          <Header getGeoLocation={getGeoLocation} onOpen={onOpen}/>
          <Sidebar openMenu={openMenu} onClose={onClose} getCity= {getCity} getWeatherCity={getWeatherCity} dataCity={dataCity}/>
          <Weather icon={apiData?apiData.weather[0].icon:'04n.png'} temp={apiData? apiData.main.temp:15} description={apiData?apiData.weather[0].description:'Sol'} location={apiData.name} /> 
            
        </div>             
        <div className="w-full flex flex-col  bg-[#100E1D] md:px-[10px] md:w-full ">
          <Medidas/>
          <DaysWather />          
          <div className="grid grid-cols-1  gap-6 px-10 p-[22px]  md:grid-cols-2 mt-6">
            <Status cantidad={'3'} medida={'mph'}/>
            <Humidity porcentaje={'84'}/>
            <VisibilityAir title={'Visibility'} cantidad={'6,4'} medida={'miles'}/>
            <VisibilityAir title={'Air Pressure'} cantidad={'998'} medida={'mb'}/>
          </div>
          <h6 className="text-center text-[#A09FB1] mt-[50px] py-[15px]">created by <em>Vianey Galicia</em> - devChallenges.io </h6> 
        </div>         
    </div>
    </>
  )
}

