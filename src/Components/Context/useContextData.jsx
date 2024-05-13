import React,{ createContext, useContext, useEffect, useState } from "react";


const ApiDataContext = createContext();
// Un componente proveedor que va a contener los datos de la API
export const ApiDataProvider = ({children }) => {
    /* const [coord, setCoord] = useState({
      lat:-10,
      long:-55,
    }) */
    const [lat,setLat] = useState(-10)
    const [long,setLong] = useState(-55)
    const [dataLocalStorage, setDataLocalStorage] = useState(null) 
    const [apiData, setApiData] = useState([]);
    const [urlIcon, setUrlIcon] = useState('')
    const [temperature, setTemperature] = useState('')
    const [descrip, setDescrip] = useState('')
    const [dateToday, setdateToday] = useState('')
    const [location, setLocation] = useState('')
    const [windStatus, setWindStatus] = useState('')
    const [humidity, setHumidity] = useState('')
    const [visibility, setVisibility] = useState('')
    const [airPressure, setAirPressure] = useState('')
    const [weatherDays,setWeatherDays] = useState([])

    const [geolocation, setGeolocation] = useState({})
    const options ={
        enableHighAccuracy:true,
        timeout: 5000,
        maximunAge: 0,
    }

    const [weatherCity, setWeatherCity] = useState('')
    const [dataCity, setDataCity] = useState({})
    const [dataWeather, setdataWeather] = useState({})
    const [bandera,setBandera] = useState(0)

    // Busca los datos del clima en general
    useEffect(() => {  

      const fetchData = async() =>{
        try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e1ecdc6106476e67ef1dc6d8fadd18e6`)
        const jsonData = await response.json()
        console.log(jsonData);

        //Enviando datos al localStorage
        if(dataLocalStorage === null){
            localStorage.setItem('location',JSON.stringify({lat,long}))          
        }else{
          localStorage.setItem('location',JSON.stringify({lat,long}))
          setApiData(jsonData)
        } 
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
      if(geolocation.latitude){
        fetchData()
      }

      if(bandera != 0){
        fetchData()
        setBandera(0)
      }
      
    }, [geolocation,bandera]);

    // Busca el clima de los dias de la semana
    useEffect(()=>{
      const fetchDataDays = async()=>{
        try{//llamada Api
          const respDays = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=e1ecdc6106476e67ef1dc6d8fadd18e6`)
          const arrayDays = await respDays.json() //fecha hoy del sistema
          
          let today = new Date().getDate()
          const listDates = arrayDays.list.filter(day =>{
              let date = formDate2(day.dt)
              if(date > today){
                today = date
                return day;
              }
          })

          let pruebaData = listDates.map((dia)=>{ 
            let info = {
              fecha:dateFormat(dia.dt),
              icon:formIcon(dia.weather[0].icon),
              temp_min: tempKelCelsions(dia.main.temp_min),
              temp_max: tempKelCelsions(dia.main.temp_max)
            }
            return info;
          })
    
          setWeatherDays(pruebaData)
          console.log('weatherDaysFetch',weatherDays);
        }catch(error){
          console.log(error);
        }
      }
      fetchDataDays()

      if(geolocation.latitude){
        fetchDataDays()
      }

      if(bandera != 0){
        fetchDataDays()
        setBandera(0)
      }  
    },[setLat,setLong, geolocation, bandera])
  

    //Busca informacion de las ciudades 
    const getDataCity = async () =>{
      const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=e1ecdc6106476e67ef1dc6d8fadd18e6`)
      const jsonResponse = await rs.json();
      console.log(jsonResponse);
      setDataCity({id:jsonResponse.id,latCity:jsonResponse.coord.lat,longCity:jsonResponse.coord.lon,name: jsonResponse.name, country:jsonResponse.sys.country});
     
  } 

  function searchData() {
    setLat(dataCity.latCity)
    setLong(dataCity.longCity)
    setBandera(1)
    console.log('search',lat,long);
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

    function success(pos){
      const crd = pos.coords;        
      setGeolocation({ latitude: crd.latitude, longitude: crd.longitude})
     /*  console.log('tu ubicacion actuales:');
      console.log(`Latitud:${crd.latitude}`);
      console.log(`Longitud:${crd.longitude}`);
      console.log(`Mas o Menos:${crd.accuracy} metros.`); */
      setLat(crd.latitude)
      setLong(crd.longitude)
  }

  function error(err){
      console.warn(`Error(${err.code}):${err.message}`);
  }

  function getGeoLocation(){
      navigator.geolocation.getCurrentPosition(success,error,options)
  }


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
      getGeoLocation,
      getCity,
      getWeatherCity,
      dataCity, 
      dataWeather,
      searchData,     
      }
    }>
        {children}        
      </ApiDataContext.Provider>
    );
  };

  // Un hook personalizado para consumir los datos de la API
/* export const useApiData = () => useContext(ApiDataContext); */
export {ApiDataContext}