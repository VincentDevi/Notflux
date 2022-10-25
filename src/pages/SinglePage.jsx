import React from "react";
import { Header } from "../components/Header/Header";
import { SiteName } from "../components/SiteName/SiteName";

export const SinglePage = () =>{
    // https://api.themoviedb.org/3/:type/:id?api_key=1f23cb937d155a995019ffd894a97ddd
    
    const data = [];
    
    return (
        <div>
            <SiteName/>
            <Header/>
            <h3 className="text-xtra">data.title</h3>
            <div className="h-48 w-full border-solid border-2 border-white">
                <img src="#" alt="" />
            </div>
            <div className="w-full h-32 border-solid border-2 border-red flex justify-between">
                <div className="h-full flex-col">
                <ul className="text-large">
                    <li>data.genres.name</li>
                </ul>
                </div>
                <p className="text-medium">data.vote_average /10</p>

            </div>

            <p className="text-large">data.overview</p>
           
        </div>
    );
}