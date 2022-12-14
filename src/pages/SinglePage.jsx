/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import { MovieInformation } from "../components/Description/MovieInformation/MovieInformation";
import { TvInformation } from "../components/Description/TvInformation.jsx/TvInformation";
import { SimilarMovies } from "../components/Similar/SimilarMovies";
import { TrailerVideo } from "../components/TrailerVideo/TrailerVideo";
import { useFetch } from "../hooks/useFetch";


export const SinglePage = () =>{
    const {type} = useParams();
    const {id} = useParams();
    const url = "https://api.themoviedb.org/3/"+type+"/"+id+"?api_key=1f23cb937d155a995019ffd894a97ddd";
    const data = useFetch(url);


               
    return (
        <div className="w-screen h-contentMobile">
                <div className="xl:h-screenMax">
                    <TrailerVideo type={type} movieId={id}/>
                    <div className="h-max font-list font-regular w-screen flex flex-col items-center">                    
                        { ( !data[0] ) ? <p>loading</p> : (type==="movie") ? <MovieInformation>{data[0]}</MovieInformation> : <TvInformation>{data[0]}</TvInformation>}
                    </div>
                </div>
            <SimilarMovies type={type} movieId={id} />


           
        </div>
    );
}