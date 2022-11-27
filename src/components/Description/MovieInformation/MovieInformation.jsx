/* eslint-disable react/prop-types */
import React from "react";
import { getDuration } from "../../../util/getDuration";

export const MovieInformation = ({children}) =>{
    return (
        <div className="w-11/12 h-max mb-10 xl:h-screen">  
            {/* <div className="h-auto w-full  ">
                <img src={getPosterUrl(children.poster_path)} alt={children.title} className="w-full" />
            </div> */}
            <div className="xl:flex">
                <ul className="h-genreMin overflow-hidden w-full xl:w-1/2 flex justify-around items-center flex-wrap font-bold">
                    {children.genres.map((item,index) =>
                    <li key={index} className="px-3">
                        {(item.name=="Science Fiction")? "Sci-fi":item.name}
                    </li>
                    )}
                </ul>  

                <div className="h-descMov min-h-fit w-full xl:w-1/2 flex justify-center flex-wrap">
                    <div className="w-1/2 flex flex-col items-center">
                        <h4 className="">Duration:</h4>
                        <p className="font-bold">{getDuration(children.runtime)}</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <h4 className="">Note:</h4> 
                        <p className="font-bold">{Math.round(children.vote_average)} <span className="font-light">/10</span></p> 
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <h4 className="">Realease date:</h4>
                        <p className="font-bold">{children.release_date}</p>
                    </div>
                </div>
            </div>
            
            <div className="min-h-fit">
                <h4 className="">Synopsis</h4>
                <p className="font-light text-justify">{children.overview}</p>
            </div>
        </div>
    );
}