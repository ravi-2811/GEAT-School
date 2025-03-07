import React from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import './Main.css';
import EventsGrades from './EventsGrades';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import MyCalendar from './MyCalendar';

function AnnouncementsPage() {
    const Sectiontitle = "Everyone Is An Achiever";
    const subTitle = "Announcements";
    const BgImg = "/images/event-photo.jpg"

    const { data: settingsData } = useApi(endpoints.settings);
    
    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Events</Breadcrumb.Item>
                    <Breadcrumb.Item active>Announcements</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section>
                <div className='inner-top-content-block'>
                    <Container>
                        <p>"Empowering and inspiring all students to excel as life long learners"</p>
                    </Container>
                </div>
            </section>


            {/* Event & Announcement */}
            <section>
                <div className='announcement-area p-0'>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                        <h2> Announcement</h2>
                    </ScrollAnimation>
                    <EventsGrades />
                </div>
            </section>

            <section>
                <div className='calendar-area'>
                    <Container>
                        <h2>Event</h2>

                        {/* <img src={process.env.PUBLIC_URL + "/images/calendar-img.png"} alt="logo" /> */}
                        <MyCalendar/> 
                    </Container>
                </div>
            </section>
            {/* <section>
                <div className='about-school-block announcement-grade'>
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
                            <SwiperSlide>
                                <div className='inner-flex'>
                                    <div className='content'>
                                        <div className='top'>
                                            <h2>Welcom Grade 1</h2>
                                            <h3>At Gokuldham High School & Jr. College, our little Gokulites step into a world of wonder & learning, .Where every day holds a new discovery!.</h3>
                                        </div>
                                        <div className='bottom full'>
                                            <p>Student led assessment ...QUEST QUOTIENT, A Learning Fiesta was organized for grade 1 and 2. It marked a significant milestone in our commitment to fostering student empowerment and accountability in their own learning journey. Students demonstrated remarkable initiative, critical thinking, and self-reflection. Their ability to articulate their learning objectives, </p>

                                            <p>showcase their progress, and identify areas for growth reflects the effectiveness of our educational approach in nurturing well-rounded individuals. We are immensely proud of the dedication and enthusiasm displayed by both students and educators during this assessment</p>
                                        </div>
                                    </div>
                                    <div className='about-photo'>
                                        <img src={process.env.PUBLIC_URL + "/images/Grade.png"} alt="logo" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='inner-flex'>
                                    <div className='content'>
                                        <div className='top'>
                                            <h2>Welcom Grade 2</h2>
                                            <h3>At Gokuldham High School & Jr. College, our little Gokulites step into a world of wonder & learning, .Where every day holds a new discovery!.</h3>
                                        </div>
                                        <div className='bottom full'>
                                            <p>Student led assessment ...QUEST QUOTIENT, A Learning Fiesta was organized for grade 1 and 2. It marked a significant milestone in our commitment to fostering student empowerment and accountability in their own learning journey. Students demonstrated remarkable initiative, critical thinking, and self-reflection. Their ability to articulate their learning objectives, </p>

                                            <p>showcase their progress, and identify areas for growth reflects the effectiveness of our educational approach in nurturing well-rounded individuals. We are immensely proud of the dedication and enthusiasm displayed by both students and educators during this assessment</p>
                                        </div>
                                    </div>
                                    <div className='about-photo'>
                                        <img src={process.env.PUBLIC_URL + "/images/Grade.png"} alt="logo" />
                                        
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Container>
                </div>
            </section> */}

             {/* List of Holidays */}
            <section>
                <div className='accordion-block-section'>
                    <Container>
                        <div className="inner-flex">
                            <div className="title-area">
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <h2>List of <span>Holidays</span></h2>
                                </ScrollAnimation>
                            </div>
                            <div className="content-part">
                                <Link target='_blank' to={settingsData?.settings?.school_holiday_pdf || "#"} className='btn-read'>Download</Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            <ApplyEnrolBlock />
        </>
    );
}
export default AnnouncementsPage;

