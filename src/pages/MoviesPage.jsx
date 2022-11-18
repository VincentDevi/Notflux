/* eslint-disable react/prop-types */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Carrousel } from "../components/Carousel/Carrousel";
import { Header } from "../components/Header/Header";
import { InputSelectGenre } from "../components/InputSelect/InputSelectGenre";
import { MobileNav } from "../components/MobileNav/MobileNav";
import { useFetch } from "../hooks/useFetch";
import { getUrlByGenre } from "../util/getListOfGenre";


export const MoviesPage = () =>{
    const {type} =useParams();
    const allGenres = useFetch("https://api.themoviedb.org/3/genre/"+type+"/list?api_key=1f23cb937d155a995019ffd894a97ddd");
    
    return (
        <>  
            <Header/>
            <MobileNav/>
            <div className="h-contentMobile overflow-y-scroll overflow-x-hidden">
            { ( allGenres[0] ) ? <InputSelectGenre type={type}>{allGenres[0].genres}</InputSelectGenre> : <p>Loading</p>}
            { ( allGenres[0] ) ? <GenresCarrousel type={type}>{allGenres[0].genres}</GenresCarrousel> : <p>Loading</p>}
            </div>
        </>
    );
}

const GenresCarrousel = ({type,children}) =>{
    return (
        <div className="mt-10">
        {children.map((item,index) =>
            <div key={index}>
               <h2 className="text-white text-xtra sm:text-enormous mb-5 mx-8 sm:mx-24"><Link to={"/bygenre/"+type+"/"+item.name+"/"+item.id} >{item.name}</Link></h2>
                <Carrousel type={type}>{getUrlByGenre(type,item.id)}</Carrousel>
            </div>

        )}
        </div>
        
    );
}
