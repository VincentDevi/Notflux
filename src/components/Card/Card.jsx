import React from "react";

// eslint-disable-next-line react/prop-types
export const Card = ({children}) =>{
    return (
        <div>
            <div>
                <img src="#" alt="Affiche"/>
            </div>
            <div>
                <h4>{children[0]}</h4>
            </div>
            <p> {children[1]}</p>
        </div>
    );
}