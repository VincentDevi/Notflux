import React from "react";
import "./assets/index.css";
import { Routes,Route } from "react-router-dom";
import { Halloween } from "./pages/Halloween";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { NoMatch } from "./pages/NoMatch";
import { SinglePage } from "./pages/SinglePage";
import { NameSearch } from "./pages/NameSearch";
const App = () =>{
    return(
        <div>
            <Routes> 
                <Route path="/" element={<HomePage/>}/>
                
                <Route path="/list/:type" element={<MoviesPage/>}/>
                                
                <Route path="/halloween" element={<Halloween/>}/>

                <Route path="/description/:type/:id" element={<SinglePage/>}/>

                <Route path="/search/:query" element={<NameSearch/>} />

                <Route path="*" element={<NoMatch />} />

            </Routes>
        </div>
    );
}
export default App