import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { DesktopNav } from "../DesktopNav/DesktopNav";
import { InputSelectGenre } from "../InputSelect/InputSelectGenre";
import { MobileSearch } from "./Search/MobileSearch";
import { useFetch } from "../../hooks/useFetch";

export const Header = () =>{
    const [genre, setGenre] = useState(false);
    const {dynamicWidth, dynamicHeight} = useWindowWidth();
    const {type} =useParams();
    console.log(type)
    const allGenres = useFetch("https://api.themoviedb.org/3/genre/"+type+"/list?api_key=1f23cb937d155a995019ffd894a97ddd");
    return (
        <div className="absolute z-50 top-0 left-0 w-11/12 bg-black h-navMobile flex justify-center items-center">
            <div className="w-11/12 flex">
                <Link className="w-2/12 text-medium sm:text-large lg:text-huge text-red" to="/">Notflux</Link>
                {(dynamicWidth>1280)?<DesktopNav/>:null}
                <div className="w-10/12 flex justify-end">
                    <MobileSearch/>
                    {/* {(allGenres[0])?<GenreButton onClick={()=> setGenre(!genre)}/>:null}
                    {(genre)? <InputSelectGenre/>:null} */}
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