import React from "react";
import { Link } from "react-router-dom";

export const MobileNav = () =>{
    return(
        <nav className="fixed bottom-0 left-0 z-50 bg-black w-screen h-navMobile border-t-mobileBorderTop border-red flex justify-center">
            <div className="flex w-full">
                <Link to="/" className="w-1/3 text-center border-r-mobileNavBorder border-darkBlack flex items-center justify-center">
                    <p>Home</p>
                </Link>
                <Link to="/list/movie" className="w-1/3 text-center flex items-center justify-center">
                    <p>Movies</p>
                </Link>
                <Link to="/list/tv" className="w-1/3 text-center border-l-mobileNavBorder border-darkBlack flex items-center justify-center">
                    <p>Tv</p>
                </Link>
            </div>

        </nav>
    );
}