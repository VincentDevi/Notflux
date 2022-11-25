import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNav = () =>{
    return(
        <nav className="absolute bottom-0 left-0 z-50 bg-black w-screen h-navMobile border-t-mobileBorderTop border-red flex justify-center">
            <div className="flex w-full sm:text-xtra lg:text-large">
                <NavLink to="/" className="w-1/3 text-center border-r-mobileNavBorder border-darkBlack flex items-center justify-center">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/movie" className="w-1/3 text-center flex items-center justify-center">
                    <p>Movies</p>
                </NavLink>
                <NavLink to="/tv" className="w-1/3 text-center border-l-mobileNavBorder border-darkBlack flex items-center justify-center">
                    <p>Tv</p>
                </NavLink>
            </div>

        </nav>
    );
}