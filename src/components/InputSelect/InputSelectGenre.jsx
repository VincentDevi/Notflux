/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export const InputSelectGenre = ({type,children}) =>{
    return (
        <div className="my-10 sm:my-20">
            <ul className=" flex shrink-0 h-auto overflow-scroll sm:overflow-auto sm:flex-wrap sm:justify-center" name="genre" id="genre">
                { children && children.map( (item,index) =>
                    <Link className="" key={index} to={"/bygenre/"+type+"/"+item.name+"/"+item.id}>
                        <li className="py-0.5 sm:py-0 text-center text-medium w-40 border-r-solid border-r-2 border-r-white bg-test my-1 transition ease-in-out  duration-700 hover:scale-110 hover:bg-bordeaux" key={index} value={item.name}>{item.name}</li>
                    </Link>
                    )}
            </ul>        
        </div>

        );
}