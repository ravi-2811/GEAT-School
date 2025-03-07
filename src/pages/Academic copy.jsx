import React, { useEffect } from 'react';
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
import { useLocation } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';

function AcademicPage() {

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
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Academic</Breadcrumb.Item>
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
                                    <div className='innerContent'>
                                        <h3>{data.events[4].title}</h3>
                                        <p><span dangerouslySetInnerHTML={{ __html: data.events[4].description || '', }} /></p>
                                        <a href='#' className='btnMore'>LEARN MORE</a>
                                    </div>
                                    <img src={data.events[4].image} alt="logo" />
                                </div>

                                <div className='width-50 books-block' >
                                    <img src={data.events[3].image} alt="logo" className='studentcareimgleft' />
                                    <div className='innerContent'>
                                        <h3>{data.events[3].title}</h3>
                                        <p><span dangerouslySetInnerHTML={{ __html: data.events[3].description || '', }} /></p>
                                        <a href='#' className='btnMore'>LEARN MORE</a>
                                    </div>
                                </div>
                            </div>


                            {data.events
                                ?.filter(event => event.id !== 1 && event.id !== 2)
                                .slice()
                                .reverse()
                                .map((event, index) => (
                                    <div className='width-33 books-block' id={event.slug} key={index}>
                                        <img src={event.image} alt="logo" />
                                        <div className='innerContent'>
                                            <h3>{event.title}</h3>
                                            <p><span dangerouslySetInnerHTML={{ __html: event.description || '' }} /></p>
                                            <a href={event.link} className='btnMore'>LEARN MORE</a>
                                        </div>
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