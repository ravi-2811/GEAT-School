import React from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import ScrollAnimation from 'react-animate-on-scroll';


function TeachersAchievements() {
    const Sectiontitle = "Success is not an activity but a progress";
    const subTitle = "Success Stories";
    const BgImg = "/images/success-stories-photo.jpg"

    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    {/* <Breadcrumb.Item href="/">Home</Breadcrumb.Item> */}
                    <Breadcrumb.Item href="/achievements">Achievements</Breadcrumb.Item>
                    <Breadcrumb.Item active>Success Stories</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section>
                <div className='inner-top-content-block'>
                    <Container>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                            <p>"Success is the sum of small efforts, repeated day in and day out."</p>
                        </ScrollAnimation>
                    </Container>
                </div>
            </section>

            <section>
                <div className='alumni-area'>
                    <Container>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                            <h2>Alumni (Batch of 1989 to 2016)</h2>
                        </ScrollAnimation>
                        <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination]} className="mySwiper" autoplay={{ delay: 25500, disableOnInteraction: false, }}>
                            <SwiperSlide>
                                <div className='board'>
                                    <div className='photo-block'>
                                        <img src={process.env.PUBLIC_URL + "/images/alumni-1.png"} alt="alumni" />
                                    </div>
                                    <div className='right'>
                                        <div className='top-bar'>
                                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>

                                                <h3>Rucha Phutane</h3>
                                            </ScrollAnimation>
                                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>

                                                <p><span><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>General Manager</ScrollAnimation></span><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>Tata Consultancy Services, England</ScrollAnimation></p>
                                            </ScrollAnimation>
                                            <div className='download-all'>
                                                <span><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                                    To view all stars alumni 1989-2016
                                                </ScrollAnimation></span>
                                                <Link target='_blank' to='https://gaet.trialview.in/uploads/school_gallery_image/1_1739864511.pdf' className='btn-more'>Download  ALUMNI LIST<img src={process.env.PUBLIC_URL + "/images/Download.png"} alt="Download" /></Link>
                                            </div>
                                        </div>

                                        <div class="year"><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>GHS & JC STARS ALUMNI</ScrollAnimation>
                                            <br /><span><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>A.Y.(1989-2016)</ScrollAnimation></span></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='board'>
                                    <div className='photo-block'>
                                        <img src={process.env.PUBLIC_URL + "/images/alumni-1.png"} alt="alumni" />
                                    </div>
                                    <div className='right'>
                                        <div className='top-bar'>
                                            <h3>Rucha Phutane</h3>
                                            <p><span>General Manager</span> Tata Consultancy Services, England</p>
                                            <div className='download-all'>
                                                <span>To view all stars alumni 1989-2016</span>
                                                <Link target='_blank' to='https://gaet.trialview.in/uploads/school_gallery_image/1_1739864511.pdf' className='btn-more'>Download  ALUMNI LIST<img src={process.env.PUBLIC_URL + "/images/Download.png"} alt="Download" /></Link>
                                            </div>
                                        </div>

                                        <div class="year">GHS & JC STARS ALUMNI<br />A.Y.(1989-2016)</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Container>
                </div>
            </section>

            <ApplyEnrolBlock />
        </>
    );
}
export default TeachersAchievements;

