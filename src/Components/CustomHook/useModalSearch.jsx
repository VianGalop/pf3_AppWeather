import React, { useEffect, useState } from 'react'

const useModalSearch = (inicial) => {

    const  [openMenu, setOpenMenu] = useState(inicial)

    function onClose(){
        setOpenMenu(false)
    }

    function onOpen(){        
        setOpenMenu(true)
    }
    
    useEffect(()=>{
       console.log("Cambia",openMenu);
    },[openMenu,setOpenMenu])
      


    return {
        openMenu,
        onClose,
        onOpen
    };
};

export default useModalSearch;