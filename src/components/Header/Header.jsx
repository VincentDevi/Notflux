import React from "react";
import { SiteName } from "../SiteName/SiteName";
import { Navbar } from "./Navbar/Navbar";
import { Searchbar } from "./Search/Searchbar";

export const Header = () =>{
    return (
        <div className="mb-5 sm:mb-20 w-full">
            <SiteName/>
            <div className="flex flex-wrap w-full sm:justify-evenly">
                <Navbar/>
                <Searchbar/>
            </div>
        </div>
    );
}