/* eslint-disable react/prop-types */
import React from "react";
import { Carrousel } from "../Carousel/Carrousel";

export const SimilarMovies = ({movieId}) =>{

    const url = "https://api.themoviedb.org/3/movie/"+movieId+"/similar?api_key=1f23cb937d155a995019ffd894a97ddd";
    return (
        <div>
            <h4 className="text-large px-8 pt-10 " >Similar Movies</h4>
            <Carrousel type={"movie"}>{url}</Carrousel>
        </div>
    );
}