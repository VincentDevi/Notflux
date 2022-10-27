/* eslint-disable react/prop-types */
import React from "react";
import { useFetch } from "../../hooks/useFetch";

const InputSelectGenre = ({listGenre}) =>{
    return (
        <select name="genre" id="genre">
            { listGenre && listGenre.map( (item,index) =>
            <option key={index} value={item}>{item}</option>
                )}
        </select>        
    );
}