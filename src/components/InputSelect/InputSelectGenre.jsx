/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export const InputSelectGenre = ({type,onClick,children}) =>{
    return (
        <div className="absolute right-0 top-20 order-1 w-9/12 left-2 h-contentMobile z-50">
            <ul className="w-10/12 bg-test h-full z-50 flex flex-col shrink-0 h-auto" name="genre" id="genre">
                { children && children.map( (item,index) =>
                    <Link className="" onClick={onClick}  key={index} to={"/bygenre/"+type+"/"+item.name+"/"+item.id}>
                        <li className="text-medium text-center bg-test" key={index} value={item.name}>{item.name}</li>
                    </Link>
                    )}
            </ul>   
        </div>     
        );
}