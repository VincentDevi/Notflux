/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";

export const SearchList = ({onClick,url}) =>{
    const [ resultList, setResultList ] =useState([]);
    const [data, loading , error] = useFetch(url);
    let arr;
    if ( data && data.results.length != 0 ){
       arr = data.results.filter(item => item.media_type != "person");
    }

    return (
        <div>
           { ( arr) ? <ListeS onClick={onClick} data={arr}/> : <span></span> }
        </div>
    );
}
const ListeS =({onClick,data}) =>{
    return (
        <ul className="absolute z-40 w-64 h-64 overflow-scroll bg-black">
        {data.map((item,index) =>
           <Link onClick={onClick} to={"/description/"+item.media_type+"/"+item.id} key={index}> <li className="bg-test rounded my-0.5 px-7 py-2">{ (item.media_type=="tv") ? item.name : item.title } </li> </Link>
        )}
    </ul>
    );
}