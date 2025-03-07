import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
import './Main.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import { EffectFade } from 'swiper/modules';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';


const EventsGrades = () => {
    const { data, error } = useApi(endpoints.home);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;

    return (
        <div>
            <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination, Autoplay]}  className="mySwiper" autoplay={{ delay: 25500, disableOnInteraction: false, }} >

                {data?.announcement_list?.map((announcement, index) => (
                    <SwiperSlide key={index}>
                        <img src={announcement.image} className='bg-img' alt="logo" />
                        <div className='white-board'>
                            <div className='circle one'></div>
                            <div className='circle two'></div>
                            <div className='left'>
                                <div className='date'>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: announcement.announcement_title || '',
                                        }}
                                    />
                                </div>
                                <h3>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: announcement.title || '',
                                        }}
                                    />
                                </h3>
                                <p>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: announcement.description || '',
                                        }}
                                    />
                                </p>
                                {/* <Link to={announcement.link} className='btn-more'>Read More</Link> */}
                                <Link to='/announcements' className='btn-more'>Read More</Link>
                            </div>
                            <div className='right'>
                                <div className='photo-block'>
                                    <img src={announcement.image} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default EventsGrades
