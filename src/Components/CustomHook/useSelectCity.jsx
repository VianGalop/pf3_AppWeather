import React, { useEffect, useState } from 'react'
import { useSearchCity } from './useSearchCity'

export const useSelectCity = () => {
    const {getCity, getWeatherCity, dataCity, setDataCity, dataCoord,setDataCoord } = useSearchCity()
    const [weather, setWeather] = useState();

    useEffect(() => {
        // Usa 'data' aquí según sea necesario
        console.log(dataCoord);
        console.log(getCity);
        console.log(dataCity);     
        setWeather('Pasando Datos')   
      }, [getCity]);
    

  return {
    weather
  }
}
