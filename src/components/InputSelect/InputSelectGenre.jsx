/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export const InputSelectGenre = ({type,children}) =>{
    return (
            <ul className="w-48 absolute left-6 z-50 flex flex-wrap shrink-0 h-auto" name="genre" id="genre">
                { children && children.map( (item,index) =>
                    <Link className="w-1/2" key={index} to={"/bygenre/"+type+"/"+item.name+"/"+item.id}>
                        <li className="text-medium text-center bg-test" key={index} value={item.name}>{item.name}</li>
                    </Link>
                    )}
            </ul>        
        );
}