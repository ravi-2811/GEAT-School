import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';


function AdmissionPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const { data, error } = useApi(endpoints.schooladmission);



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
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Admission</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section>
                <div className='inner-top-content-block'>
                    <Container>
                        <p>"Be educated, be a good achiever. Let's change the world!"</p>
                    </Container>
                </div>
            </section>

            <section>
                <div className='admission-page'>
                    <Container>
                        <div className='inner-list'>
                            <div className='inner-flex' id='registration-form'>
                                <div className='content-block'>
                                    <h2>Registration Form</h2>
                                    <div className='bottom'>
                                        <h3>ADMISSION<br />SCHEDULE 2023-24</h3>
                                        <p>Registration process will be updated soon</p>
                                    </div>
                                </div>
                                <div className='photo-area'>
                                    <div className='img-block'>
                                        <img src={process.env.PUBLIC_URL + "/images/registration-form.jpg"} alt="alumni" />
                                    </div>
                                </div>
                            </div>
                            <div className='inner-flex' id='admission-process'>
                                <div className='content-block'>
                                    <h2>Admission Process</h2>
                                    <div className='bottom'>
                                        <h3>The academic session of the school is from March to February.</h3>
                                        <p>The admission process begins in mid-March and the admission procedure, however, is done in the first week of May. This is to accommodate the students coming from the other boards too. Our admission process is one and the same for all students and is purely on merit basis against vacancies available for each grade.</p>
                                        <p>ADMISSION SCHEDULE 2021-22 ONLINE REGISTRATION FOR NEW ADMISSIONS. For the online Registration log in to - www.gaet.edu.in</p>
                                        <Link to="/" className='btn-more'>CHECK HERE</Link>
                                    </div>
                                </div>
                                <div className='photo-area'>
                                    <div className='img-block'>
                                        <img src={process.env.PUBLIC_URL + "/images/admission-process.jpg"} alt="alumni" />
                                    </div>
                                </div>
                            </div>
                            <div className='inner-flex' id='eligibility-criteria'>
                                <div className='content-block'>
                                    <h2>Eligibility Criteria</h2>
                                    <div className='bottom'>
                                        <h3>Admission Eligibility and Required Documents</h3>
                                        <p>A child seeking admission in Grade 1 must complete five years by 15th June of the year in which admission is sought. A child seeking admission in any other grade must have passed the previous grade from a recognized school and must produce the following supporting documents at the time of admission:</p>
                                        <p>1. Marksheet: original and an attested copy<br />2. Leaving Certificate/Transfer Certificate countersigned from the concerned Education Department.</p>
                                        <p>This is mandatory if the child is seeking admission from another state/board.</p>
                                    </div>
                                </div>
                                <div className='photo-area'>
                                    <div className='img-block'>
                                        <img src={process.env.PUBLIC_URL + "/images/eligibility-criteria.jpg"} alt="alumni" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            <ApplyEnrolBlock />
        </>
    );
}
export default AdmissionPage;

