import React from "react";
import { Header } from "../components/Header/Header";
import { SiteName } from "../components/SiteName/SiteName";
import { fecthTrending } from "../hooks/fetchPopularMovie";

export const SeriesPage = () =>{

    const listSerieGenre = fecthTrending("https://api.themoviedb.org/3/genre/tv/list?api_key=1f23cb937d155a995019ffd894a97ddd");
    if (listSerieGenre[0]){
        console.log(listSerieGenre[0].genres);
    }
    return (
        <div>
            <SiteName/>
            <Header/>
            <h3>Series page</h3>
            <p>en construction</p>

        </div>
    );
}