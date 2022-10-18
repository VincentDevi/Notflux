import React from "react";
import "./assets/index.css";
import { Routes,Route } from "react-router-dom";
import { Halloween } from "./pages/Halloween";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { NoMatch } from "./pages/NoMatch";
import { SeriesPage } from "./pages/SeriesPage";
import { SinglePage } from "./pages/SinglePage";
const App = () =>{
    return(
        <div className="bg-black text-white">
            <Routes> 
                <Route path="/" element={<HomePage/>}/>
                
                <Route path="/movies" element={<MoviesPage/>}/>
                
                <Route path="/series" element={<SeriesPage/>}/>
                
                <Route path="/halloween" element={<Halloween/>}/>

                <Route path="/description" element={<SinglePage/>}/>

                <Route path="/*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}
export default App