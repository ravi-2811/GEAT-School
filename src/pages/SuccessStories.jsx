import React, { useEffect, useState } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Button from 'react-bootstrap/Button';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

function SuccessStoriesPage() {
    const [academicVisible, setAcademicVisible] = useState(6);
    const [coCurricularVisible, setCoCurricularVisible] = useState(6);
    const [sportsVisible, setSportsVisible] = useState(6);

    const [academicExpanded, setAcademicExpanded] = useState(false);
    const [coCurricularExpanded, setCoCurricularExpanded] = useState(false);
    const [sportsExpanded, setSportsExpanded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.schoolwinnerlist);

    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;

    // Function to toggle images for Academic Winning
    const toggleAcademicImages = () => {
        if (academicExpanded) {
            setAcademicVisible(6);
        } else {
            setAcademicVisible(data.winners.ACADEMIC_WINNING.length);
        }
        setAcademicExpanded(!academicExpanded);
    };

    // Function to toggle images for Co-Curricular Winning
    const toggleCoCurricularImages = () => {
        if (coCurricularExpanded) {
            setCoCurricularVisible(6);
        } else {
            setCoCurricularVisible(data.winners.CO_CURRICULAR_ACTIVIES_WINNING.length);
        }
        setCoCurricularExpanded(!coCurricularExpanded);
    };

    // Function to toggle images for Sports Winning
    const toggleSportsImages = () => {
        if (sportsExpanded) {
            setSportsVisible(6);
        } else {
            setSportsVisible(data.winners.SPORTS_WINNING.length);
        }
        setSportsExpanded(!sportsExpanded);
    };

    return (
        <>
            <InsideTopBanner
                pageTitle={data.top_section.title}
                pageSubTitle={data.top_section.page_name}
                BackgrondBack={data.top_section.back_image}
            />
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
                <div className='announcement-area' style={{ paddingTop: '0' }}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                        <h2>Success Stories</h2>
                    </ScrollAnimation>
                </div>
            </section>

            <section>
                <div className='alumni-area'>
                    <Container>
                        {/* <h2>Alumni (Batch of 1989 to 2016)</h2> */}
                        <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination]} className="mySwiper" autoplay={{ delay: 25500, disableOnInteraction: false, }}>
                            <SwiperSlide>
                                <div className='board'>
                                    <div className='photo-block'>
                                        <img src={process.env.PUBLIC_URL + "/images/Manna_ved.png"} alt="alumni" />
                                    </div>
                                    <div className='right'>
                                        <div className='top-bar'>
                                            <h3>Manna Ved</h3>
                                            <p><span>Indian National Swimming Meet</span></p>
                                            <div className='download-all'>
                                                <span> Gold in 100 Metre Freestyle <br />
                                                    Gold in 200 Metre Freestyle <br />
                                                    Silver in 4 x 100 Metre Freestyle
                                                </span>
                                                {/* <Link to="/" className='btn-more'>Download  ALUMNI LIST<img src={process.env.PUBLIC_URL + "/images/Download.png"} alt="Download" /></Link> */}
                                            </div>
                                        </div>

                                        <div class="year">GHS Batch of 2018 </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='board'>
                                    <div className='photo-block'>
                                        <img src={process.env.PUBLIC_URL + "/images/Manna_ved.png"} alt="alumni" />
                                    </div>
                                    <div className='right'>
                                        <div className='top-bar'>
                                            <h3>Manna Ved</h3>

                                            <p>
                                                <span>Indian National Swimming Meet</span></p>

                                            <div className='download-all'>

                                                <span> Gold in 100 Metre Freestyle <br />
                                                    Gold in 200 Metre Freestyle <br />
                                                    Silver in 4 x 100 Metre Freestyle
                                                </span>
                                                {/* <Link to="/" className='btn-more'>Download  ALUMNI LIST<img src={process.env.PUBLIC_URL + "/images/Download.png"} alt="Download" /></Link> */}
                                            </div>
                                        </div>

                                        <div class="year">GHS Batch of 2018 </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Container>
                </div>
            </section>
            <br /><br />
            <br /><br />
            <br /><br />
            {/* Academic Winning Section */}
            <div className='winner-gallery-area'>
                <h2>Academic Winning</h2>
                <div className='inside-block'>
                    <Container>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                            <Masonry columnsCount={3} gutter="10px">
                                {(data?.winners.ACADEMIC_WINNING || []).slice(0, academicVisible).map((gallery, index) => (
                                    <img
                                        key={index}
                                        src={gallery.image}
                                        alt={gallery.title || "Gallery Image"}
                                        style={{ width: "100%", display: "block" }}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Container>
                </div>
                {data.winners.ACADEMIC_WINNING.length > 7 && (
                    <div className='text-center mt-3'>
                        <Button variant="more" onClick={toggleAcademicImages}>
                            {academicExpanded ? "See Less" : "See More"}
                        </Button>
                    </div>
                )}
            </div>

            {/* Co-Curricular Activities Winning Section */}
            <div className='winner-gallery-area'>
                <h2>Co-Curricular Activities Winning</h2>
                <div className='inside-block'>
                    <Container>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                            <Masonry columnsCount={3} gutter="10px">
                                {(data?.winners.CO_CURRICULAR_ACTIVIES_WINNING || []).slice(0, coCurricularVisible).map((gallery, index) => (
                                    <img
                                        key={index}
                                        src={gallery.image}
                                        alt={gallery.title || "Gallery Image"}
                                        style={{ width: "100%", display: "block" }}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Container>
                </div>
                {data.winners.CO_CURRICULAR_ACTIVIES_WINNING.length > 7 && (
                    <div className='text-center mt-3'>
                        <Button variant="more" onClick={toggleCoCurricularImages}>
                            {coCurricularExpanded ? "See Less" : "See More"}
                        </Button>
                    </div>
                )}
            </div>

            {/* Sports Winning Section */}
            <div className='winner-gallery-area'>
                <h2>Sports Winning</h2>
                <div className='inside-block'>
                    <Container>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                            <Masonry columnsCount={3} gutter="10px">
                                {(data?.winners.SPORTS_WINNING || []).slice(0, sportsVisible).map((gallery, index) => (
                                    <img
                                        key={index}
                                        src={gallery.image}
                                        alt={gallery.title || "Gallery Image"}
                                        style={{ width: "100%", display: "block" }}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Container>
                </div>
                {data.winners.SPORTS_WINNING.length > 7 && (
                    <div className='text-center mt-3'>
                        <Button variant="more" onClick={toggleSportsImages}>
                            {sportsExpanded ? "See Less" : "See More"}
                        </Button>
                    </div>
                )}
            </div>

            <ApplyEnrolBlock />
        </>
    );
}

export default SuccessStoriesPage;




{/* <div className='winner-gallery-area'>
    <h2>Co-Curricular Activies Winning</h2>
    <div className='inside-block'>
        <Container>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry columnsCount={3} gutter="10px">
                    {data.Academic_winning.slice(0, visibleImages).map((gallery, index) => (
                        <img
                            key={index}
                            src={gallery.image}
                            alt={gallery.title || "Gallery Image"}
                            style={{ width: "100%", display: "block" }}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    </div>
    <div className='text-center'>
        <Link to="about" className='btn-more'>See more</Link>
    </div>
</div>
<div className='winner-gallery-area'>
    <h2>Sports Winning</h2>
    <div className='inside-block'>
        <Container>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry columnsCount={3} gutter="10px">
                    {data.Academic_winning.slice(0, visibleImages).map((gallery, index) => (
                        <img
                            key={index}
                            src={gallery.image}
                            alt={gallery.title || "Gallery Image"}
                            style={{ width: "100%", display: "block" }}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    </div>
    <div className='text-center'>
        <Link to="about" className='btn-more'>See more</Link>
    </div>
</div> */}