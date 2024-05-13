import React, { useEffect, useState } from 'react'

export const useSearchCity = () => {

  const [weatherCity, setWeatherCity] = useState('')
  const [dataCity, setDataCity] = useState({})
  const [dataCoord, setDataCoord] = useState()
  const [dataWeather, setdataWeather] = useState({})


  const getDataCity = async () =>{
      const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=e1ecdc6106476e67ef1dc6d8fadd18e6`)
      const jsonResponse = await rs.json();
      console.log(jsonResponse);
      setDataCoord(jsonResponse.coord);
      setDataCity({id:jsonResponse.id ,name: jsonResponse.name, country:jsonResponse.sys.country});
      
  }

  

  function getCity(e){
    setWeatherCity(e.target.value)
  }

  function getWeatherCity(){
    if(weatherCity){
      getDataCity()
    }else{
      console.log('vacio');
    }
  } 


  useEffect(()=>{    
  },[setdataWeather])

  return{
    getCity,
    getWeatherCity,
    setDataCoord,
    dataCity, 
    dataCoord, 
    dataWeather,

  }
}
