import React from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import Accordion from 'react-bootstrap/Accordion';


function AboutTheSchoolPage() {
    const Sectiontitle = "Work Hard Dream Big";
    const subTitle = "ABOUT THE SCOOL";
    const BgImg = "/images/about-the-school-photo.jpg"
    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About the School</Breadcrumb.Item>
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
                <div className='about-photo-gallery'>
                    <Container>
                        <div className='inner-flex'>
                            <div className='left'>
                                <h2><span>About</span>Gokuldham High School<br />& Junior College</h2>
                                <div className='bottom'>
                                    <p>Gokuldham High School & Junior College was founded on July 2, 1983. Making a humble beginning in a rented premises with 3 students and 5 staff members, the school has now grown into a multi-storey structure with 3313 students and 200 staff members. It is designed to accommodate a volume of 3688 students.</p>
                                    <p>We are a Co-educational institution affiliated to the Council for the Indian School Certificate Examinations (CISCE) preparing students for the Indian Certificate of Secondary Education (ICSE - X) and for the Indian School Certificate Examination (ISC - XII). It was established in June, 2008 and is run and managed by Goenka and Associates Educational Trust. It follows ICSE curriculum.</p>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='photo-line'>
                                    <div className='scroll-up'>
                                        <div className='photo large'>
                                            <img src={process.env.PUBLIC_URL + "/images/mission-photo.jpg"} alt="logo" />
                                        </div>
                                        <div className='photo small'>
                                            <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="logo" />
                                        </div>
                                        <div className='photo large'>
                                            <img src={process.env.PUBLIC_URL + "/images/eligibility-criteria.jpg"} alt="logo" />
                                        </div>
                                        <div className='photo small'>
                                            <img src={process.env.PUBLIC_URL + "/images/Activity.jpg"} alt="logo" />
                                        </div>
                                    </div>
                                </div>
                                <div className='photo-line'>
                                    <div className='scroll-down'>
                                        <div className='photo small'>
                                            <img src={process.env.PUBLIC_URL + "/images/Infrastructure-photo.jpg"} alt="logo" />
                                        </div>
                                        <div className='photo large'>
                                            <img src={process.env.PUBLIC_URL + "/images/photo-3.jpg"} alt="logo" />
                                        </div>
                                        <div className='photo small'>
                                            <img src={process.env.PUBLIC_URL + "/images/research-centre.png"} alt="logo" />
                                        </div>
                                        <div className='photo large'>
                                            <img src={process.env.PUBLIC_URL + "/images/school-fees-photo.jpg"} alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            
            {/* School Timings */}
            <section>
                <div className='accordion-block-section'>
                    <Container>
                        <div class="inner-flex">
                            <div class="title-area">
                                <h2>School <span>Timings</span></h2>
                            </div>
                            <div class="content-part">
                                <h3>The school works in two shifts :</h3>
                                <div className='time'>
                                    <strong>Secondary Section</strong> 6.50 am. to 1.00 pm.<br />
                                    <strong>Primary Section</strong> 1.15 pm. To 6.20 pm
                                </div>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Primary Section</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The School provides bus services to the students of pre-primary, primary and secondary sections under the aegis of GAET.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Visiting Hours</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The School provides bus services to the students of pre-primary, primary and secondary sections under the aegis of GAET.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Secondary Section</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The School provides bus services to the students of pre-primary, primary and secondary sections under the aegis of GAET.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Junior College Section</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The School provides bus services to the students of pre-primary, primary and secondary sections under the aegis of GAET.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Principal Visiting Hours</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The School provides bus services to the students of pre-primary, primary and secondary sections under the aegis of GAET.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section>
                <div className='school-song' style={{ background: `url(/images/mission-photo.jpg) no-repeat fixed top` }}>
                    <div className='white-fade'></div>
                    <Container>
                        <div class="inner-flex">
                            <div class="title-area">
                                <h2>School <span>Song</span></h2>
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
                                        <Link to=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7965 14.768V18.6256C20.7965 19.1371 20.5933 19.6277 20.2316 19.9894C19.8699 20.3511 19.3793 20.5543 18.8677 20.5543H5.36628C4.85474 20.5543 4.36414 20.3511 4.00243 19.9894C3.64071 19.6277 3.4375 19.1371 3.4375 18.6256V14.768M7.29506 9.94605L12.117 14.768M12.117 14.768L16.939 9.94605M12.117 14.768V3.19531" stroke="#4B3768" stroke-width="1.33531" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section>
                <div className='accordion-block-section'>
                    <Container>
                        <div class="inner-flex">
                            <div class="title-area">
                                <h2>School <span>Uniform</span></h2>
                            </div>
                            <div class="content-part">

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Girls Uniform</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The School provides bus services to the students of pre-primary, primary and secondary sections under the aegis of GAET.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Boys Uniform</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The School provides bus services to the students of pre-primary, primary and secondary sections under the aegis of GAET.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Physical Education Uniform for Girls and Boys</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The School provides bus services to the students of pre-primary, primary and secondary sections under the aegis of GAET.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section>
                <div className='accordion-block-section'>
                    <Container>
                        <div class="inner-flex">
                            <div class="title-area">
                                <h2>List of <span>Holidays</span></h2>
                            </div>
                            <div class="content-part">
                                <Link to="" className='btn-read'>View</Link>
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

