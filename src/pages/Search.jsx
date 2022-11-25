import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";


export const Search = () =>{

    let navigate = useNavigate();
    const searchRef = useRef();
    let [data, loading, error]= useFetch();
    const [url, setUrl] = useState();

    const searchClick = () =>{
        navigate("/search/"+searchRef.current.value)
    }
    const inputOnChange = () =>{
        const query = searchRef.current.value
        setUrl("https://api.themoviedb.org/3/search/multi?api_key=1f23cb937d155a995019ffd894a97ddd&page=1&query="+query)
    }
    return (
        <div className="mt-16 h-contentMobile w-screen flex flex-col items-center">
            <div className="flex">
                <input className="text-black" ref={searchRef} onChange={inputOnChange} type="text" placeholder="search" />
                <div className="w-5">
                    <img className="w-full cursor-pointer" onClick={searchClick} src="#" alt="search" />
                </div>
            </div>
            {(data)? <SearchResultList>{data.results}</SearchResultList> : null}
        </div>
    );
}
const SearchResultList = ({children}) =>{
    return (
        <div className="flex flex-col">
            {children.map((item, index)=>{
                <div key={index}>
                    <Link>
                        <div>
                            <p>{(item.media_type==="tv") ? item.name: item.title}</p>
                        </div>
                    </Link>
                </div>
            })}
        </div>
    );
}