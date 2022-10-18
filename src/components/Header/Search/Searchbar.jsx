import React from "react";

export const Searchbar = () =>{
    const search = () =>{
        // search for a movie or a tv serie
    }
    return (
        <div className="flex justify-center">
            <input type="text" className="border-2 border-gray-300 bg-white h-7 w-64 px-5 pr-16 rounded-lg text-sm focus:outline-none" />
            <button onClick={search} className="font-netflix">Search</button>
        </div>
    );
}