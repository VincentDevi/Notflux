/* eslint-disable react/prop-types */
import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { getPosterUrl } from "../../util/getPosterUrl";

// eslint-disable-next-line react/prop-types
export const Carrousel = ({type,children}) =>{

    
     const [data, loading, error] = useFetch(children);
     return (
        <div className="flex-col h-auto">
            { ( data ) ? <MoviePoster type={type}>{data.results}</MoviePoster> : <LoadingCar/> }       
        </div>
    );
}


const MoviePoster = ({type,children}) =>{
        return(
        <div className="pl-5 h-auto overflow-scroll flex w-full" >
                {children.map((item,index) => 
                    <div key={index} className="shrink-0 mx-0.5 mb-8 h-auto w-40 sm:w-auto">
                        <div className="h-56  w-80 sm:w-auto sm:h-96"> <Link to={"/description/"+type+"/"+item.id}>
                        <img src={getPosterUrl(item.poster_path)} alt="poster" className="w-auto h-full"/> 
                        </Link>
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