/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDescription } from "../components/Description/MovieDescription";
import { TvDescription } from "../components/Description/TvDescription";
import { Header } from "../components/Header/Header";
import { SimilarMovies } from "../components/Similar/SimilarMovies";
import { SiteName } from "../components/SiteName/SiteName";
import { TrailerVideo } from "../components/TrailerVideo/TrailerVideo";
import { useFetch } from "../hooks/useFetch";


export const SinglePage = () =>{
    const {type} = useParams();
    const {id} = useParams();
    const url = "https://api.themoviedb.org/3/"+type+"/"+id+"?api_key=1f23cb937d155a995019ffd894a97ddd";
    const data = useFetch(url);
               
    return (
        <div>
            <Header/>
            { ( !data[0] ) ? <p>loading</p> : (type==="movie") ? <MovieDescription>{data[0]}</MovieDescription> : <TvDescription>{data[0]}</TvDescription>}
            
            <TrailerVideo movieId={id}/>
            
            <SimilarMovies movieId={id} />
           
        </div>
    );
}


