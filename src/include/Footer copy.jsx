import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ScrollAnimation from 'react-animate-on-scroll';

import './footer.css';

function Footer() {
    const [box1Counter, setBox1Counter] = useState(0);
    const [box2Counter, setBox2Counter] = useState(0);
    const [box3Counter, setBox3Counter] = useState(0);
    const [box1Hover, setBox1Hover] = useState(false);
    const [box2Hover, setBox2Hover] = useState(false);
    const [box3Hover, setBox3Hover] = useState(false);

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
        <>
            <footer>
                <div className='footer-area'>
                    <Container>
                        <div className='inner-flex'>
                            <div className='leftside'>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                <div className='logo'><Link to="/"><img src={process.env.PUBLIC_URL + "/images/footer-logo.png"} alt="logo" /></Link></div>
                                </ScrollAnimation>
                            </div>
                            <div className='rightside'>
                                <div className='toppart'>
                                    <div className='inner-part'>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <h3>Contact</h3>
                                            <p><Link to="/">022 4027 8296</Link></p>
                                        </ScrollAnimation>
                                    </div>
                                    <div className='inner-part'>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1000}>
                                            <h3>Office</h3>
                                            <p>General Arun Kumar Vaidya Marg, Gokuldham Colony, Goregaon (E), Mumbai, Maharashtra 400063</p>
                                        </ScrollAnimation>
                                    </div>
                                    <div className='last-part'>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1500}>
                                            <ul className='link'>
                                                <li><Link to="/admission">Admissions</Link></li>
                                                <li><Link to="/">Careers</Link></li>
                                                <li><Link to="/associations">Associations</Link></li>
                                                <li><Link to="/faq">FAQ</Link></li>
                                            </ul>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                                <div className='bottompart'>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                        <h3>Connect with us</h3>
                                        <ul className='social'>
                                            <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/facebook.svg"} alt="logo" /></Link></li>
                                            <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/insta.svg"} alt="logo" /></Link></li>
                                            <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/linkdin.svg"} alt="logo" /></Link></li>
                                            <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/mail.svg"} alt="logo" /></Link></li>
                                            <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/xicon.svg"} alt="logo" /></Link></li>
                                            <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/youtube.svg"} alt="logo" /></Link></li>
                                        </ul>
                                    </ScrollAnimation>
                                        <div className='copyright'>
                                            <p>©2020 Goenka & Associates Educational Trust</p>
                                            <div className='d-flex'>
                                                <Link to="/">Privacy</Link>
                                                <Link to="/">Accessibility</Link>
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
                    <img src={process.env.PUBLIC_URL + "/images/footer-blank.jpg"} className='bg-img' alt="logo" />
                    {box1Hover && (
                        <>
                        <img
                            src={process.env.PUBLIC_URL + "/images/footer-1.jpg"}
                            className="image1"
                            style={{ display: box1Counter % 2 === 1 ? 'block' : 'none' }}
                            alt=""
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/footer-2.jpg"}
                            className="image2"
                            style={{ display: box1Counter % 2 === 0 ? 'block' : 'none' }}
                            alt=""
                        />
                        </>
                    )}

                    {box2Hover && (
                        <>
                        <img
                            src={process.env.PUBLIC_URL + "/images/footer-3.jpg"}
                            className="image3"
                            style={{ display: box2Counter % 2 === 1 ? 'block' : 'none' }}
                            alt=""
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/footer-4.jpg"}
                            className="image4"
                            style={{ display: box2Counter % 2 === 0 ? 'block' : 'none' }}
                            alt=""
                        />
                        </>
                    )}
                    {box3Hover && (
                        <>
                        <img
                            src={process.env.PUBLIC_URL + "/images/footer-5.jpg"}
                            className="image3"
                            style={{ display: box3Counter % 2 === 1 ? 'block' : 'none' }}
                            alt=""
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/footer-6.jpg"}
                            className="image4"
                            style={{ display: box3Counter % 2 === 0 ? 'block' : 'none' }}
                            alt=""
                        />
                        </>
                    )}
                    
                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/footer-rays.svg"} alt="ray" /></div>
                    
                </div>
            </footer>
        </>
    );
}
export default Footer;