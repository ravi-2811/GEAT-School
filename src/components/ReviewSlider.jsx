import React from 'react';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import ScrollAnimation from 'react-animate-on-scroll';
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import './ReviewSlider.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';


function ReviewSlider() {
    const { data, error } = useApi(endpoints.home);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data || !data.testimonial_list) return <div>No reviews available</div>;

    const testimonials = data.testimonial_list;

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
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 10 },
                        1024: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial) => (
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
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default ReviewSlider;
