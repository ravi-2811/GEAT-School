import React, { useCallback, useEffect, useState } from 'react';
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
import blackimg from './imges/1_503_1739443065.jpg'
import colorimg from './imges/1_932_1739422642.jpg'
import ScrollAnimation from 'react-animate-on-scroll';

function AboutPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // Handle mouse move event
    const handleMouseMove = useCallback((e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }, []);

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [handleMouseMove]);

    const { data, error } = useApi(endpoints.about);
    // const blackimg = "../../public/images/1_503_1739443065.jpg";
    // const colorimg = "../../public/imges/1_932_1739422642.jpg";

    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;
    return (
        <>
            
            {/* <InsideTopBanner
                pageTitle={data.top_section.title}
                pageSubTitle={data.top_section.page_name}
                BackgrondBack={colorimg}
            /> */}
            <div id='about_inside' className="inside-top-area">
                <div id="image-container">
                    <img src={blackimg} className="black-white" alt="Black and White" />
                    <img
                        src={colorimg}
                        className="colorful"
                        alt="Colorful"
                        style={{ clipPath: `circle(50px at ${mousePosition.x}px ${mousePosition.y}px)` }}
                        
                    />
                </div>

                <div className="content-part">
                    <div className="sub">{data.top_section.page_name}</div>
                    <h1>{data.top_section.title}</h1>
                </div>

            </div>
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About Us</Breadcrumb.Item>
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