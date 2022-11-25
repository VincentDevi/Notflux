/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useParams } from "react-router-dom";
import { SearchByGenre } from "../components/SearchResult/SearchByGenre";
import { useFetch } from "../hooks/useFetch";

export const ByGenre = () =>{
    const {type} = useParams();
    const {genre} = useParams();
    const {id} = useParams();

    const url = "https://api.themoviedb.org/3/discover/"+type+"?api_key=1f23cb937d155a995019ffd894a97ddd&with_genres="+id;
    const [data, loading, error] =useFetch(url);
    return (
        <div>
            <h4 className="mx-5 text-medium sm:text-large sm:pl-36 sm:mb-10">Search for: 
                <span className="text-large sm:text-enormous"> " {genre} " </span>
            </h4>
            <div className="h-contentMobile pb-16 overflow-y-scroll">
                { ( data ) ? <SearchByGenre data={data.results} type={type}/> : <p>loading</p>}
            </div>   
        </div>
    );
}
