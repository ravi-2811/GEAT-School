import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import EventsGrades from './EventsGrades';
import FacilitiesSlider from './FacilitiesSlider'
import HomeSlider from '../components/HomeSlider';
import ScrollAnimation from 'react-animate-on-scroll';
import ReviewSlider from '../components/ReviewSlider';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
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
import { Swiper, SwiperSlide } from 'swiper/react';

import facility1 from './imges/1_503_1739443065.jpg';

function HomePage() {

    const { data, error } = useApi(endpoints.home);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;


    return (
        <>
            <HomeSlider />

            {/* About */}
            <section>
                <div className='about-block'>
                    {/* delay={0.5} */}
                    <div className='center-content'>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.3}>
                            <h2>About</h2>
                        </ScrollAnimation>
                        <Link to="about" className='btn-more'>LEARN MORE</Link>

                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                            <p>{data.about.title}</p>
                        </ScrollAnimation>
                    </div>
                    <div className='school-photo'>
                        <img src={data.about.main_image} alt="" />
                    </div>
                    <ul className='box-layout'>
                        <li className='line1'>
                            <div className='box block-1'><img src={data.about.image_one} alt="logo" /></div>
                        </li>
                        <li className='line2'>
                            <div className='box block-1'><img src={data.about.image_two} alt="logo" /></div>
                            <div className='box block-2'><img src={data.about.image_three} alt="logo" /></div>
                        </li>
                        <li className='line3'>
                            <div className='box block-1'><img src={data.about.image_four} alt="logo" /></div>
                        </li>
                        <li className='line4'>
                            <div className='box block-1'><img src={data.about.image_five} alt="logo" /></div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* principal-area */}
            <section>
                <div className='principal-area'>
                    <div className='msg'>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: data.principal_message.message || '',
                                }}
                            />
                        </ScrollAnimation>

                    </div>
                    <div className='bottom-part'>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                            <div className='name'>{data.principal_message.name}</div>
                            <p>{data.principal_message.designation}<br />{data.principal_message.description}</p>
                        </ScrollAnimation>

                    </div>

                    <img src={data.principal_message.principal_image} className='bg-img' alt="logo" />
                </div>
            </section>

            {/* Event & Announcement */}
            <section>
                <div className='announcement-area'>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                        <h2>Event & Announcement</h2>
                    </ScrollAnimation>
                    <EventsGrades />
                </div>
            </section>

            {/* Our Facilities */}
            <section>
                <div className='facilities-main'>
                    <Container>
                        <div className='facilities-title'>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                                <h2>Our Facilities</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.8}>
                                <Link to='/achievements' className='btn-more'>KNOW MORE</Link>
                            </ScrollAnimation>
                        </div>
                    </Container>
                    <FacilitiesSlider/>
                </div>
            </section>

            {/* Our Facilities with slider*/}
            {/* <section>
                <div className='announcement-area'>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                        <h2>Our Facilities</h2>
                    </ScrollAnimation>

                    <Link className='btn-more'>LEARN MORE</Link>
                </div>
            </section>
            <section>
                <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination, Autoplay]} className="mySwiper" autoplay={{ delay: 25500, disableOnInteraction: false, }} >
                    <SwiperSlide>
                        <div className="facilities-area">
                            <Container>
                                <div className="inner-flex">
                                    <div className="photo-area">
                                        <img src={facility1} alt="facility1" />
                                    </div>
                                    <div className="content-part">
                                        <div className="top-part">
                                            <h2>Our Facilities</h2>
                                            <Link to="about" className="btn-more">LEARN MORE</Link>
                                        </div>
                                        <div className="bottom-part">
                                            <h3>Here Learning Meets Excellence</h3>
                                            <p>Get a sneak peek into the exceptional facilities that make our school the perfect place to learn, grow, & thrive.</p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="facilities-area">
                            <Container>
                                <div className="inner-flex">
                                    <div className="photo-area">
                                        <img src={facility1} alt="facility2" />
                                    </div>
                                    <div className="content-part">
                                        <div className="top-part">
                                            <h2>Modern Classrooms</h2>
                                            <Link to="about" className="btn-more">LEARN MORE</Link>
                                        </div>
                                        <div className="bottom-part">
                                            <h3>Enhancing Education with Technology</h3>
                                            <p>Experience state-of-the-art classrooms designed for interactive learning and student engagement.</p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section> */}

            {/* Our Achievements */}
            <section>
                <div className='latest-update-area'>
                    <Container>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                            <div className='sub'>OUR TITANS</div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.7}>
                            <h2><span>Latest Updates<br />On</span> Our Achievements</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.8}>

                            <Link to='/achievements' className='btn-more'>KNOW MORE</Link>
                        </ScrollAnimation>
                    </Container>
                    <div className='image-area'>
                        <ul className='photo-list'>
                            <li className='outer-small'>
                                <div className='photo'>
                                    <img src={data.achivement_gallery_list[2].image} alt="logo" />
                                </div>
                            </li>
                            <li className='outer-small-2'>
                                <div className='photo'>
                                    <img src={data.achivement_gallery_list[4].image} alt="logo" />
                                </div>
                                <div className='photo small'>
                                    <img src={data.achivement_gallery_list[3].image} alt="logo" />
                                </div>
                            </li>
                            <li className='center-image'>
                                <div className='photo'>
                                    <img src={data.achivement_gallery_list[2].image} alt="logo" />
                                </div>
                            </li>
                            <li className='outer-small-4'>
                                <div className='photo small'>
                                    <img src={data.achivement_gallery_list[1].image} alt="logo" />
                                </div>
                                <div className='photo'>
                                    <img src={data.achivement_gallery_list[0].image} alt="logo" />
                                </div>
                            </li>
                            <li className='outer-small'>
                                <div className='photo'>
                                    <img src={data.achivement_gallery_list[2].image} alt="logo" />
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Academics */}
            <section>
                <div className='academics-area'>
                    <Container>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                            <h2>Academics</h2>
                        </ScrollAnimation>

                        <Link to={data.academics.link} className='btn-more'>LEARN MORE</Link>

                        <div className='inside-block'>
                            {/* Pehle Image Animate Hogi */}
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={350}>
                                <h3>{data.academics.title}</h3>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                <img src={data.academics.image} alt="logo" />
                            </ScrollAnimation>


                            {/* Sabse Last me Description Animate Hoga */}
                            <p>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={350}>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: data.academics.description || '',
                                        }}
                                    />
                                </ScrollAnimation>
                            </p>
                        </div>
                    </Container>
                    <div className='rays'>
                        <img src={process.env.PUBLIC_URL + "/images/ray1.png"} alt="ray" />
                    </div>
                </div>
            </section>


            <ReviewSlider />
            <ApplyEnrolBlock />
        </>
    );
}
export default HomePage;