import React, { useEffect, useState } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import { Link, useLocation } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';


function AcademicPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const checkScreenSize = () => {
                console.log("Window Width:", window.innerWidth);
                setIsMobile(window.innerWidth <= 1025);
            };

            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);
            return () => window.removeEventListener('resize', checkScreenSize);
        }
    }, []);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

 useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
            const elements = [
                { id: "photo-block-1", offset: 200, reverse: false },
                { id: "photo-block-2", offset: -200, reverse: true }, 
            ];
    
            elements.forEach(({ id, offset, reverse }) => {
                const element = document.getElementById(id);
                if (element) {
                    const directionMultiplier = reverse ? -1 : 1; 
                    element.style.transform = `translateY(${offset - scrollTop * 0.1 * directionMultiplier}px)`;
                }
            });
        };
    
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const { data, error } = useApi(endpoints.academic);


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
                    <Breadcrumb.Item href="/academic">Academic</Breadcrumb.Item>
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
                <div className='academic-school-block'>
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
                            {data.curriculum.map((curriculum, index) => (
                                <SwiperSlide key={index}>
                                    <div className='inner-flex'>
                                        <div className='content'>
                                            <div className='top'>
                                                <h2>{curriculum.section_name}</h2>
                                                <h3>{curriculum.section_title}</h3>


                                            </div>
                                            <div className='bottom'>
                                                <p>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: curriculum.description || '',
                                                        }}
                                                    />
                                                </p>

                                            </div>
                                        </div>
                                        <div className='about-photo'>
                                            <img src={curriculum.image} alt="logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Container>
                </div>
            </section>

            <section>
                <div className='student-care-block'>
                    <Container>
                        <div className='innerSectionMain'>

                            <div className='innertopection'>
                                <div className='width-50 books-block' >
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                        <div className='innerContent'>
                                            <h3>{data.events[4].title}</h3>
                                            <p><span dangerouslySetInnerHTML={{ __html: data.events[4].description || '', }} /></p>
                                            {/* <a href='#' className='btnMore'>LEARN MORE</a> */}
                                            <Link to="/student-care" className='btnMore'>View Details</Link>
                                        </div>
                                    </ScrollAnimation>

                                    <img id='photo-block-1' src={data.events[4].image} alt="logo" />
                                </div>

                                <div key={isMobile ? 'mobile' : 'desktop'} className='width-50 books-block'>
                                    {isMobile ? (
                                        <>
                                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                                <div className='innerContent'>
                                                    <h3>{data.events[3].title}</h3>
                                                    <p><span dangerouslySetInnerHTML={{ __html: data.events[3].description || '' }} /></p>
                                                    {/* <a href='#' className='btnMore'>LEARN MORE</a> */}
                                                    <Link to="/school-fees" className='btnMore'>View Details</Link>

                                                </div>
                                            </ScrollAnimation>
                                            <img id='photo-block-2' src={data.events[3].image} alt="logo" className='studentcareimgleft' />
                                        </>
                                    ) : (
                                        <>
                                            <img  id='photo-block-2' src={data.events[3].image} alt="logo" className='studentcareimgleft' />
                                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                                <div className='innerContent'>
                                                    <h3>{data.events[3].title}</h3>
                                                    <p><span dangerouslySetInnerHTML={{ __html: data.events[3].description || '' }} /></p>
                                                    <Link to="/school-fees" className='btnMore'>View Details</Link>
                                                </div>
                                            </ScrollAnimation>
                                        </>
                                    )}
                                </div>
                            </div>


                            {data.events
                                ?.filter(event => event.id !== 1 && event.id !== 2)
                                .slice()
                                .reverse()
                                .map((event, index) => (
                                    <div className='width-33 books-block' id={event.slug} key={index}>
                                        <img src={event.image} alt="logo" />
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                            <div className='innerContent'>
                                                <h3>{event.title}</h3>
                                                <p dangerouslySetInnerHTML={{ __html: event.description || '' }} />
                                                <a target='_blank' href='https://gaet.trialview.in/uploads/school_gallery_image/1_1739864511.pdf' className='btnMore'>View Details</a>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                ))}

                        </div>
                    </Container>
                </div>
            </section>

            <ApplyEnrolBlock />
        </>
    );
}
export default AcademicPage;