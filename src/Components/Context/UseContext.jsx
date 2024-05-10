import React,{ createContext, useContext, useEffect, useState } from "react";


const ApiDataContext = createContext();
const localStorageIni = localStorage.getItem('location')
// Un componente proveedor que va a contener los datos de la API
export const ApiDataProvider = ({children }) => {
    const [apiData, setApiData] = useState(null);
    const [dataLocalStorage, setDataLocalStorage] = useState(null)

    useEffect(()=>{

      if(localStorageIni === null){
        setDataLocalStorage(localStorageIni)
      }
    },[])
  
    // Simulando una llamada a la API
    useEffect(() => {
      // Aquí realizarías tu llamada a la API y guardarías los datos
      // Supongamos que los datos son un array de objetos por ahora
      async function fetchData(){
        try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-1&lon=15&appid=e1ecdc6106476e67ef1dc6d8fadd18e6`)
        const jsonData = await response.json()
        console.log('ApiData',jsonData);
        setApiData(jsonData)
        //Enviando datos al localStorage
        if(localStorage.dataLocalStorage === null){
            localStorage.setItem('location',JSON.stringify(jsonData))
        }else{
          localStorage.setItem('location',JSON.stringify(jsonData))
        }
        //recupernado de localStorage
        setDataLocalStorage(localStorage.getItem('location'))  
        }catch(error){
            console.log(error);
        }
      }
      fetchData()
    }, []);
  
    return (
      <ApiDataContext.Provider value={apiData}>
        {children}
      </ApiDataContext.Provider>
    );
  };

  // Un hook personalizado para consumir los datos de la API
export const useApiData = () => useContext(ApiDataContext);