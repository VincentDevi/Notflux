/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const InputSelectGenre = ({listGenre,type}) =>{
    return (
        <select name="genre" id="genre">
            { listGenre && listGenre.map( (item,index) =>
            <option key={index} value={item}><Link to={"/bygenre/"+type+"/"+item.name+"/"+item.id}>{item}</Link></option>
                )}
        </select>        
    );
}