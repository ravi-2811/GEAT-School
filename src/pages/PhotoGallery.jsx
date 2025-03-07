import React, { useEffect, useState } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import PublicationsPage from './Publications';

function PhotoGalleryPage() {
    const [visibleImages, setVisibleImages] = useState(10);
    const [isExpanded, setIsExpanded] = useState(false);
    const { data, error } = useApi(endpoints.schoolphotogallery);

    // Function to lock scroll position
    const lockScroll = () => {
        return window.scrollY || document.documentElement.scrollTop;
    };

    const restoreScroll = (position) => {
        window.scrollTo({ top: position, behavior: "instant" });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;

    const toggleImages = () => {
        const currentScroll = lockScroll(); // Get current scroll position

        if (isExpanded) {
            setVisibleImages(10);

            setTimeout(() => {
                const seeMoreBtn = document.querySelector(".see-more-btn");
                if (seeMoreBtn) {
                    seeMoreBtn.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 300);
        } else {
            setVisibleImages(data.gallery.length);
            setTimeout(() => {
                restoreScroll(currentScroll); // Restore scroll position
            }, 50);
        }

        setIsExpanded(!isExpanded);
    };


    return (
        <div>
            <InsideTopBanner
                pageTitle={data.top_section.title}
                pageSubTitle={data.top_section.page_name}
                BackgrondBack={data.top_section.back_image}
            />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Events</Breadcrumb.Item>
                    <Breadcrumb.Item active>Photogallery</Breadcrumb.Item>
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
            {/* <section>
                <div className='about-school-block'>
                    <Container>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{ delay: 6000, disableOnInteraction: false }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {data.grade.slice().reverse().map((grade, index) => (
                                <SwiperSlide key={index}>
                                    <div className='inner-flex'>
                                        <div className='content'>
                                            <div className='top'>
                                                    <h2>{grade.main_title}</h2>
                                                <h3>
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: grade.title || '',
                                                            }}
                                                        />
                                                </h3>
                                            </div>
                                            <div className='bottom full'>
                                                <p>
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: grade.description || '',
                                                            }}
                                                        />
                                                </p>
                                            </div>
                                        </div>
                                        <div className='about-photo'>
                                            <img src={grade.image} alt="logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Container>
                </div>
            </section> */}

            <section>
                <div className='announcement-area' style={{ paddingTop: '0' }}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                        <h2>Gallery</h2>
                    </ScrollAnimation>
                </div>
            </section>

            <div className='photo-gallery-area'>
                <div className='inside-block'>
                    <Container>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                            <Masonry columnsCount={3} gutter="10px">
                                {data.gallery.slice(0, visibleImages).map((gallery, index) => (
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
                    <Button variant="more" onClick={toggleImages}>
                        {isExpanded ? "See Less" : "See More"}
                    </Button>
                </div>
            </div>

            <section>
                <div className='announcement-area' style={{ paddingTop: '0' }}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                        <h2>Publications</h2>
                    </ScrollAnimation>
                </div>
            </section>
            <PublicationsPage />
            <ApplyEnrolBlock />
        </div>
    );
}

export default PhotoGalleryPage;
