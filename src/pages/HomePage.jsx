import React from "react";
import {Header} from "../components/Header/Header"
import { SiteName } from "../components/SiteName/SiteName";

export const HomePage = () =>{

    // Home page avec 
    // les séries en trending
    // les movies en trending
    // les films pour Halloween 
    // tout en carousel
    return (
        <div>
            <SiteName/>
            <Header/>

        </div>
    );
}