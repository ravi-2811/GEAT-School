import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import Accordion from 'react-bootstrap/Accordion';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import SchoolGallery from './SchoolGallery';



function AboutTheSchoolPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.aboutschool);
    const { data: settingsData } = useApi(endpoints.settings);



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
                    <Breadcrumb.Item href="/">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item active>About the School</Breadcrumb.Item>
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

            {/* School Gallery */}
            {/* <section>
                <div className='about-photo-gallery curriculum-areas'>
                    <Container>
                        <div className='inner-flex'>

                            <div className='left'>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={350}>
                                    <h2><span>About</span>Gokuldham High School<br />& Junior College</h2>
                                </ScrollAnimation>
                                <div className='bottom'>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={350}>
                                        <p>Gokuldham High School & Junior College was founded on July 2, 1983. Making a humble beginning in a rented premises with 3 students and 5 staff members, the school has now grown into a multi-storey structure with 3313 students and 200 staff members. It is designed to accommodate a volume of 3688 students.</p>
                                        <p>We are a Co-educational institution affiliated to the Council for the Indian School Certificate Examinations (CISCE) preparing students for the Indian Certificate of Secondary Education (ICSE - X) and for the Indian School Certificate Examination (ISC - XII). It was established in June, 2008 and is run and managed by Goenka and Associates Educational Trust. It follows ICSE curriculum.</p>
                                    </ScrollAnimation>

                                </div>
                            </div>



                            <div className="right">
            <div className="photo-line">
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
            <div className="photo-line">
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
            </section> */}
            <SchoolGallery />

            {/* School Timings */}
            <section>
                <div className='accordion-block-section'>
                    <Container>
                        <div class="inner-flex">
                            <div class="title-area">
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={350}>
                                    <h2><span dangerouslySetInnerHTML={{ __html: data.school_timing[0].title }} /></h2>
                                </ScrollAnimation>


                            </div>
                            <div class="content-part">
                                <div className='time'>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                        <span dangerouslySetInnerHTML={{ __html: data.school_timing[0].description }} />
                                    </ScrollAnimation>

                                </div>
                                <Accordion defaultActiveKey={null}>
                                    {data.school_timing?.slice(1).reverse().map((timing, index) => (

                                        <Accordion.Item eventKey={index.toString()} key={`accordion-item-${index}`}>
                                            <Accordion.Header>{timing.title}</Accordion.Header>
                                            <Accordion.Body>
                                                <div className='inner-block'>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: timing.description
                                                        }}
                                                    />
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}

                                </Accordion>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            {/* School Song */}
            <section>
                <div className='school-song' style={{ background: `url(/images/mission-photo.jpg) no-repeat fixed top` }}>
                    <div className='white-fade'></div>
                    <Container>
                        <div class="inner-flex">
                            <div class="title-area">
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>

                                    <h2>School <span>Song</span></h2>
                                </ScrollAnimation>
                            </div>
                            <div class="content-part">
                                <div className='song-box'>
                                    <div className='gray-box'>
                                        <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray1.png"} alt="ray" /></div>
                                        <h3>Paradigm Shift</h3>
                                        <div className='play-area'>
                                            <div className='logo'>
                                                <img src={process.env.PUBLIC_URL + "/images/gaet-gokuldham-dark.png"} alt="logo" />
                                            </div>
                                            <Link to="" className='play'><img src={process.env.PUBLIC_URL + "/images/play.png"} alt="logo" /></Link>
                                        </div>
                                    </div>
                                    <div className='disc'><img src={process.env.PUBLIC_URL + "/images/disc.png"} alt="logo" /></div>
                                    <div className='download'>
                                        <span>Download Song</span>
                                        <Link to={settingsData?.settings?.school_song || "#"} download="school_song.mp3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7965 14.768V18.6256C20.7965 19.1371 20.5933 19.6277 20.2316 19.9894C19.8699 20.3511 19.3793 20.5543 18.8677 20.5543H5.36628C4.85474 20.5543 4.36414 20.3511 4.00243 19.9894C3.64071 19.6277 3.4375 19.1371 3.4375 18.6256V14.768M7.29506 9.94605L12.117 14.768M12.117 14.768L16.939 9.94605M12.117 14.768V3.19531" stroke="#4B3768" stroke-width="1.33531" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            {/* School Uniform */}
            <section>
                <div className='accordion-block-section'>
                    <Container>
                        <div class="inner-flex">
                            <div class="title-area">
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <h2><span dangerouslySetInnerHTML={{ __html: data.school_uniform[0].title }} /></h2>
                                </ScrollAnimation>
                            </div>
                            <div class="content-part">

                                <Accordion defaultActiveKey={null}>
                                    {data.school_uniform?.slice(1).reverse().map((uniform, index) => (

                                        <Accordion.Item eventKey={index.toString()} key={`accordion-item-${index}`}>
                                            <Accordion.Header>{uniform.title}</Accordion.Header>
                                            <Accordion.Body>
                                                <div className='inner-block'>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: uniform.description
                                                        }}
                                                    />
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}

                                </Accordion>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            {/* List of Holidays */}
            <section>
                <div className='accordion-block-section'>
                    <Container>
                        <div class="inner-flex">
                            <div class="title-area">
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <h2>List of <span>Holidays</span></h2>
                                </ScrollAnimation>
                            </div>
                            <div class="content-part">
                                <Link target='_blank' to={settingsData?.settings?.school_holiday_pdf || "#"} className='btn-read'>View</Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <ApplyEnrolBlock />
        </>
    );
}
export default AboutTheSchoolPage;

