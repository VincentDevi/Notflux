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
        <div>
            <h2 className="text-red text-xtra">{children}</h2>
            <div>
                {trendingArray.map((item,index) => 
                    <div key={index}>
                    <h3 className="text-large">{item.title}</h3>
                    <p>{item.description}</p>
                    </div>)}
            </div>
        </div>
    );
}
