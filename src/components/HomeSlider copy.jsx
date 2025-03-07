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

import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';

function HomeSlider() {

    const { data, error } = useApi(endpoints.home);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;

    return (
        <>
            <div className='top-slider-area'>
                <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination, Autoplay]} className="mySwiper" autoplay={{ delay: 5500, disableOnInteraction: false, }}>

                    {data?.slider_list?.map((slider, index) => (
                        <SwiperSlide key={index}>
                            <img src={slider.image} alt={slider.title} />
                            <div className='content-area'>
                                <Container>
                                    <h1>Welcome to<br />GAET Gokuldham</h1>
                                    <p>{slider.description}</p>
                                    <Link to={slider.link || "/"} className='btn-more'>Read More</Link>
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