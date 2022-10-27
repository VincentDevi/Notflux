/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { InputSelectGenre } from "../components/InputSelect/InputSelectGenre";
import { SearchByGenre } from "../components/SearchResult/SearchByGenre";
import { useFetch } from "../hooks/useFetch";

export const ByGenre = () =>{
    const {type} = useParams();
    const {genre} = useParams();
    const {id} = useParams();

    const url = "https://api.themoviedb.org/3/discover/"+type+"?api_key=1f23cb937d155a995019ffd894a97ddd&with_genres="+id;
    const [data, loading, error] =useFetch(url);
    const [ genreList , genreLoad, genreError ] = useFetch("https://api.themoviedb.org/3/genre/"+type+"/list?api_key=1f23cb937d155a995019ffd894a97ddd");
    return (
        <div>
            <Header/>
            { ( genreList && genreList.length != 0) ? <InputSelectGenre type={type}>{genreList.genres}</InputSelectGenre>: <p></p> }
            <h4 className="text-large">Search for: <span className="text-xtra"> " {genre} " </span></h4>

            { ( data ) ? <SearchByGenre data={data.results} type={type}/> : <p>loading</p>
}
            
        </div>
    );
}
