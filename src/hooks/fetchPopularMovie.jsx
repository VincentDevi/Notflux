import axios from "axios";
import { useState,useEffect } from "react";


export const fecthTrending = (url) =>{
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(  () =>{
        const fecthData = async (url) =>{
            try{
                const response = await axios.get(url);
                setData(response.data);
            }catch(e){
                console.error(e);
                setError(e);
            }
        }
       fecthData(url);
    },[] );
    return [data,error]; 
}


