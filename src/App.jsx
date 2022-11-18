import React from "react";
import { Routes,Route } from "react-router-dom";
import './index.css';
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { NoMatch } from "./pages/NoMatch";
import { SinglePage } from "./pages/SinglePage";
import { NameSearch } from "./pages/NameSearch";
import { ByGenre } from "./pages/ByGenre";
const App = () =>{
    return(
        <div className="overflow-hidden">
            <Routes> 
                <Route path="/" element={<HomePage/>}/>
                
                <Route path="/list/:type" element={<MoviesPage/>}/>
                                
                <Route path="/description/:type/:id" element={<SinglePage/>}/>

                <Route path="/search/:query" element={<NameSearch/>} />
                
                <Route path="/bygenre/:type/:genre/:id" element={<ByGenre/>} />

                <Route path="*" element={<NoMatch />} />

            </Routes>
        </div>
    );
}
export default App