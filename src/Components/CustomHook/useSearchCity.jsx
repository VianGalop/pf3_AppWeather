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
      setdataWeather({
          icon: jsonResponse.weather[0].icon,
          temp:  Math.trunc(dataWeather.temp - 273.15),
          descript:jsonResponse.weather[0].description,
          date: new Date(jsonResponse.dt * 1000)
      })
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

  function temperatureConversation(){
    return Math.trunc(dataWeather.temp - 273.15) 
  }
    

  function conversationDay(oldDate) {
    let date = new Date(oldDate * 1000)
    let date2 = +date.getDay()+ '' +date.getMonth()
    console.log('oldDate'+ oldDate+ 'fecha ', date2);
    return date2 
  }

  useEffect(()=>{    
  },[dataWeather, dataWeather, setdataWeather])

  return{
    getCity,
    getWeatherCity,
    dataCity, 
    dataCoord, 
    dataWeather,
    temperatureConversation,
    conversationDay

  }
}
