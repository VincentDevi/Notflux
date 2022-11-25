import React from "react";
import { Link } from "react-router-dom";
import { MobileSearch } from "./Search/MobileSearch";

export const Header = () =>{
    return (
        <div className="absolute z-50 top-0 left-0 w-screen bg-black h-navMobile flex justify-center items-center">
            <div className="w-9/12 flex justify-between">
                <Link className="text-medium sm:text-large lg:text-huge text-red" to="/">Notflux</Link>
                <MobileSearch/>
            </div>
        </div>
    );
}