import React from "react";
import { Link } from "react-router-dom";
import { Carrousel } from "../components/Carousel/Carrousel";
import {Header} from "../components/Header/Header"
import {useFetch} from "../hooks/useFetch";
import {getPosterUrl} from "../util/getPosterUrl.js";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const HomePage = () =>{
    const movieTrendingUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=1f23cb937d155a995019ffd894a97ddd";
    const tvTrendingUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=1f23cb937d155a995019ffd894a97ddd";

    const [movieData, movieLoading, movieError] = useFetch(movieTrendingUrl);
    const [tvdata, tvLoading, tvError] = useFetch(tvTrendingUrl);
 
    return (
        <div>
            <Header/>
            
            <Link to="/list/movie" ><h2 className="text-white text-enormous mb-5 mx-8 sm:mx-24">Movies</h2></Link>
            {/* <Carrousel type={"movie"}>{movieTrendingUrl}</Carrousel> */}
            <div className="mx-10">
                <Swiper 
                        className="h-96"
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={3}
                        slidesPerView={7}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}    
                >
                {movieData&&movieData.results.map((item,index) =>{
                    return(
                    <SwiperSlide key={index}>
                        <Link to={"/description/movie/"+item.id}>
                            <img className="w-auto h-full rounded-xl" src={getPosterUrl(item.poster_path)} alt={item.title} />
                        </Link>
                    </SwiperSlide>
                    );
            })}
    
                </Swiper>
            </div>
            <Link to="/list/tv"><h2 className="text-white text-enormous mb-5 mx-8 sm:mx-24">Tv Series</h2></Link>
        
        </div>
    );
}
const Test =({children}) =>{
    return(
        <div>
            <Swiper className='h-80 border-solid border-red border-4'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            {children&& children.map(item =>{   
                <SwiperSlide>
                    {/* <img src={getPosterUrl(item.poster_path)} alt="poster" /> */}
                    <p className="a-slide">{item.title} </p>
                </SwiperSlide>
            })}
        </Swiper>
        </div>
        );
}
