/* eslint-disable react/prop-types */
import React from "react";
import { getPosterUrl } from "../../util/getPosterUrl";
import { Link } from "react-router-dom";

export const SearchResult = ({data}) =>{
    return (
        <div className="w-full flex shrink-0 flex-wrap justify-center">
            { data.map ( (item,index) =>
                <div key={index} className="w-1/2 sm:w-1/5 h-auto px-2 py-2 hover:scale-110 duration-700">
                   <Link to={"/"+item.media_type+"/"+item.id}> <img className="" src={getPosterUrl(item.poster_path)} alt={ (item.media_type ==="tv") ? item.name : item.title }/></Link>
                </div>
            )}
        </div>
    );
}