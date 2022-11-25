/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { getPosterUrl } from "../../util/getPosterUrl";
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../assets/arrowSwipe.css';
// eslint-disable-next-line react/prop-types
export const Carrousel = ({url, name,  type, children}) =>{

    
     const [data, loading, error] = useFetch(children);
     return (
        <>  
            <h2 className="w-10/12 text-white text-enormous sm:text-gigantous mb-5">
                <Link className="flex items-center" to={url} >{name}
                    <div className="ml-2 w-3 sm:w-5">
                        <img className="w-full h-auto" src="../../public/more.png" alt="show more" />
                    </div>
                </Link>
            </h2>
            <div className="w-full xl:w-11/12 relative">
            { ( data ) ? <MoviePoster type={type}>{data.results}</MoviePoster>: <LoadingCar/> }       
            </div>
        </>
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
                breakpoints={{
                    640:{
                        spaceBetween:5,
                        slidesPerGroup:4,
                        slidesPerView:4
                    },
                    1024:{
                        spaceBetween:5,
                        slidesPerGroup:5,
                        slidesPerView:5
                    },
                    1280:{
                        spaceBetween:5,
                        slidesPerGroup:7,
                        slidesPerView:7
                    }
                    
                }}
            >
            {children&&children.map((item,index) =>{
                return(
                    <div key={index}>
                        <SwiperSlide key={index}>
                            <Link to={"/"+type+"/"+item.id}>
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
            <div>loading</div>
        </div>
    );
}