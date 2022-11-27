import React from "react";
import { useState } from "react";
import { InputSelectGenre } from "./InputSelectGenre";

export const SelectGenre = ({type,children}) =>{
    const [genreOn, setGenreOn] = useState(false);
    return(
        <div className="w-9/12 flex justify-end">
            <div onClick={()=> setGenreOn(!genreOn)} className="w-5 sm:w-8 cursor-pointer order-2">
                <img className="w-full h-auto" src="../../public/filter.png" alt="Genres" />
            </div>
        </div>
);
}