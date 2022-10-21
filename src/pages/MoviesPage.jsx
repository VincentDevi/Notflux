import React from "react";
import { Carousel } from "../components/Carousel/Carousel";
import { Header } from "../components/Header/Header";
import { SiteName } from "../components/SiteName/SiteName";
import { fecthByGenre } from "../hooks/fetchmoviesbygenre";
import { fecthTrending } from "../hooks/fetchPopularMovie";
import { getUrlByGenre } from "../util/getListOfGenre";

export const MoviesPage = () =>{

    const genresArray = fecthByGenre();
    if ( genresArray){
        console.log(genresArray.genres)
    }
    return (
        <div>
            <SiteName/>
            <Header/>
        </div>
    );
}

