import React from "react";
import { Carrousel } from "../components/Carousel/Carrousel";
import { Header } from "../components/Header/Header";
import { SiteName } from "../components/SiteName/SiteName";
import { useFetch } from "../hooks/useFetch";
import { getUrlByGenre } from "../util/getListOfGenre";

export const SeriesPage = () =>{
    const allGenres = useFetch("https://api.themoviedb.org/3/genre/tv/list?api_key=1f23cb937d155a995019ffd894a97ddd");
    
    return (
        <div>
            <SiteName/>
            <Header/>
            { ( allGenres[0] ) ? <GenresCarrousel>{allGenres[0].genres}</GenresCarrousel> : <p>Loading</p>}

        </div>
    );
}

const GenresCarrousel = ({children}) =>{
    return (
        <div>
        {children.map((item,index) =>
            <div key={index}>
                <h2 className="text-red text-xtra mb-5 mx-8">{item.name}</h2>
                <Carrousel>{getUrlByGenre("tv",item.id)}</Carrousel>
            </div>

        )}
        </div>
        
    );
}
