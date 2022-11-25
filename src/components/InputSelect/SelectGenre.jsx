import React from "react";
import { useState } from "react";
import { InputSelectGenre } from "./InputSelectGenre";

export const SelectGenre = ({type,children}) =>{
    const [genreOn, setGenreOn] = useState(false);
    return(
        <div className="absolute top-20 right-1 z-50 bg-black pb-2 w-screen flex justify-center items-center">
            <div className="w-9/12 flex justify-end">
                <div onClick={()=> setGenreOn(!genreOn)} className="w-5 sm:w-8 cursor-pointer order-2">
                    <img className="w-full h-auto" src="../../public/filter.png" alt="Genres" />
                </div>
                {(genreOn) ? <InputSelectGenre onClick={()=> setGenreOn(!genreOn)} type={type}>{children}</InputSelectGenre>: null}
            </div>
        </div>
    );
}