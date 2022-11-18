import React from "react";
import { Header } from "../components/Header/Header";
import { MobileNav } from "../components/MobileNav/MobileNav";

export const NoMatch = () =>{
    return (
        <div>
            <MobileNav/>
            <h2>erreur 404 page not found</h2>
            <p>en construction</p>

        </div>
    );
}