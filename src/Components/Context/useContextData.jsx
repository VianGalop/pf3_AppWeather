import React,{ createContext, useContext, useEffect, useState } from "react";


const ApiDataContext = createContext();
// Un componente proveedor que va a contener los datos de la API
export const ApiDataProvider = ({children }) => {

    /* const [apiData, setApiData] = useState([]);
    const [dataLocalStorage, setDataLocalStorage] = useState(null) */
    
    const [urlIcon, setUrlIcon] = useState('')
    const [temperature, setTemperature] = useState('')
    const [descrip, setDescrip] = useState('')
    const [dateToday, setdateToday] = useState('')
    const [location, setLocation] = useState('')
    const [windStatus, setWindStatus] = useState('')
    const [humidity, setHumidity] = useState('')
    const [visibility, setVisibility] = useState('')
    const [airPressure, setAirPressure] = useState('')
    const [apiData, setApiData] = useState('')



    // Simulando una llamada a la API
    useEffect(() => {
      // Aquí realizarías tu llamada a la API y guardarías los datos
      // Supongamos que los datos son un array de objetos por ahora
      const fetchData = async() =>{
        try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-1&lon=15&appid=e1ecdc6106476e67ef1dc6d8fadd18e6`)
        const jsonData = await response.json()
        setApiData(jsonData)

        /* //Enviando datos al localStorage
        if(dataLocalStorage === null){
            localStorage.setItem('location',JSON.stringify(jsonData))          
        }else{
          localStorage.setItem('location',JSON.stringify(jsonData))
          setApiData(jsonData)
        } */
        //recupernado de localStorage
       /*  setDataLocalStorage(localStorage.getItem('location'))  */ 
        }catch(error){
            console.log(error);
        }
      }

      fetchData()
    }, []);
  
  /*  useEffect(()=>
      setUrlIcon(apiData.weather[0].icon) 
      setTemperature(apiData.main.temp) 
      setDescrip(apiData.description)
      setdateToday(apiData.dt)
      setLocation(apiData.name)
      setWindStatus(apiData.wind.deg)
      setHumidity(apiData.main.humidity)
      setVisibility(apiData.visibility)
      setAirPressure(apiData.pressure)
    },[]); */

    useEffect(()=>{
    },[])

    return (
      <ApiDataContext.Provider value={apiData}>
        {children}        
      </ApiDataContext.Provider>
    );
  };

  // Un hook personalizado para consumir los datos de la API
/* export const useApiData = () => useContext(ApiDataContext); */
export {ApiDataContext}