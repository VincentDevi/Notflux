import React from "react";
import { SiteName } from "../SiteName/SiteName";
import { Navbar } from "./Navbar/Navbar";
import { Searchbar } from "./Search/Searchbar";

export const Header = () =>{
    return (
        <div>
            <SiteName/>
            <Navbar/>
        </div>
    );
}