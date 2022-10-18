import React from "react";
import { Header } from "../components/Header/Header";
import { SiteName } from "../components/SiteName/SiteName";

export const SeriesPage = () =>{

    // liste de toutes les séries disponibles par genre
    // faire un filtre pour trier par genre

    return (
        <div>
            <SiteName/>
            <Header/>
            <h3>Series page</h3>

        </div>
    );
}