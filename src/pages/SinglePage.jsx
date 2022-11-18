/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import { MovieDescription } from "../components/Description/MovieDescription";
import { MovieInformation } from "../components/Description/MovieInformation/MovieInformation";
import { TvDescription } from "../components/Description/TvDescription";
import { TvInformation } from "../components/Description/TvInformation.jsx/TvInformation";
import { Header } from "../components/Header/Header";
import { MobileNav } from "../components/MobileNav/MobileNav";
import { SimilarMovies } from "../components/Similar/SimilarMovies";
import { TrailerVideo } from "../components/TrailerVideo/TrailerVideo";
import { useFetch } from "../hooks/useFetch";


export const SinglePage = () =>{
    const {type} = useParams();
    const {id} = useParams();
    const url = "https://api.themoviedb.org/3/"+type+"/"+id+"?api_key=1f23cb937d155a995019ffd894a97ddd";
    const data = useFetch(url);
               
    return (
        <div>
            <MobileNav/>
            <div className="sm:h-screen">
            
            <div className="sm:mx-24">

            <div className="sm:flex sm:shrink-0 sm:w-full sm:flex-wrap sm:justify-center">
            { ( !data[0] ) ? <p>loading</p> : (type==="movie") ? <MovieDescription>{data[0]}</MovieDescription> : <TvDescription>{data[0]}</TvDescription>}
            
            { ( !data[0] ) ? <p>loading</p> : (type==="movie") ? <MovieInformation>{data[0]}</MovieInformation> : <TvInformation>{data[0]}</TvInformation>}
            <TrailerVideo type={type} movieId={id}/>

            </div>
            </div>
            </div>
            <SimilarMovies type={type} movieId={id} />
           
        </div>
    );
}


