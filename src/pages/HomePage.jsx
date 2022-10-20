import React from "react";
import { Carousel } from "../components/Carousel/Carousel";
import {Header} from "../components/Header/Header"
import { SiteName } from "../components/SiteName/SiteName";
import { fecthTrending } from "../hooks/fetchPopularMovie";

export const HomePage = () =>{

    
    const trendingArray = ["Halloween", "Movies", "Tv Series"];
    const movieTrending = fecthTrending("https://api.themoviedb.org/3/trending/movie/day?api_key=1f23cb937d155a995019ffd894a97ddd");
    const tvTrending = fecthTrending("https://api.themoviedb.org/3/trending/tv/day?api_key=1f23cb937d155a995019ffd894a97ddd");
    const horrorTrending = fecthTrending("https://api.themoviedb.org/3/discover/movie?api_key=1f23cb937d155a995019ffd894a97ddd&with_genres=27");
   
// poster path :
  //  http://image.tmdb.org/t/p/w500/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg
    return (
        <div>
            <SiteName/>
            <Header/>
            <Carousel>{[trendingArray[0], horrorTrending]}</Carousel>
            <Carousel>{[trendingArray[1], movieTrending]}</Carousel>
            <Carousel>{[trendingArray[2], tvTrending]}</Carousel>
        </div>
    );
}