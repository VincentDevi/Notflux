import React from "react";
import { Link } from "react-router-dom";

export const SiteName = () =>{
    return (
       <Link to="/"><h1 className="font-netflix text-gigantous text-red text-center">Notflux</h1></Link>
    );
}