import React from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";

function PhotoGalleryPage() {
    const Sectiontitle = "Everyone Is An Achiever";
    const subTitle = "Photogallery";
    const BgImg = "/images/event-photo.jpg"
    const images = [
        "/images/academic-photo.jpg",
        "/images/admission-photo.jpg",
        "/images/event-photo.jpg",
        "/images/gokuldham.png",
        "/images/Infrastructure-photo.jpg",
        "/images/photo-2.png",
        "/images/photo-3.jpg",
        "/images/photo-4.jpg",
        "/images/photo-5.jpg",
        "/images/research-centre.png",
        "/images/research-centre.png",
        "/images/research-centre.png",
        "/images/school-photo.jpg",
        "/images/student-care-photo.png",
        "/images/vision-photo.jpg",
        "/images/academic-photo.jpg",
        "/images/admission-photo.jpg",
        "/images/event-photo.jpg",
        "/images/gokuldham.png",
        "/images/Infrastructure-photo.jpg",
        "/images/photo-4.jpg",
        "/images/photo-5.jpg",
        "/images/research-centre.png",
    ]
    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Events</Breadcrumb.Item>
                    <Breadcrumb.Item active>Photogallery</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section>
                <div className='inner-top-content-block'>
                    <Container>
                        <p>"Empowering and inspiring all students to excel as life long learners"</p>
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
            </section>

            <div className='photo-gallery-area'>
                <div className='inside-block'>
                    <Container>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                            <Masonry columnsCount={3} gutter="10px">
                                {images.map((image, i) => (
                                    <img
                                        key={i}
                                        src={image}
                                        alt=""
                                        style={{ width: "100%", display: "block" }}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Container>
                </div>
                <div className='text-center'>
                    <Button variant="more">See more</Button>
                </div>
            </div>
            <ApplyEnrolBlock />
        </>
    );
}
export default PhotoGalleryPage;

