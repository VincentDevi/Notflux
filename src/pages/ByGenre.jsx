import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
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
            <Header/>
            <h4>Search for: {genre}</h4>
            { ( data ) ? <SearchByGenre data={data.results} type={type}/> : <p>loading</p>
}
            
        </div>
    );
}
