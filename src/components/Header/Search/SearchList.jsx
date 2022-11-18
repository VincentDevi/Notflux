/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";

export const SearchList = ({onClick,url}) =>{
    const [ resultList, setResultList ] =useState([]);
    const [data, loading , error] = useFetch(url);
    let arr;
    let test =false;
    if ( !error && data && data.results && data.results.length !=0 ){
       arr = data.results.filter(item => item.media_type != "person");
       test = true;
        
    }

    return (
        <div>
           { ( test) ? <ListeS onClick={onClick} data={arr}/> : <span></span> }
        </div>
    );
}
const ListeS =({onClick,data}) =>{
    return (
        <ul className="absolute z-50 w-32 max-h-96 overflow-scroll text-small font-list">
        {data.map((item,index) =>
           <Link onClick={onClick} to={"/description/"+item.media_type+"/"+item.id} key={index}> 
                <li className="bg-test my-0.5  py-1">{ (item.media_type=="tv") ? item.name : item.title } </li> 
           </Link>
        )}
    </ul>
    );
}