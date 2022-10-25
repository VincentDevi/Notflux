/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { SiteName } from "../components/SiteName/SiteName";
import { useFetch } from "../hooks/useFetch";
import { getPosterUrl } from "../util/getPosterUrl";

export const SinglePage = () =>{
    // https://api.themoviedb.org/3/:type/:id?api_key=1f23cb937d155a995019ffd894a97ddd
    const {type} = useParams();
    const {id} = useParams();
    const url = "https://api.themoviedb.org/3/"+type+"/"+id+"?api_key=1f23cb937d155a995019ffd894a97ddd";
    const data = useFetch(url);


    return (
        <div>
            <SiteName/>
            <Header/>
            { ( data[0] ) ? <Informations>{data[0]}</Informations> : <p>loading</p>}
            
           
        </div>
    );
}

const Informations = ({children}) =>{
    return (
        <div>
            <div className="h-48 w-full border-solid border-2 border-white">
                <img src={getPosterUrl(children.poster_path)} alt="" />
            </div>
            <div className="w-full h-32 border-solid border-2 border-red flex justify-between">
                <div className="h-full flex-col">
                <ul className="text-large">
                    {children.genres.map((item,index) =>
                    <li key={index}>{item.name}</li>
                    )}
                </ul>
                </div>
                <p className="text-medium">{children.vote_average} /10</p>

            </div>

            <p className="text-large">{children.overview}</p>
        </div>
    );
}