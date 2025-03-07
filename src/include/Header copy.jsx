import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import './header.css';

function Header(props) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);

    const location = useLocation();

    // Determine if 'white-header' class should be applied
    const isWhiteHeader = location.pathname === "/vision-mission" || location.pathname === "/about" || location.pathname === "/infrastructure" || location.pathname === "/management" || location.pathname === "/curriculum" || location.pathname === "/school-fees" || location.pathname === "/promotion-rules" || location.pathname === "/student-care" || location.pathname === "/admission" || location.pathname === "/events" || location.pathname === "/announcements" || location.pathname === "/photogallery" || location.pathname === "/publications" || location.pathname === "/achievements" || location.pathname === "/winners-list" || location.pathname === "/winners-list" || location.pathname === "/results" || location.pathname === "/success-stories" || location.pathname === "/facilities";
    //const isFixedHeader = location.pathname === "/about" || location.pathname === "/vision-mission" || location.pathname === "/about-our-founders" || location.pathname === "/governing-body" || location.pathname === "/journey-of-gaet" || location.pathname === "/the-gaet-advantage" || location.pathname === "/photo-gallery" || location.pathname === "/admission" || location.pathname === "/contact-us";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 2100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSubmenuHover = (imageSrc) => {
        setActiveImage(imageSrc);
    };

    return (
        <>
            <header className={`${isScrolled ? 'main-header scrolled' : 'main-header'} ${isWhiteHeader ? 'white-header' : ''} `}>
                <Container>
                    <div className='logo'>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
                        </Link>
                    </div>
                    <div className='white-logo'>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "/images/white-logo.png"} alt="logo" />
                        </Link>
                    </div>
                    <div className='rightside'>
                        <Link to="/contact-us" className='btn-contact'>Contact Us</Link>
                        <Link to="/admission" className='btn-admission'>ADMISSIONS</Link>
                        <button className={isMenuOpen ? 'btn-menu active' : 'btn-menu'} onClick={toggleMenu}>
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </Container>
            </header>
            <div className={isMenuOpen ? 'full-menu-area open' : 'full-menu-area'}>
                <div className='topbar'>
                    <Container>
                        <div className='logo'>
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + "/images/white-logo.png"} alt="logo" />
                            </Link>
                        </div>
                        <div className='rightside'>
                            <Link to="/contact-us" onClick={toggleMenu} className='btn-contact'>Contact Us</Link>
                            <Link to="/admission" onClick={toggleMenu} className='btn-admission'>ADMISSIONS</Link>
                            <button className='btn-close' onClick={toggleMenu}></button>
                        </div>
                    </Container>
                </div>
                <div className='inner-flex'>
                    <div className='leftpart'>
                        <div className='menu-area'>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="AboutTab">
                                
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="AboutTab">About Us</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="AcademicTab">Academic</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="AdmissionTab">Admission</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="EventsTab">Events</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="AchievementsTab">Achievements</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="FacilitiesTab">Facilities</Nav.Link>
                                    </Nav.Item>
                                </Nav>


                                <Tab.Content>
                                    <Tab.Pane eventKey="AboutTab">
                                        <ul className='submenu'>
                                            <li><Link to="/about" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/about-top.jpg")} onClick={toggleMenu}>Overview</Link></li>
                                            <li><Link to="/about-the-school" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/school-photo-6.png")} onClick={toggleMenu}>About the school</Link></li>
                                            <li><Link to="/vision-mission" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/mission-photo.jpg")} onClick={toggleMenu}>Mission & Vision</Link></li>
                                            <li><Link to="/infrastructure" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/Infrastructure-photo.png")} onClick={toggleMenu}>Infrastructure</Link></li>
                                            <li><Link to="/management" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/Management-photo.jpg")} onClick={toggleMenu}>Management</Link></li>
                                            <li><Link to="/teachers-list" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/teachers-list-photo.jpg")} onClick={toggleMenu}>Teachers List</Link></li>

                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="AcademicTab">
                                        <ul className='submenu'>
                                            <li><Link to="/academic" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Overview</Link></li>
                                            <li><Link to="/curriculum" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Curriculum</Link></li>
                                            <li><Link to="/school-fees" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>School Fees</Link></li>
                                            <li><Link to="/promotion-rules" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Promotion Rules</Link></li>
                                            <li><Link to="/student-care" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Student Care</Link></li>
                                            <li><Link to="/academic#exam-time-table" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Exam Time Table</Link></li>
                                            <li><Link to="/academic#project-schedule" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Project Schedule</Link></li>
                                            <li><Link to="/academic#open-house-time" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Open House Time</Link></li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="AdmissionTab">
                                        <ul className='submenu'>
                                            <li><Link to="/admission" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Overview</Link></li>
                                            <li><Link to="/admission#registration-form" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Registration Form</Link></li>
                                            <li><Link to="/admission#admission-process" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Admission Process</Link></li>
                                            <li><Link to="/admission#eligibility-criteria" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Eligibility Criteria</Link></li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="EventsTab">
                                        <ul className='submenu'>
                                            <li><Link to="/events" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Overview</Link></li>
                                            <li><Link to="/" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Current Events</Link></li>
                                            <li><Link to="/announcements" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Announcements</Link></li>
                                            <li><Link to="/photogallery" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Photogallery</Link></li>
                                            <li><Link to="/publications" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Publications</Link></li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="AchievementsTab">
                                        <ul className='submenu'>
                                            <li><Link to="/achievements" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Overview</Link></li>
                                            <li><Link to="/winners-list" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Winners list</Link></li>
                                            <li><Link to="/success-stories" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Success Stories</Link></li>
                                            <li><Link to="/results" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Results</Link></li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="FacilitiesTab">
                                        <ul className='submenu'>
                                            <li><Link to="/facilities" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Overview</Link></li>
                                            <li><Link to="/facilities#school-transport" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>School Transport</Link></li>
                                            <li><Link to="/facilities#hobby-classes" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Hobby Classes</Link></li>
                                            <li><Link to="/facilities#sports" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Sports</Link></li>
                                            <li><Link to="/facilities#activity" onMouseEnter={() => handleSubmenuHover(process.env.PUBLIC_URL + "/images/slider-1.jpg")} onClick={toggleMenu}>Activity</Link></li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>


                            </Tab.Container>
                        </div>
                        <div className='bottompart'>
                            <ul className='link'>
                                <li><Link to="/admission" onClick={toggleMenu}>Admissions</Link></li>
                                <li><Link to="/careers" onClick={toggleMenu}>Careers</Link></li>
                                <li><Link to="/associations" onClick={toggleMenu}>Associations</Link></li>
                                <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
                            </ul>
                            <ul className='social'>
                                <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/facebook.svg"} alt="Facebook" /></Link></li>
                                <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/insta.svg"} alt="Instagram" /></Link></li>
                                <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/linkdin.svg"} alt="LinkedIn" /></Link></li>
                                <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/mail.svg"} alt="Mail" /></Link></li>
                                <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/xicon.svg"} alt="X" /></Link></li>
                                <li><Link to="/"><img src={process.env.PUBLIC_URL + "/images/youtube.svg"} alt="YouTube" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='rightpart'>
                        <img src={activeImage || process.env.PUBLIC_URL + "/images/school-1.jpg"} className='photo1' alt="Menu Illustration" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;