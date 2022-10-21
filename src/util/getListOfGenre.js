import { fecthTrending } from "../hooks/fetchPopularMovie"


export const getMovieGenre = () =>{
    const fetchSerieGenre = fecthTrending("https://api.themoviedb.org/3/genre/movie/list?api_key=1f23cb937d155a995019ffd894a97ddd");
    return fetchSerieGenre;
}

export const getUrlByGenre = (type, idOfGenre) =>{
    return fecthTrending("https://api.themoviedb.org/3/discover/"+type+"?api_key=1f23cb937d155a995019ffd894a97ddd&with_genres="+idOfGenre);
}