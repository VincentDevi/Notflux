import React from "react";
import { Carousel } from "../components/Carousel/Carousel";
import {Header} from "../components/Header/Header"
import { SiteName } from "../components/SiteName/SiteName";

export const HomePage = () =>{

    // Home page avec 
    // les séries en trending
    // les movies en trending
    // les films pour Halloween 
    // tout en carousel
    const trendingArray = ["Halloween", "Movies", "Tv Series"];

    return (
        <div>
            <SiteName/>
            <Header/>

            {trendingArray.map((item,index) =>
                 <Carousel key={index}>{item}</Carousel>)}
        </div>
    );
}