import React from "react";

// eslint-disable-next-line react/prop-types
export const Carousel = ({children}) =>{
    // un en trending
    // un pour Halloween

    // regarder pour faire un carousel
    const trendingArray = [
        {title : "titre du film",
        description : "synopsis"},
        {title : "titre du film",
        description : "synopsis"},
        {title : "titre du film",
        description : "synopsis"},
        {title : "titre du film",
        description : "synopsis"},
        {title : "titre du film",
        description : "synopsis"},
        {title : "titre du film",
        description : "synopsis"},
        {title : "titre du film",
        description : "synopsis"},
        {title : "titre du film",
        description : "synopsis"},
        {title : "titre du film",
        description : "synopsis"},
        {title : "titre du film",
        description : "synopsis"},
    ];
    return (
        <div className="flex-col">
            <h2 className="text-red text-xtra mb-5">{children}</h2>
            <div className=" overflow-scroll flex w-full" >
                {trendingArray.map((item,index) => 
                    <div key={index} className="shrink-0 mx-8 mb-5 h-48 w-1/3 border-solid border-white border-2">
                        <h3 className="text-large">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>)}
            </div>
        </div>
    );
}
