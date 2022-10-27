import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    return (
        <nav className="text-medium w-full sm:w-1/2 sm:text-large font-netflix text-white">
            <ul className="flex justify-center sm:justify-start">
                <Link className="mx-2 sm:mx-10 border-solid rounded-xl bg-test px-2 py-1 transition ease-in-out  duration-700 hover:scale-110  hover:bg-bordeaux" to="/">Trending</Link>
                <Link className="mx-2 sm:mx-10 border-solid rounded-xl bg-test px-2 py-1 transition ease-in-out  duration-700 hover:scale-110  hover:bg-bordeaux" to= "/list/tv">Tv Series</Link>
                <Link className="mx-2 sm:mx-10 border-solid rounded-xl bg-test px-2 py-1 transition ease-in-out  duration-700 hover:scale-110 hover:bg-bordeaux" to="/list/movie">Movies</Link>
            </ul>
        </nav>
    );
}