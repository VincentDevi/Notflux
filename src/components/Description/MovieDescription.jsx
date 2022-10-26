/* eslint-disable react/prop-types */
import React from "react";
import { getDuration } from "../../util/getDuration";
import { getPosterUrl } from "../../util/getPosterUrl";

export const MovieDescription = ({children}) =>{
    return (
        <div className="sm:w-5/12 sm:flex">
            <div className="h-auto w-full  ">
                <img src={getPosterUrl(children.poster_path)} alt={children.title} className="w-full" />
            </div>
            <div className="w-full h-auto">
                
                <ul className="flex justify-around flex-wrap sm:flex-col sm:h-full sm::w-auto sm:ml-10 sm:justify-end">
                    {children.genres.map((item,index) =>
                    <li key={index} className="text-large mx-1.5 mt-3 shrink-0 w-24 text-center border-solid border-1 rounded bg-grey sm:mb-7">{(item.name=="Science Fiction")? "Sci-fi":item.name}</li>
                    )}
                </ul>
                </div>
             
        </div>
    );
}