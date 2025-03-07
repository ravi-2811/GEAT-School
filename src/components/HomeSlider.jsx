import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeSlider.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";

import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';



function HomeSlider() {

    const { data, error } = useApi(endpoints.home);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;


    return (
        <>
            <div className='top-slider-area'>
                {/* <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination, Autoplay]} className="mySwiper" autoplay={{ delay: 5500, disableOnInteraction: false, }}> */}
                <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination, ]} className="mySwiper" autoplay={{ delay: 5500, disableOnInteraction: false, }}>

                    {data?.slider_list?.map((slider, index) => (
                        <SwiperSlide key={index}>
                            <img src={slider.image} alt={slider.title} />
                            <div className='content-area'>
                                <Container>
                                    <h1>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: slider.title || '',
                                            }}
                                        />
                                    </h1>

                                    <p>
                                    <span
                                            dangerouslySetInnerHTML={{
                                                __html: slider.description || '',
                                            }}
                                        />
                                    </p>
                                    <Link to={slider.link || "/"} className='btn-more'>Know More</Link>
                                </Container>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
}
export default HomeSlider;