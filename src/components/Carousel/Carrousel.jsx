/* eslint-disable react/prop-types */
import React from "react";
import { useFetch } from "../../hooks/useFetch";

// eslint-disable-next-line react/prop-types
export const Carrousel = ({children}) =>{
    
     const [data, loading, error] = useFetch(children);
     if (data){
     console.log(data);
     }
     return (
        <div className="flex-col h-auto">
            { ( data ) ? <MoviePoster>{data.results}</MoviePoster> : <LoadingCar/> }       
        </div>
    );
}

const getSrcImage = (path) =>{
    // poster path : http://image.tmdb.org/t/p/w500/
    return "https://image.tmdb.org/t/p/w500"+path
    }   

const MoviePoster = ({children}) =>{
        return(
        <div className=" h-auto overflow-scroll flex w-full" >
                {children.map((item,index) => 
                    <div key={index} className="shrink-0 mx-2 mb-8 h-auto w-40">
                        <div className="h-56">
                        <img src={getSrcImage(item.poster_path)} alt="poster" className="object-contain h-full"/> 
                        </div>
                    </div>)}
            </div>
    );
}
const LoadingCar = () =>{
    return (
        <div>
            <p>loading</p>
        </div>
    );
}

