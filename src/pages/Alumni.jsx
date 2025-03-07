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


function Alumni() {
    const Sectiontitle = "Success is not an activity but a progress";
    const subTitle = "Alumni";
    const BgImg = "/images/success-stories-photo.jpg"

    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    {/* <Breadcrumb.Item href="/">Home</Breadcrumb.Item> */}
                    <Breadcrumb.Item href="/achievements">Achievements</Breadcrumb.Item>
                    <Breadcrumb.Item active>Alumni</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section>
                <div className='inner-top-content-block'>
                    <Container>
                        <p>"Success is the sum of small efforts, repeated day in and day out."</p>
                    </Container>
                </div>
            </section>
            
            <section>
                <div className='announcement-area' style={{paddingTop: '0'}}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                        <h2>Alumni</h2>
                    </ScrollAnimation>
                </div>
            </section>

            <section>
                <div className='alumni-area'>
                    <Container>
                        {/* <h2>Alumni (Batch of 1989 to 2016)</h2> */}
                        <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination]} className="mySwiper" autoplay={{delay: 25500, disableOnInteraction: false, }}>
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
                                                <Link to="/" className='btn-more'>Download  ALUMNI LIST<img src={process.env.PUBLIC_URL + "/images/Download.png"} alt="Download" /></Link>
                                            </div>
                                        </div>
                                        
                                        <div class="year">GHS & JC STARS ALUMNI<br /><span>A.Y.(1989-2016)</span></div>
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
                                                <Link to="/" className='btn-more'>Download  ALUMNI LIST<img src={process.env.PUBLIC_URL + "/images/Download.png"} alt="Download" /></Link>
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
export default Alumni;

