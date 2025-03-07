import React from 'react';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import ScrollAnimation from 'react-animate-on-scroll';
// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import './ReviewSlider.css';


import { useApi } from '../hooks/useApi';
import ScrollAnimation from 'react-animate-on-scroll';

function ReviewSlider() {
    const { data, error } = useApi(endpoints.settings);
    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!settings) return null;
    return (
        <>
            <div className='review-slider-section'>
                <Container>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                        <h2>What they say?</h2>
                    </ScrollAnimation>
                </Container>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 6000, disableOnInteraction: false, }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {/* <SwiperSlide>
                        <div className='review-block' style={{ background: '#78519E' }}>
                            <div className='msg-block'>
                                <p>Gokuldham High School and junior college is the best school. I have been in this school from four years and I have never experienced such excellent school. The teachers of the school are highly educated. The present principal and the vice principal of the secondary section and the teachers are very encouraging.</p>
                                <div className='name'>Dr Vivek Apte <span>PARENT (YASHODHAM HIGH SCHOOL)</span></div>
                            </div>
                        </div>
                    </SwiperSlide> */}

                    {data?.testimonial_list?.map((testimonial, index) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="review-block" style={{ background: `${testimonial.color}` }}>
                                <div className="msg-block">
                                    <p>{testimonial.description}</p>
                                    <div className="name">
                                        {testimonial.name} <span>{testimonial.designation}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </>
    );
}
export default ReviewSlider;