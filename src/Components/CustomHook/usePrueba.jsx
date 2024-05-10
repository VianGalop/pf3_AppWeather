import React, { useEffect, useState } from 'react'

export const usePrueba = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [url]);
  return{
    data
  }
}
