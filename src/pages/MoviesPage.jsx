/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import { Carrousel } from "../components/Carousel/Carrousel";
import { useFetch } from "../hooks/useFetch";
import { getUrlByGenre } from "../util/getListOfGenre";


export const MoviesPage = () =>{
    const {type} =useParams();
    const allGenres = useFetch("https://api.themoviedb.org/3/genre/"+type+"/list?api_key=1f23cb937d155a995019ffd894a97ddd");
    return (
        
        <div className="w-screen"> 
            {/* { ( allGenres[0] ) ? <SelectGenre type={type}>{allGenres[0].genres}</SelectGenre> : <p>Loading</p>} */}
            <div className="h-contentMobile mt-[10vh] xl:h-max relative">
                <div className="h-auto overflow-x-hidden">
                { ( allGenres[0] ) ? <GenresCarrousel type={type}>{allGenres[0].genres}</GenresCarrousel> : <p>Loading</p>}
                </div>
            </div>
        </div>
    );
}

const GenresCarrousel = ({type,children}) =>{
    return (
        <div className="mt-1">
        {children.map((item,index) =>
            <div className="w-screen flex flex-col items-center" key={index}>
                <Carrousel url={"/"+type+"/"+item.id+"/"+item.name} name={item.name} type={type}>{getUrlByGenre(type,item.id)}</Carrousel>
            </div>
        )}
        </div>
    );
}
