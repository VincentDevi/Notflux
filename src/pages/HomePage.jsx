import React from "react";
import { Carrousel } from "../components/Carousel/Carrousel";
import {Header} from "../components/Header/Header"
import { SiteName } from "../components/SiteName/SiteName";

export const HomePage = () =>{

    
    const trendingArray = ["Halloween", "Movies", "Tv Series"];
    const movieTrending = "https://api.themoviedb.org/3/trending/movie/day?api_key=1f23cb937d155a995019ffd894a97ddd";
    const tvTrending = "https://api.themoviedb.org/3/trending/tv/day?api_key=1f23cb937d155a995019ffd894a97ddd";
    const horrorTrending ="https://api.themoviedb.org/3/discover/movie?api_key=1f23cb937d155a995019ffd894a97ddd&with_genres=27";
// poster path :
  //  http://image.tmdb.org/t/p/w500/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg
    return (
        <div>
            <SiteName/>
            <Header/>
            <h2 className="text-red text-xtra mb-5 mx-8">Halloween</h2>

            <Carrousel>{[trendingArray[0], horrorTrending]}</Carrousel>

            <h2 className="text-red text-xtra mb-5 mx-8">Movies</h2>

            <Carrousel>{[trendingArray[1], movieTrending]}</Carrousel>

            <h2 className="text-red text-xtra mb-5 mx-8">Tv Series</h2>

            <Carrousel>{[trendingArray[2], tvTrending]}</Carrousel>
        </div>
    );
}