import React from "react";
import { Carrousel } from "../components/Carousel/Carrousel";
import {Header} from "../components/Header/Header"
import { SiteName } from "../components/SiteName/SiteName";

export const HomePage = () =>{
    const movieTrendingUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=1f23cb937d155a995019ffd894a97ddd";
    const tvTrendingUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=1f23cb937d155a995019ffd894a97ddd";
    const horrorUrl ="https://api.themoviedb.org/3/discover/movie?api_key=1f23cb937d155a995019ffd894a97ddd&with_genres=27";

    return (
        <div>
            <SiteName/>
            <Header/>
            
            <h2 className="text-white text-xtra mb-5 mx-8">Halloween</h2>
            <Carrousel>{horrorUrl}</Carrousel>
            
            <h2 className="text-white text-xtra mb-5 mx-8">Trending Movies</h2>
            <Carrousel>{movieTrendingUrl}</Carrousel>

            <h2 className="text-white text-xtra mb-5 mx-8">Trending Tv Series</h2>
            <Carrousel>{tvTrendingUrl}</Carrousel>
        
        </div>
    );
}