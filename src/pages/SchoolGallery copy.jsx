import React, { useEffect, useState, useRef } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Container } from 'react-bootstrap'
import LocomotiveScroll from 'locomotive-scroll'

const SchoolGallery = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const scrollRef = useRef(null);

    useEffect(() => {
        // Initialize Locomotive Scroll only for this section
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1, // Adjust speed
            lerp: 0.1, // Adjust smoothness
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            <section>
                <div className='about-photo-gallery curriculum-areas' data-scroll-section>
                    <Container>
                        <div className='inner-flex'>

                            {/* Left Content */}
                            <div className='left'>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={350}>
                                    <h2><span>About</span> Gokuldham High School<br />& Junior College</h2>
                                </ScrollAnimation>
                                <div className='bottom'>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={350}>
                                        <p>Gokuldham High School & Junior College was founded on July 2, 1983. Making a humble beginning in a rented premises with 3 students and 5 staff members, the school has now grown into a multi-storey structure with 3313 students and 200 staff members.</p>
                                        <p>We are a Co-educational institution affiliated to the Council for the Indian School Certificate Examinations (CISCE) preparing students for the Indian Certificate of Secondary Education (ICSE - X) and for the Indian School Certificate Examination (ISC - XII).</p>
                                    </ScrollAnimation>
                                </div>
                            </div>

                            {/* Right Image Section */}
                            <div className="right">
                                <div className="photo-line" data-scroll data-scroll-speed="1">
                                    <div className={!isMobile ? "scroll-up" : ""}>
                                        <div className="photo large">
                                            <img src={process.env.PUBLIC_URL + "/images/mission-photo.jpg"} alt="logo" />
                                        </div>
                                        <div className="photo small">
                                            <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="logo" />
                                        </div>
                                        <div className="photo large">
                                            <img src={process.env.PUBLIC_URL + "/images/eligibility-criteria.jpg"} alt="logo" />
                                        </div>
                                        <div className="photo small">
                                            <img src={process.env.PUBLIC_URL + "/images/Activity.jpg"} alt="logo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="photo-line" data-scroll data-scroll-speed="-1">
                                    <div className={!isMobile ? "scroll-down" : ""}>
                                        <div className="photo small">
                                            <img src={process.env.PUBLIC_URL + "/images/Infrastructure-photo.jpg"} alt="logo" />
                                        </div>
                                        <div className="photo large">
                                            <img src={process.env.PUBLIC_URL + "/images/photo-3.jpg"} alt="logo" />
                                        </div>
                                        <div className="photo small">
                                            <img src={process.env.PUBLIC_URL + "/images/research-centre.png"} alt="logo" />
                                        </div>
                                        <div className="photo large">
                                            <img src={process.env.PUBLIC_URL + "/images/school-fees-photo.jpg"} alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Container>
                </div>
            </section>
        </div>
    )
}

export default SchoolGallery;
