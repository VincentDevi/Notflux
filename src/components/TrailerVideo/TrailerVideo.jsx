/* eslint-disable react/prop-types */
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { getKeyOfTreailer } from "../../util/getKeyOfTrailer";
import { getYoutubeUrl } from "../../util/getYoutubeUrl";


export const TrailerVideo = ({movieId}) =>{
    const url = "https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=1f23cb937d155a995019ffd894a97ddd";
    const videoList = useFetch(url);
    return (
        <div>
            { (videoList[0] ) ? <iframe className="w-full h-96" src={getYoutubeUrl(getKeyOfTreailer(videoList[0]))}></iframe> : <p></p>}
            
        </div>
    );
}