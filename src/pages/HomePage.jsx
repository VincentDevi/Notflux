import React from "react";
import { Carrousel } from "../components/Carousel/Carrousel";



export const HomePage = () =>{
    const movieTrendingUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=1f23cb937d155a995019ffd894a97ddd";
    const tvTrendingUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=1f23cb937d155a995019ffd894a97ddd";
  
    return (
        <>
            <div className="h-contentMobile">   
                <div className="relative top-20 xl:relative w-screen h-max flex flex-col items-center">
                    <Carrousel url={"/movie"} name={"movie"} type={"movie"}>{movieTrendingUrl}</Carrousel>
                    <Carrousel url={"/tv"} name={"tv"} type={"tv"}>{tvTrendingUrl}</Carrousel>
                </div>
            </div>
        </>
    );
}

