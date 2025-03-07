
import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import './Faq.css';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='top-title-bar'>
                <div className="content-part">
                    <h1>Welcome to the Career's Portal<br />of Gokuldham High School & <br /> Junior College</h1>
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
                                        <h2>Current Openings</h2>
                                        <ul>
                                            <li>Applications are invited for the following clear vacancies for the academic year 2021-2022</li>
                                        </ul>
                                        <br />
                                        <h2>Secondary Section</h2>
                                        <ul>
                                            <li>No Current Openings</li>
                                        </ul>
                                        <br />
                                        <h2>Primary Section</h2>
                                        <ul>
                                            <li>No Current Openings</li>
                                            <li>Interested candidates can drop their resume at ghs@gaet.edu.in</li>
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
export default Careers;