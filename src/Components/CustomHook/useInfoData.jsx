import React, { useEffect, useState } from 'react'

export const useInfoData = () => {

  const [dataWeather, setDataWeather ] = useState({});

  const getDataIdCity = async () =>{
    const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=id&appid=3ca65afd6685b30d2cb2ae1195983749`)    
    const jsonData = await rs.json();
    console.log(jsonData);

    setDataWeather({
      icon: wordIcon(jsonData.weather.icon),
      temperature : temperatureConversation(jsonData.main.temp),
      day:conversationDay(jsonData.dt),
    })
  }

  function temperatureConversation(kelvis){
    return Math.trunc(kelvis - 273.15) 
    
  }

  function wordIcon(cad){
    return cad.slice(0, -1);
  }

  function conversationDay(data) {
    let date = new Date(data * 1000)
    let date2 = date.getMonth() +' ' +date.getDay()
    console.log('fecha ', date2);
    return date2 
  }

  useEffect(()=>{
  },[])

  return {
    dataWeather,
    setDataWeather,
    getDataIdCity
  }
}
