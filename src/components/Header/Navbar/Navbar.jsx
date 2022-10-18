import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    return (
        <nav className="text-large font-netflix text-grey">
            <ul className="flex justify-around">
                <Link to="/">Home</Link>
                <Link to= "/series">Tv Series</Link>
                <Link to="/movies">Movies</Link>
            </ul>
        </nav>
    );
}