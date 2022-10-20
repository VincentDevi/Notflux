import { useState,useEffect } from "react";


export const fecthTrending = (url) =>{
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] =useState(false);

    useEffect(  () =>{
        const fecthData = async (url) =>{
            try{
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                console.log(result)
                setData(result);
                
            }catch(e){
                console.error(e);
                setError(e);
            }
            finally{
                setLoading(false);
            }
            
        }
       
            fecthData(url);
        
        

    },[url] );
  
    
    return [data,loading,error]; 
}


