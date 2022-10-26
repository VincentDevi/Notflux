import React from "react";

export const Searchbar = () =>{
    const search = () =>{
        // search for a movie or a tv serie
    }
    return (
        <div className="flex w-full mx-7 sm:w-96 mt-5 px-5">
            <input type="text" className="sm:py-5 border-2 mt-0.5 border-grey h-6 w-64 px-5 pr-16 rounded-xl text-sm focus:outline-none bg-grey" />
            <button onClick={search} className="font-netflix text-medium text-white bg-grey px-2 rounded-xl transition ease-in-out  duration-700 hover:bg-bordeaux ml-2">Search</button>
        </div>
    );
}