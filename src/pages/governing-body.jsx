import React, { useState, useEffect } from 'react';
// import InsideTopBanner from '../include/InsideTopBanner';
// import InsideMobileBlock from '../include/MobileInsideTopBanner';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './GoverningBody.css';
import { Link } from 'react-router-dom';

function GoverningBodyPage() {
    // const Sectiontitle = "Not Just An Administration. We Are More Than That!";
    // const BreadcrumbTitle = "Governing Body";
    // const BgImg = "/images/vision-top.jpg";

    const [isAboutVisible, setAboutVisible] = useState(false);

    // Add or remove class on the body tag
    useEffect(() => {
        if (isAboutVisible) {
            document.body.classList.add('about-open');
        } else {
            document.body.classList.remove('about-open');
        }

        // Cleanup function to remove class when component unmounts
        return () => {
            document.body.classList.remove('about-open');
        };
    }, [isAboutVisible]);

    const handleMoreAboutClick = () => {
        setAboutVisible(true);
    };

    const handleCloseAboutClick = () => {
        setAboutVisible(false);
    };
    return (
        <>
            {/* <InsideTopBanner pageTitle={Sectiontitle} pageBreadcrumb={BreadcrumbTitle} BackgrondBack={BgImg} />
            <InsideMobileBlock pageTitle={Sectiontitle} pageBreadcrumb={BreadcrumbTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item active>Governing Body</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='inner-content-wapper'>
            <section>
                <div className='inner-top-content-block'>
                    <Container>
                            <p><strong>"Vision is the act of seeing what is invisible to others."</strong><br />- Late Shri K.M. Goenka</p>
                    </Container>
                </div>
            </section> */}

            {/* <section>
                <div className='chairperson-area'>
                    <Container>
                        <div className='inner-flex'>
                            <h2><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>Chairperson Of GAET</ScrollAnimation></h2>
                            <div className='rightside'>
                                <div className='photo-area'>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                        <img src={process.env.PUBLIC_URL + "/images/team-1.png"} alt="" />
                                        <div className='gray-bg'>
                                            <div className='rays'><img src={process.env.PUBLIC_URL + "/images/footer-rays.svg"} alt="ray" /></div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section> */}
            <br />

            <section>
                <div className='board-area'>
                    <Container>
                        <div className='inner-flex'>
                            <h2 style={{color: "#78519E"}}><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>Management Team</ScrollAnimation></h2>
                            <div className='rightside'>
                                <ul className='member-list-three'>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-1.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Vinod Krishnamurari Goenka</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-2.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mrs Usha Pran Raina</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-3.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Kannan Veerabhadran</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-4.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Ashish Girdharilal Vaid</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-1.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Vinod Krishnamurari Goenka</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-2.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mrs Usha Pran Raina</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-3.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Kannan Veerabhadran</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-4.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Ashish Girdharilal Vaid</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            <section>
                <div className='board-area'>
                    <Container>
                        <div className='inner-flex'>
                            <h2 style={{color: "#78519E"}}><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>Heads of The Department</ScrollAnimation></h2>
                            <div className='rightside'>
                                <ul className='member-list-three'>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-1.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Vinod Krishnamurari Goenka</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-2.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mrs Usha Pran Raina</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-3.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Kannan Veerabhadran</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-4.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Ashish Girdharilal Vaid</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-1.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Vinod Krishnamurari Goenka</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-2.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mrs Usha Pran Raina</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-3.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Kannan Veerabhadran</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-4.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Ashish Girdharilal Vaid</h3>
                                            <div className='more-about' style={{color:"#8d98a2"}}>Supervisor (Secondary)</div>
                                        </ScrollAnimation>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

             {/* <section>
                <div className='board-area'>
                    <Container>
                        <div className='inner-flex'>
                            <h2><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>Management Team Operating Schools And Junior College</ScrollAnimation></h2>
                            <div className='rightside'>
                                <ul className='member-list-four'>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={700}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-1.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mrs Jaimeera Sankar<strong>C.E.O </strong></h3>
                                            <div className='more-about'>About</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={900}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-2.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mrs Meera Kothari<strong>C.E.O (Counselling Centre)</strong></h3>
                                            <div className='more-about'>About</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1100}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-3.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mrs Nagrajan Usha <strong>DIRECTOR-EDU. CONSULTANT</strong></h3>
                                            <div className='more-about'>About</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1300}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-4.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mrs Nalini Iyer <strong>DIRECTOR-EDU. CONSULTANT</strong></h3>
                                            <div className='more-about'>About</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1500}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/Sunita.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mrs Nalini Iyer <strong>DIRECTOR-EDU. CONSULTANT</strong></h3>
                                            <div className='more-about'>About</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1700}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-5.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Mr Suvarna Harish Babu<strong>DIRECTOR-SPORTS</strong></h3>
                                            <div className='more-about'>About</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1900}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-6.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Col.(Retd.) Mr Ramdeo Singh<strong>GENERAL MANAGER - TRANSPORT</strong></h3>
                                            <div className='more-about'>About</div>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={2100}>
                                            <div className='photo-area'>
                                                <img src={process.env.PUBLIC_URL + "/images/team-4.png"} alt="" />
                                                <div className='gray-bg'>
                                                    <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                                </div>
                                            </div>
                                            <h3>Col.(Retd.) Mr Atul Dimri<strong>CHIEF TECHNOLOGY OFFICER</strong></h3>
                                            <div className='more-about'>About</div>
                                        </ScrollAnimation>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </section> */}

            <div className={`about-detail-area ${isAboutVisible ? "open" : ""}`}>
                <div className='inside-area'>
                    <div className='titlebar'>
                        <h4>BIOGRAPHY</h4>
                        <Link to="" className='close-about' onClick={handleCloseAboutClick}><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00855 1.3327L19.3867 19.7113M19.3867 1.33008L1.00854 19.7087" stroke="#09213A" /></svg></Link>
                    </div>
                    <div className='d-flex'>
                        <div className='leftside'>
                            <div className='name'>Mr Vinod Krishnamurari Goenka</div>
                            <div className='position'>Board Member</div>
                            <p>Mr Vinod Krishnamurari Goenka is the Chairperson of Goenka and Associates Educational Trust (GAET). It is not just an initiative for her but a cause, which she is extremely close to and passionate about.Her hard-work over the past 31 years has led the Trust to develop and operate 8 world-class academic institutions and allied services which take care of over 22,000 students and 1600 employees.</p>
                            <p>Mr Vinod Krishnamurari Goenka is also the Managing Director of the Dynamix Group. Under her leadership since 2005, the Group has delivered many of its landmark Real Estate projects.</p>
                            <p>She is also the Trustee of Goenka & Associates Medical & Research Centre, Goenka & Associates Social Welfare Trust.</p>
                            <p><strong>Interesting fact -</strong> He is a great runner!</p>
                        </div>
                        <div className='photo-area'>
                            <img src={process.env.PUBLIC_URL + "/images/vinod-photo.jpg"} alt="vinod" />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}
export default GoverningBodyPage;