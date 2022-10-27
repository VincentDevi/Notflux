/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { getPosterUrl } from "../../util/getPosterUrl";

export const SearchByGenre = ({data,type}) =>{
    return (
        <div className="w-full flex shrink-0 flex-wrap justify-center">
            {data.map((item,index) =>
                <div key={index} className="w-1/2 sm:w-1/5 h-auto px-2 py-2">
                      <Link to={"/description/"+type+"/"+item.id}><img src={getPosterUrl(item.poster_path)} alt={ (type=="tv") ? item.name : item.title }/></Link>
                </div>
    )}
        </div>
    );
}