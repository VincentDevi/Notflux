import { list } from "postcss";
import React, { Children } from "react";

// eslint-disable-next-line react/prop-types
export const Carousel = ({children}) =>{

    let test= null;
    if (children[1][0]!= null){
        const list = children[1][0].results;
        test = serieOrMovie(list);
    }

    return (
        <div className="flex-col h-auto">
            <h2 className="text-red text-xtra mb-5 mx-8">{children[0]}</h2>
            {(test== null)? console.log("loading") : test}        
        </div>
    );
}

const getSrcImage = (path) =>{
    return "http://image.tmdb.org/t/p/w500"+path
    }   

const serieOrMovie = (list) =>{
        return(
        <div className=" h-auto overflow-scroll flex w-full" >
                {list.map((item,index) => 
                    <div key={index} className="shrink-0 mx-2 mb-8 h-auto w-40">
                        <div className="h-56">
                        <img src={getSrcImage(item.poster_path)} alt="poster" className="object-contain h-full"/> 
                        </div>
                    </div>)}
            </div>
    );
}
