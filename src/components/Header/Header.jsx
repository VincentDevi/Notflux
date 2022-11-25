import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MobileSearch } from "./Search/MobileSearch";

export const Header = () =>{
    const [genre, setGenre] = useState(false);
 
    return (
        <div className="absolute z-50 top-0 left-0 w-screen bg-black h-navMobile flex justify-center items-center">
            <div className="w-11/12 flex">
                <Link className="w-2/12 text-medium sm:text-large lg:text-huge text-red" to="/">Notflux</Link>
                <div className="w-10/12 flex justify-end">
                    <MobileSearch/>
                    <GenreButton onClick={()=> setGenre(!genre)}/>
                </div>
            </div>
        </div>
    );
}
const GenreButton = ({onClick}) =>{
    return (
        <div onClick={onClick} className="w-1/5 sm:w-8 cursor-pointer flex justify-end items-center">
            <div className="w-5">
                <img src="../public/filter.png" alt="genre" />
            </div>
        </div>
    );
}