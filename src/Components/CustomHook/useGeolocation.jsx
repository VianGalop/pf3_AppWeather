import React, { useEffect, useState } from 'react'

export const useGeolocation = (valor) => {
    const [geolocation, setGeolocation] = useState(valor)
    const options ={
        enableHighAccuracy:true,
        timeout: 5000,
        maximunAge: 0,
    }
    const [latitude, setLatitud] = useState()
    const [longitud, setLongitud] = useState()

    function success(pos){
        const crd = pos.coords;        
        setGeolocation({ latitude: crd.latitude, longitude: crd.longitude})
        console.log('tu ubicacion actuales:');
        console.log(`Latitud:${crd.latitude}`);
        console.log(`Longitud:${crd.longitude}`);
        console.log(`Mas o Menos:${crd.accuracy} metros.`);
        setLatitud(crd.latitude)
        setLongitud(crd.longitud)
    }
  
    function error(err){
        console.warn(`Error(${err.code}):${err.message}`);
    }
  
    function getGeoLocation(){
        navigator.geolocation.getCurrentPosition(success,error,options)
    }
  
    const getData = async () =>{
        const rs = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${geolocation.latitude}&lon=${geolocation.longitud}&appid=3ca65afd6685b30d2cb2ae1195983749`)
        const jsonResponse = await rs.json();
        console.log(geolocation);
        console.log(jsonResponse);
    }
  
    useEffect(()=>{
        if(geolocation.latitude){
            getData()
        }
    },[geolocation])
  

  return {
    getGeoLocation,
  }
}
