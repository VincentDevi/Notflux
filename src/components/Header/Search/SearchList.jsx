/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";

export const SearchList = ({onClick,url}) =>{
    const [ resultList, setResultList ] =useState([]);
    const [data, loading , error] = useFetch(url);

  

    return (
        <div>
           { ( data) ? <ListeS onClick={onClick} data={data}/> : <span></span> }
        </div>
    );
}
const ListeS =({onClick,data}) =>{
    return (
        <ul className="absolute z-40 w-64 h-64 overflow-scroll">
        {data.results.map((item,index) =>
           <Link onClick={onClick} to={"/description/"+item.media_type+"/"+item.id} key={index}> <li className="bg-test rounded my-0.5 px-7 py-2">{ (item.media_type=="tv") ? item.name : item.title } </li> </Link>
        )}
    </ul>
    );
}