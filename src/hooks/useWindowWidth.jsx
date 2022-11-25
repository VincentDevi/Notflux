import { useEffect } from "react";
import { useState } from "react";

export const useWindowWidth = () =>{

    const [screenSize, setScreenSize] = useState({
      dynamicWidth : window.innerWidth,
      dynamicHeight : window.innerHeight
    });
    const getDimension = () =>{
      setScreenSize({
        dynamicWidth : window.innerWidth,
        dynamicHeight : window.innerHeight
      })
    }
    
    useEffect( ()=>{
      window.addEventListener('resize', getDimension);

      return(() => {
        window.removeEventListener('resize', getDimension);
    })

    },[screenSize])

    return screenSize;
}