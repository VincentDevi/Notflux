import { useRef } from "react";
import { useState } from "react";
import { Searchbar } from "./Searchbar";

export const MobileSearch = () =>{

    const [buttonOn, setButtonOn] = useState(false);
    const inputref = useRef("");

    
    return (
        <div className="flex">
            {(buttonOn)? <Searchbar/> :null}
            <div className="w-5 cursor-pointer">
                <img onClick={() => setButtonOn(!buttonOn)} className="w-full h-auto" src="../../public/search.png" alt="search" />
            </div>
        </div> 
    );
}