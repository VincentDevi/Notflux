import React from "react";
import { Routes,Route } from "react-router-dom";
import { Halloween } from "./src/pages/Halloween";
import { HomePage } from "./src/pages/HomePage";
import { MoviesPage } from "./src/pages/MoviesPage";
import { SeriesPage } from "./src/pages/SeriesPage";
import { SinglePage } from "./src/pages/SinglePage";
export const App = () =>{
    return(
        <div>
            <h2>yo</h2>
            <Routes>
                
                <Route path="/" element={<HomePage/>}/>
                
                <Route path="movies" element={<MoviesPage/>}/>
                
                <Route path="series" element={<SeriesPage/>}/>
                
                <Route path="halloween" element={<Halloween/>}/>

                <Route path="description" element={<SinglePage/>}/>
            
            </Routes>
        </div>
    );
}