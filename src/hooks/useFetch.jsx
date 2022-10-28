import axios from "axios";
import { useState,useEffect } from "react";


export const useFetch = (url) =>{
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(  () =>{
        setLoading(true);
        const fecthData = async () =>{
            try{
                const response = await axios.get(url);
                const result = await response?.data;
                setData(result);
                setLoading(false);
            }catch(e){
                setError(e);
            }
        }

       fecthData();

    },[url] );
    return [data,loading,error]; 
}