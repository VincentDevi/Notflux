import React from "react";

import { NavLink } from "react-router-dom";

export const DesktopNav = () =>{
    
    return(
        <nav className="flex items-center justify-start">
            <div className="w-9/12 flex items-center justify-center text-xtra">
                <NavLink to="/" className="w-32">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/movie" className="w-32">
                    <p>Movies</p>
                </NavLink>
                <NavLink to="/tv" className="w-32">
                    <p>Tv</p>
                </NavLink>
            </div>
        </nav>
    );
}