import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Searchbar } from "./Search/Searchbar";

export const Header = () =>{
    return (
        <div>
            <Navbar/>
            <Searchbar/>
        </div>
    );
}