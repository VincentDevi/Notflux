import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { MobileSearch } from "./Search/MobileSearch";
import { Searchbar } from "./Search/Searchbar";

export const Header = () =>{
    return (
        <div className="w-screen h-navMobile border-solid border-2 flex justify-center items-center">
            <div className="w-9/12 mt-5 mb-5 flex justify-between">
                {/* <div className="w-10 border-solid border-2 border-red">
                    <img className="w-full h-auto" src="public/netflix.png" alt="Notflux" />
                </div> */}
            <Link className="text-medium text-red" to="/">Notflux</Link>
            <MobileSearch/>

            </div>
        </div>
    );
}