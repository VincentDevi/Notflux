import { useRef } from "react";
import { useState } from "react";
import { Searchbar } from "./Searchbar";

export const MobileSearch = () =>{

    const [buttonOn, setButtonOn] = useState(false);

    
    return (
        <div className="flex w-4/5 justify-end items-center">
            {(buttonOn)? <Searchbar/>:null}
            <div>
                <div className="w-5 sm:w-6 cursor-pointer">
                    <img onClick={() => setButtonOn(!buttonOn)} className="w-full h-auto" src="search.png" alt="search" />
                </div>
            </div>
        </div> 
    );
}
