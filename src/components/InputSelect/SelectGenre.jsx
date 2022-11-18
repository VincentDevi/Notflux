import React from "react";
import { useState } from "react";
import { InputSelectGenre } from "./InputSelectGenre";

export const SelectGenre = ({type,children}) =>{
    const [genreOn, setGenreOn] = useState(false);
    return(
        <div className="flex flex-col w-1/2 border-solid border-2">
            <div onClick={()=> setGenreOn(!genreOn)} className="w-5 cursor-pointer">
                <img className="w-full h-auto" src="../../public/filter.png" alt="Genres" />
            </div>
            {(genreOn) ? <InputSelectGenre type={type}>{children}</InputSelectGenre>: null}
        </div>
    );
}