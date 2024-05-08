import React, { useEffect, useState } from 'react'

export const UseOpenModal = (inicial) => {

    const  [openMenu, setOpenMenu] = useState(inicial)

    const onClose = ()=>{
        setOpenMenu(false)
    }

    const onOpen = ()=>{
        setOpenMenu(true)
    }
    
    useEffect(()=>{
       console.log("Cambia",openMenu);
    },[openMenu,setOpenMenu])
      


    return {
        openMenu,
        setOpenMenu,
        onClose,
        onOpen
    };
}
