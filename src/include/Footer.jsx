import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import ContactApi from './ContactApi';
import './footer.css';
import { endpoints } from '../services/api';

function Footer() {
    const { data, error } = useApi(endpoints.settings);

    const [box1Counter, setBox1Counter] = useState(0);
    const [box2Counter, setBox2Counter] = useState(0);
    const [box3Counter, setBox3Counter] = useState(0);
    const [box1Hover, setBox1Hover] = useState(false);
    const [box2Hover, setBox2Hover] = useState(false);
    const [box3Hover, setBox3Hover] = useState(false);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;

    const handleBox1Hover = () => {
        setBox1Hover(true);
        setBox1Counter(prev => prev + 1);
    };

    const handleBox1Leave = () => {
        setBox1Hover(false);
    };

    const handleBox2Hover = () => {
        setBox2Hover(true);
        setBox2Counter(prev => prev + 1);
    };

    const handleBox2Leave = () => {
        setBox2Hover(false);
    };
    const handleBox3Hover = () => {
        setBox3Hover(true);
        setBox3Counter(prev => prev + 1);
    };

    const handleBox3Leave = () => {
        setBox3Hover(false);
    };

    return (
        <footer>
            <div className='footer-area'>
                <Container>
                    <div className='inner-flex'>
                        <div className='leftside'>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                <div className='logo'>
                                    <Link to="/">
                                        <img src={data.settings.footer_logo} alt="GAET Logo" />
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className='rightside'>
                            <div className='toppart'>
                                <div className='inner-part'>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                        <h3>Contact</h3>
                                        <p>
                                            <Link to="tel:{contact_no}">
                                                {data.settings.contact_no || "022 40278222"}
                                            </Link>
                                        </p>
                                    </ScrollAnimation>
                                </div>
                                <div className='inner-part'>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1000}>
                                        <h3>Office</h3>
                                        <p>{data.settings.address}</p>
                                    </ScrollAnimation>
                                </div>
                                <div className='last-part'>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1500}>
                                        <ul className='link'>
                                            <li><Link to="/admission">Admissions</Link></li>
                                            <li><Link to="/faq">FAQ</Link></li>
                                            <li><Link to="/careers">Careers</Link></li>
                                            <li><Link to="/termsandpolicies">Terms & Policies</Link></li>
                                        </ul>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div className='bottompart'>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                    <h3>Connect with us</h3>
                                    <ContactApi />
                                </ScrollAnimation>
                                <div className='copyright'>
                                    <p>©{new Date().getFullYear()} Goenka & Associates Educational Trust</p>
                                    <div className='d-flex'>
                                        <Link to="/privacy">Privacy</Link>
                                        <Link to="/accessibility">Accessibility</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div
                    className="box1"
                    onMouseEnter={handleBox1Hover}
                    onMouseLeave={handleBox1Leave}
                >
                    link1
                </div>
                <div
                    className="box2"
                    onMouseEnter={handleBox2Hover}
                    onMouseLeave={handleBox2Leave}
                >
                    link2
                </div>
                <div
                    className="box3"
                    onMouseEnter={handleBox3Hover}
                    onMouseLeave={handleBox3Leave}
                >
                    link3
                </div>
                <img src={data.settings.bg_images[6].bg_image} className='bg-img' alt="Footer background" />


                {box1Hover && (
                    <>
                        <img
                            src={data.settings.bg_images[0].bg_image}
                            className="image1"
                            style={{ display: box1Counter % 2 === 1 ? 'block' : 'none' }}
                            alt="Background pattern 1"
                        />
                        <img
                            src={data.settings.bg_images[1].bg_image}
                            className="image2"
                            style={{ display: box1Counter % 2 === 0 ? 'block' : 'none' }}
                            alt="Background pattern 2"
                        />
                    </>
                )}
                {box2Hover && (
                    <>
                        <img
                            src={data.settings.bg_images[2].bg_image}
                            className="image3"
                            style={{ display: box2Counter % 2 === 1 ? 'block' : 'none' }}
                            alt="Background pattern 3"
                        />
                        <img
                            src={data.settings.bg_images[3].bg_image}
                            className="image4"
                            style={{ display: box2Counter % 2 === 0 ? 'block' : 'none' }}
                            alt="Background pattern 4"
                        />
                    </>
                )}
                {box3Hover && (
                    <>
                        <img
                            src={data.settings.bg_images[4].bg_image}
                            className="image3"
                            style={{ display: box3Counter % 2 === 1 ? 'block' : 'none' }}
                            alt="Background pattern 5"
                        />
                        <img
                            src={data.settings.bg_images[5].bg_image}
                            className="image4"
                            style={{ display: box3Counter % 2 === 0 ? 'block' : 'none' }}
                            alt="Background pattern 6"
                        />
                    </>
                )}


                <div className='rays'>
                    <img src="/images/footer-rays.svg" alt="Decorative rays" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;