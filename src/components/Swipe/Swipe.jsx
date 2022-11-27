import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getPosterUrl } from "../../util/getPosterUrl";
import { useFetch } from "../../hooks/useFetch";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";

export const Swipe = ({type,children}) =>{

    const [data, loading, error] = useFetch(children);

    return(
        <div>
            { (data) ? <Loaded type={type}>{data.results}</Loaded> : <Loading/>}
        </div>
    );

}
const Loading = () =>{
    return(
        <p>loading</p>
    );
}
const Loaded = ({type,children}) =>{
    return (
        <Swiper className='h-80 border-solid border-red border-4'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {console.log(children)}
        {children.map(item=>{
            <SwiperSlide>
                <p className="text-white">test</p>
            </SwiperSlide>
        })}
      </Swiper>
    );
}
// <Poster type={type}>{item}</Poster>

const Poster = ({type,children}) =>{
    return (
        <Link to={"/description/"+type+"/"+item.id}>
            <img src={getPosterUrl(children.poster_path)} alt="poster" className="w-auto h-full" />
        </Link>
    );
}