import React, { useEffect, useState } from "react"
import { Header } from "./Components/Header"
import { UseOpenModal } from "./Components/CustomHook/OpenModal";
import { Sidebar } from "./Components/BarraBusqueda";
import { Weather } from "./Components/Weather";
import { DaysWather } from "./Components/DaysWeather";
import { Medidas } from "./Components/Medidas/Index";
import { Status } from "./Components/Status/Status";
import { Humidity } from "./Components/Status/Humidity";
import { VisibilityAir } from "./Components/Status/VisibilityAir";

export default function App() {
    const {openMenu, setOpenMenu,onClose } = UseOpenModal(true);

    useEffect(()=>{
      console.log(setOpenMenu);
    },[setOpenMenu])


  return (
    <>
     <div className="w-full flex flex-col py-[18px] bg-[#1E213A]">
        <Header />
        <Sidebar/>
        <Weather />        
        <div className="w-full flex flex-col  bg-[#100E1D] xl:px-[100px]">
          <Medidas/>
          <DaysWather/>          
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

