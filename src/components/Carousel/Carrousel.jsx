/* eslint-disable react/prop-types */
import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { getPosterUrl } from "../../util/getPosterUrl";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../assets/arrowSwipe.css';
// eslint-disable-next-line react/prop-types
export const Carrousel = ({type,children}) =>{

    
     const [data, loading, error] = useFetch(children);
     return (
        <div className="w-full relative">
            { ( data ) ? <MoviePoster type={type}>{data.results}</MoviePoster>
 : <LoadingCar/> }       
        </div>
    );
}

const MoviePoster = ({type,children}) =>{

    return(
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={5}
                slidesPerGroup={2}
                slidesPerView={2}
                loop={true}
                navigation
                pagination={{ clickable: true }}
            >
            {children&&children.map((item,index) =>{
                return(
                    <div key={index}>
                        <SwiperSlide key={index}>
                            <Link to={"/description/"+type+"/"+item.id}>
                                <img className="rounded-lg" src={getPosterUrl(item.poster_path)} alt={(type==="movie")?item.title:"poster"} />
                            </Link>
                        </SwiperSlide>
                    </div>
                    );
                })}
                
            </Swiper>
        </>
    );
}
const LoadingCar = () =>{
    return (
        <div>
            <p>loading</p>
        </div>
    );
}