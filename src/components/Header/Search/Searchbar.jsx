import React from "react";

export const Searchbar = () =>{
    const search = () =>{
        // search for a movie or a tv serie
    }
    return (
        <div className="flex justify-center">
            <input type="text" className="border-2 border-grey h-7 w-64 px-5 pr-16 rounded-lg text-sm focus:outline-none bg-grey" />
            <button onClick={search} className="font-netflix text-large text-bordeaux">Search</button>
        </div>
    );
}