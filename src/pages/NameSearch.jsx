/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { NoResult } from "../components/NoResult/NoResult";
import { SearchResult } from "../components/SearchResult/SearchResult";
import { useFetch } from "../hooks/useFetch";

export const NameSearch = () =>{

    const {query} = useParams();
    const [ page, setPage ] = useState("1");
    const [ data, loading , error] = useFetch("https://api.themoviedb.org/3/search/multi?api_key=1f23cb937d155a995019ffd894a97ddd&language=en-US&page="+page+"&query="+query)
    let arr;
    if (data){
        arr = data.results.filter(item => item.media_type != "person");
    }
    return (
        <>
        <h4 className=" mx-5 text-medium sm:text-xtra sm:pl-36 sm:mb-10">Your Search for: <span className="text-large sm:text-enormous"> " {query} " </span></h4>
        <div className="pb-16">
        { ( arr && arr !=0 ) ? <SearchResult data={arr}/> : <NoResult/> }
        </div>
        </>
    );
}