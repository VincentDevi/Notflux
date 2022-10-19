import React from "react";
import { Header } from "../components/Header/Header";
import { SiteName } from "../components/SiteName/SiteName";

export const MoviesPage = () =>{
    // liste de tous les films par genre
   // faire un filtre pour trier par genre le même que pour la page des séries
    return (
        <div>
            <SiteName/>
            <Header/>
            <h3>Movies page</h3>
            <p>en construction</p>
        </div>
    );
}