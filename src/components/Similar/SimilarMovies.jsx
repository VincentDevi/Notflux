/* eslint-disable react/prop-types */
import React from "react";
import { Carrousel } from "../Carousel/Carrousel";

export const SimilarMovies = ({type,movieId}) =>{

    const url = "https://api.themoviedb.org/3/"+type+"/"+movieId+"/similar?api_key=1f23cb937d155a995019ffd894a97ddd";
    return (
        <div className="w-screen flex flex-col items-center">
            <div className="w-11/12 flex flex-col items-center">
                <Carrousel name={(type==="movie")? "Similar movies": "Similar Tv Series"} type={type}>{url}</Carrousel>
            </div>
        </div>
    );
}