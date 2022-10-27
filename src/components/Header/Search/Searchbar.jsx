import React, { useRef, useState } from "react";
import { SearchList } from "./SearchList";

export const Searchbar = () =>{
    const searchRef = useRef("");
    const [ url, setUrl ] = useState("");
    let query= "";

    const onChangeHandler = () =>{
        query = searchRef.current.value;
        const page = "1";
        setUrl("https://api.themoviedb.org/3/search/multi?api_key=1f23cb937d155a995019ffd894a97ddd&language=en-US&page="+page+"&query="+query);
    }
    const clickHandler = () =>{
        searchRef.current.value="";
    }
    const keyPressHandler = (event) =>{
        if (event.key==="Enter"){
            console.log('test');
            location.replace("/search/"+searchRef.current.value);
        }
    }
    return (
        <div className="flex-col w-full mx-7 sm:w-96 mt-5 px-5">
            <input ref={searchRef} onKeyDown={keyPressHandler} onChange={onChangeHandler} type="text" className="sm:py-5 border-2 mt-0.5 border-test h-6 w-64 px-7 pr-16 rounded-xl text-sm focus:outline-none bg-test" placeholder="Search" />
            { ( searchRef.current.value=="" && query=="") ? <span></span> : <SearchList onClick={clickHandler} url={url} />}
        </div>
    );
}