import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import './Faq.css';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
function TermsandPolicies() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='top-title-bar'>
                <div className="content-part">
                    <h1>Terms & Policies</h1>
                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/footer-rays.svg"} alt="ray" /></div>
                </div>
            </div>

            <div className='faq-page'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">

                        <section>
                            <div className="inner-top-content-block" style={{ padding: "114px 0 100px 0" }}>

                                <Container>

                                </Container>
                            </div>
                        </section>
                        <Accordion.Body>
                            <div className='inner-block-photo'>

                                <div className='left'>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                        <h2>Terms & Policies</h2>
                                        <ul>
                                            <li>Applications are invited for the following clear vacancies for the academic year 2021-2022</li>
                                        </ul>
                                    </ScrollAnimation>
                                </div>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <ApplyEnrolBlock />

        </>
    );
}
export default TermsandPolicies;