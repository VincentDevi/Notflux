import React from "react";
import { Header } from "../components/Header/Header";
import { SiteName } from "../components/SiteName/SiteName";
import { fecthByGenre } from "../hooks/fetchmoviesbygenre";

export const MoviesPage = () =>{

    
    return (
        <div>
            <SiteName/>
            <Header/>
        </div>
    );
}

