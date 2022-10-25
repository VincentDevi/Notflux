/* eslint-disable react/prop-types */
import React from "react";
import { getPosterUrl } from "../../util/getPosterUrl";

export const MovieDescription = ({children}) =>{
    return (
        <div>
            <div className="h-auto w-full">
                <img src={getPosterUrl(children.poster_path)} alt={children.title} className="w-full" />
            </div>
            <div className="w-full h-auto">
                
                <ul className="flex justify-around flex-wrap">
                    {children.genres.map((item,index) =>
                    <li key={index} className="mx-1.5 mt-3 shrink-0 w-24 text-center border-solid border-1 rounded bg-bordeaux text-medium">{(item.name=="Science Fiction")? "Sci-fi":item.name}</li>
                    )}
                </ul>
                <p className="text-medium text-right pr-5 py-3">{children.release_date}</p>
                <p className="text-medium px-5">Note:<span className="text-large">{Math.round(children.vote_average)}</span> /10</p>

            </div>
            <div>
                <h4 className="text-large px-8">Synopsis</h4>
                <p className="text-medium text-justify px-5">{children.overview}</p>
            </div>
        </div>
    );
}