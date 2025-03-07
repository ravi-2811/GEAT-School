import React, { useEffect, useState } from 'react'

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
import { endpoints } from '../services/api';
import { EffectFade } from 'swiper/modules';
import { useApi } from '../hooks/useApi';
import ScrollAnimation from 'react-animate-on-scroll';

import sunrayanimation from './imges/sunray_animation.gif';

const FacilitiesSlider = () => {

    const [gifSrc, setGifSrc] = useState(sunrayanimation);

    useEffect(() => {
      setGifSrc(""); // Reset the source
      setTimeout(() => {
        setGifSrc(sunrayanimation); // Reapply the source
      }, 150); // Short delay to ensure reloading
    }, []);
    const { data, error } = useApi(endpoints.home);

    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;

    return (
        <div>
            <div className="facilities-slider">
                <Swiper navigation={true}  pagination={true} loop={true} modules={[Navigation, Pagination, Autoplay,EffectFade]} className="mySwiper" autoplay={{ delay: 4300, disableOnInteraction: false, }} >
                        <SwiperSlide>
                            <div className='facilities-area'>
                                <img className='sun-gif' src={sunrayanimation} alt="logo" />
                                {/* <Container> */}
                                    <div className='inner-flex'>
                                        <div className='photo-area'>
                                            <img className='img-top' src={data.facilities.image} alt="logo" />
                                        </div>
                                        <div className='content-part'>
                                            <div className='top-part'>
                                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                                                    <h2>Swimming Pool</h2>
                                                </ScrollAnimation>
                                                {/* <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.7}>
                                                    <Link to={data.facilities.link} className='btn-more'>LEARN MORE</Link>
                                                </ScrollAnimation> */}
                                            </div>
                                            <div className='bottom-part'>
                                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                                                    <h3>{data.facilities.title}</h3>
                                                    <p>{data.facilities.description}</p>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Container> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='facilities-area'>
                            <img className='sun-gif' src={sunrayanimation} alt="logo" />
                                {/* <Container> */}
                                    <div className='inner-flex'>
                                        <div className='photo-area'>
                                            <img src={data.facilities.image} alt="logo" />
                                        </div>
                                        <div className='content-part'>
                                            <div className='top-part'>
                                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                                                    <h2>Swimming Pool</h2>
                                                </ScrollAnimation>
                                                {/* <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.7}>
                                                    <Link to={data.facilities.link} className='btn-more'>LEARN MORE</Link>
                                                </ScrollAnimation> */}
                                            </div>
                                            <div className='bottom-part'>
                                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                                                    <h3>{data.facilities.title}</h3>
                                                    <p>{data.facilities.description}</p>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Container> */}
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default FacilitiesSlider;
