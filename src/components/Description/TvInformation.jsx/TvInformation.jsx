/* eslint-disable react/prop-types */
import React from "react";
import { getDuration } from "../../../util/getDuration";
export const TvInformation = ({children}) =>{
    return (
        <div className="sm:w-full sm:h-96 sm:order-3 sm:flex">
        <div className="my-7 flex justify-between sm:justify-start sm:w-5/12 sm:ml-20">
                   
            <div className="self-center">
                <h4 className="text-medium px-5">Number of season: <span className="text-large">{children.number_of_seasons}</span></h4>
                <h4 className="text-medium px-5">Number of episodes: <span className="text-large">{children.number_of_episodes}</span></h4>
                <p className="text-medium px-5">Note: <span className="text-large">{Math.round(children.vote_average)}</span> /10</p>
                
            </div>
            <div className="sm:self-center sm:pl-20">
                <h4 className="text-medium text-right pr-7 pt-2">Realease date:</h4>
                <p className="text-large text-right pr-7">{children.first_air_date}</p>
            </div>
        </div>


        <div className="sm:w-1/2 sm:self-center">
            <h4 className="text-large px-8">Synopsis</h4>
            <p className="text-medium text-justify px-5 mb-10">{children.overview}</p>
        </div>
    
    </div>
    );
}