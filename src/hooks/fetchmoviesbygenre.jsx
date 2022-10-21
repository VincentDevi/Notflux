import axios from "axios";
import { useState,useEffect } from "react";

export const fecthByGenre = () =>{
    const [genres,setGenres] = useState();
    useEffect( () =>{
        const fetchGenre = async () =>{
            try{
                const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=1f23cb937d155a995019ffd894a97ddd");
                setGenres(response.data);
            }catch(e){
                console.error(e);
            }
        }
        fetchGenre();
    },[]);
    return genres;
}