import React from "react";
import { Routes,Route } from "react-router-dom";
import './index.css';
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { NoMatch } from "./pages/NoMatch";
import { SinglePage } from "./pages/SinglePage";
import { NameSearch } from "./pages/NameSearch";
import { ByGenre } from "./pages/ByGenre";
import { useWindowWidth} from "./hooks/useWindowWidth";
import { DesktopNav } from "./components/DesktopNav/DesktopNav";
import { MobileNav } from "./components/MobileNav/MobileNav";
import { Header } from "./components/Header/Header";



const App = () =>{
    const {dynamicHeight,dynamicWidth} = useWindowWidth();

    return(
        <>  
            {(dynamicWidth<1280)? <MobileNav/> : <DesktopNav/>}
            <Header/>

            <Routes> 
                <Route path="/" element={<HomePage/>}/>
                
                <Route path="/:type" element={<MoviesPage/>}/>
                <Route path=":type/:id" element={<SinglePage/>}/>
                <Route path=":type/:id/:genre" element={<ByGenre/>} />
                <Route path="/search/:query" element={<NameSearch/>} />
                <Route path="*" element={<NoMatch />} />

            </Routes>
        </>
    );
}
export default App