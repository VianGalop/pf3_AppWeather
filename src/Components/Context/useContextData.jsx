import React,{ createContext, useContext, useEffect, useState } from "react";


const ApiDataContext = createContext();
// Un componente proveedor que va a contener los datos de la API
export const ApiDataProvider = ({children }) => {

    const [apiData, setApiData] = useState([]);
   /* const [dataLocalStorage, setDataLocalStorage] = useState(null) */
    const [urlIcon, setUrlIcon] = useState('')
    const [temperature, setTemperature] = useState('')
    const [descrip, setDescrip] = useState('')
    const [dateToday, setdateToday] = useState('')
    const [location, setLocation] = useState('')
    const [windStatus, setWindStatus] = useState('')
    const [humidity, setHumidity] = useState('')
    const [visibility, setVisibility] = useState('')
    const [airPressure, setAirPressure] = useState('')
    /* const [weatherDays,setWeatherDays] = useState({  
      fecha:'',
      icon:'',
      temp_min: 0,
      temp_max: 0}
    )  */
    const [weatherDays,setWeatherDays] = useState({})
    // Simulando una llamada a la API */
    useEffect(() => {
      // Aquí realizarías tu llamada a la API y guardarías los datos
      // Supongamos que los datos son un array de objetos por ahora
      const fetchData = async() =>{
        try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=19.4372&lon=-99.0369&appid=e1ecdc6106476e67ef1dc6d8fadd18e6`)
        const jsonData = await response.json()
        console.log(jsonData);
        /* setApiData(jsonData) */

        /* //Enviando datos al localStorage
        if(dataLocalStorage === null){
            localStorage.setItem('location',JSON.stringify(jsonData))          
        }else{
          localStorage.setItem('location',JSON.stringify(jsonData))
          setApiData(jsonData)
        } */
        //recupernado de localStorage
       /*  setDataLocalStorage(localStorage.getItem('location'))  */ 
       
        setUrlIcon(formIcon(jsonData.weather[0].icon)) 
        setTemperature(tempKelCelsions(jsonData.main.temp)) 
        setDescrip(jsonData.weather[0].description)
        setdateToday(dateFormat(jsonData.dt))
        setLocation(jsonData.name)
        setWindStatus(jsonData.wind.deg)
        setHumidity(jsonData.main.humidity)
        setVisibility(jsonData.visibility)
        setAirPressure(jsonData.main.pressure)
        }catch(error){
            console.log(error);
        }
      }

      fetchData()
      
    }, []);
  
    function dateFormat(date){
      const day = new Date(date*1000);
      const options = { weekday: 'long', day: 'numeric', month: 'short' };
      
      return day.toLocaleDateString("en-gb", options);
    }

    
    function tempKelCelsions(date){
      let newDate = Math.trunc(date - 273)
      return newDate
    }

    function formIcon(icon){
      let value = icon.slice(0, icon.length - 1)
      return value
    }

    const formDate2 = (valor)=>{
      let fecha = new Date(valor * 1000)
      return fecha.getDate()
    }
    useEffect(()=>{
      const fetchDataDays = async()=>{
        try{//llamada Api
          const respDays = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=19.4372&lon=-99.0369&appid=e1ecdc6106476e67ef1dc6d8fadd18e6`)
          const arrayDays = await respDays.json()
          //fecha hoy del sistema
          console.log('arrayDays',arrayDays);
          /* let today = new Date().toLocaleDateString("en-gb",{weekday:'long',day:'numeric',month:'short'}) */
          let today = new Date().getDate()
          const listDates = arrayDays.list.filter(day =>{
              let date = formDate2(day.dt)
              if(date > today){
                today = date
                return day;
              }
          })
          /* setWeatherDays(listDates) */

          listDates.map((dia)=>{ 
            let info = [...weatherDays,{
              fecha:dateFormat(dia.dt),
              icon:dia.weather[0].icon,
              temp_min: tempKelCelsions(dia.main.temp_min),
              temp_max: tempKelCelsions(dia.main.temp_max)
            }]
            setWeatherDays(info)
          })
          console.log('weatherDaysFetch',weatherDays);
        }catch(error){
          console.log(error);
        }
      }
      fetchDataDays()
      
    },[])


    return (
    <ApiDataContext.Provider value=
    {
      {
      urlIcon, 
      temperature,
      descrip, 
      dateToday, 
      location, 
      windStatus,
      visibility, 
      humidity, 
      airPressure,
      weatherDays,
      apiData
      }
    }>
        {children}        
      </ApiDataContext.Provider>
    );
  };

  // Un hook personalizado para consumir los datos de la API
/* export const useApiData = () => useContext(ApiDataContext); */
export {ApiDataContext}