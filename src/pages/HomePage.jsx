import React from "react";
import { Link } from "react-router-dom";
import { Carrousel } from "../components/Carousel/Carrousel";
import {Header} from "../components/Header/Header"
import { SiteName } from "../components/SiteName/SiteName";

export const HomePage = () =>{
    const movieTrendingUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=1f23cb937d155a995019ffd894a97ddd";
    const tvTrendingUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=1f23cb937d155a995019ffd894a97ddd";
    const horrorUrl ="https://api.themoviedb.org/3/discover/movie?api_key=1f23cb937d155a995019ffd894a97ddd&with_genres=27";

    return (
        <div>
            <Header/>

            <Link to="/bygenre/movie/horror/27"><h2 className="text-white text-enormous mb-5 mx-8 font-halloween mt-10 sm:mx-24">Halloween</h2></Link>
            <Carrousel type={"movie"}>{horrorUrl}</Carrousel>
            
            <Link to="/list/movie" ><h2 className="text-white text-enormous mb-5 mx-8 sm:mx-24">Movies</h2></Link>
            <Carrousel type={"movie"}>{movieTrendingUrl}</Carrousel>

            <Link to="/list/tv"><h2 className="text-white text-enormous mb-5 mx-8 sm:mx-24">Tv Series</h2></Link>
            <Carrousel type={"tv"}>{tvTrendingUrl}</Carrousel>
        
        </div>
    );
}