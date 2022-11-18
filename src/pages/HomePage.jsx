import React from "react";
import { Link } from "react-router-dom";
import { Carrousel } from "../components/Carousel/Carrousel";
import {Header} from "../components/Header/Header"




export const HomePage = () =>{
    const movieTrendingUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=1f23cb937d155a995019ffd894a97ddd";
    const tvTrendingUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=1f23cb937d155a995019ffd894a97ddd";

  
    return (
        <div className="w-screen">
            <Header/>
            <div className="w-screen flex flex-col items-center">
            <h2 className="w-11/12 text-white text-enormous"><Link to="/list/movie" >Movies </Link></h2>
            <Carrousel type={"movie"}>{movieTrendingUrl}</Carrousel>
      
            <h2 className="w-11/12 text-white text-enormous"> <Link to="/list/tv">Tv Series</Link> </h2>
            <Carrousel type={"tv"}>{tvTrendingUrl}</Carrousel>
            </div>
        </div>
    );
}

