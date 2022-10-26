/* eslint-disable react/prop-types */
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { getKeyOfTreailer } from "../../util/getKeyOfTrailer";
import { getYoutubeUrl } from "../../util/getYoutubeUrl";


export const TrailerVideo = ({type,movieId}) =>{
    const url = "https://api.themoviedb.org/3/"+type+"/"+movieId+"/videos?api_key=1f23cb937d155a995019ffd894a97ddd";
    const videoList = useFetch(url);
    return (
        <div className="sm:w-1/2 sm:order-2">
            { (videoList[0] ) ? <iframe className="w-full h-96 sm:w-full sm:h-full" src={getYoutubeUrl(getKeyOfTreailer(videoList[0]))}></iframe> : <p></p>}
            
        </div>
    );
}