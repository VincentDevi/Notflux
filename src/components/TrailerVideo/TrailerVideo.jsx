/* eslint-disable react/prop-types */
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { getKeyOfTreailer } from "../../util/getKeyOfTrailer";
import { getYoutubeUrl } from "../../util/getYoutubeUrl";


export const TrailerVideo = ({type,movieId}) =>{
    const url = "https://api.themoviedb.org/3/"+type+"/"+movieId+"/videos?api_key=1f23cb937d155a995019ffd894a97ddd";
    const videoList = useFetch(url);

    return (
        <div className="w-full flex items-center justify-center">
            { (videoList[0] ) ? <iframe className="w-full max-w-3xl h-vid" src={getYoutubeUrl(getKeyOfTreailer(videoList[0]))}></iframe> : null}
        </div>
    );
}