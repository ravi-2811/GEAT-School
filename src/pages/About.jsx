import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';

import ScrollAnimation from 'react-animate-on-scroll';

function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.about);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;
    return (
        <>
            <InsideTopBanner
                pageTitle={data.top_section.title}
                pageSubTitle={data.top_section.page_name}
                BackgrondBack={data.top_section.back_image}
            />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item active>Overview</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section>
                <div className='inner-top-content-block'>
                    <Container>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                            <p>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: data.top_section?.story || '',
                                    }}
                                />
                            </p>

                        </ScrollAnimation>
                    </Container>
                </div>
            </section>
            <section>
                <div className='about-school-block'>
                    <Container>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{ delay: 6000, disableOnInteraction: false, }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {data.about_school.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='inner-flex'>
                                        <div className='content'>
                                            <div className='top'>
                                                <h2>{item.section_name}</h2>
                                                <h3>{item.section_title}</h3>
                                            </div>
                                            <div className='bottom'>
                                                <p>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.description || '',
                                                        }}
                                                    />
                                                </p>
                                                <Link to={item.link} className='btn-more'>Know more</Link>
                                            </div>
                                        </div>
                                        <div className='about-photo'>
                                            <img src={item.image} alt="logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}


                        </Swiper>


                    </Container>
                </div>
            </section>

            <ApplyEnrolBlock />
        </>
    );
}
export default AboutPage;