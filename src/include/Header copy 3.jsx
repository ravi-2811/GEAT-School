import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';

import './header.css';
import ContactApi from './ContactApi';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const [activeTab, setActiveTab] = useState("");
    const [visibleSubmenu, setVisibleSubmenu] = useState(null);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

    const location = useLocation();
    const { data, error } = useApi(endpoints.menu);
    const { data: settingsData } = useApi(endpoints.settings);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 2100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (data && data.menu_list.length > 0) {
            setActiveTab(data.menu_list[0].title);
            setActiveImage(process.env.PUBLIC_URL + data.menu_list[0].image);
            setVisibleSubmenu(data.menu_list[0].title);
        }
    }, [data]);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;

    const isWhiteHeader = [
        "/vision-mission", "/infrastructure", "/management",
        "/curriculum", "/school-fees", "/promotion-rules", "/student-care",
        "/admission", "/events", "/announcements", "/photogallery",
        "/publications", "/achievements", "/winners-list", "/results",
        "/success-stories", "/facilities", "/faq", "/careers", "/termsandpolicies",
    ].includes(location.pathname);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSubmenuChange = (imageSrc, menuTitle) => {
        setActiveImage(imageSrc);
        setActiveTab(menuTitle);

        if (window.innerWidth <= 768) {
            setActiveMobileSubmenu(prev => (prev === menuTitle ? null : menuTitle));
        } else {
            setVisibleSubmenu(menuTitle);
        }
    };
    const handleScrollToBottom = () => {
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }, 500); 
    };


    return (
        <>
            <header className={`${isScrolled ? 'main-header scrolled' : 'main-header'} ${isWhiteHeader ? 'white-header' : ''}`}>
                <Container>
                    <div className='logo'>
                        <Link to="/">
                            {settingsData?.settings?.header_logo ? (
                                <img src={settingsData.settings.header_logo} alt="logo" />
                            ) : (
                                <p>Loading Logo...</p>
                            )}
                        </Link>
                    </div>
                    <div className='white-logo'>
                        <Link to="/">
                            {settingsData?.settings?.sidebar_logo ? (
                                <img src={settingsData.settings.sidebar_logo} alt="logo" />
                            ) : (
                                <p>Loading Logo...</p>
                            )}
                        </Link>
                    </div>
                    <div className='rightside'>
                        {/* <Link to="/contact-us" className='btn-contact'>Contact Us</Link> */}
                        <Link onClick={handleScrollToBottom} className='btn-contact'>
                            Contact Us
                        </Link>

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
                                {settingsData?.settings?.sidebar_logo ? (
                                    <img src={settingsData.settings.sidebar_logo} alt="logo" />
                                ) : (
                                    <p>Loading Logo...</p>
                                )}
                            </Link>
                        </div>
                        <div className='rightside'>
                        <Link onClick={handleScrollToBottom} className='btn-contact'>
                            Contact Us
                        </Link>
                            <Link to="/admission" onClick={toggleMenu} className='btn-admission'>ADMISSIONS</Link>
                            <button className='btn-close' onClick={toggleMenu}></button>
                        </div>
                    </Container>
                </div>

                <div className='inner-flex'>
                    <div className='leftpart'>
                        <div className='menu-area'>
                            <Tab.Container activeKey={activeTab} defaultActiveKey={activeTab}>
                                <Nav variant="pills" className="flex-column">
                                    {data.menu_list.map((menu, index) => (
                                        <Nav.Item key={`${menu.id}-${index}`}>
                                            <Nav.Link
                                                eventKey={menu.title}
                                                onClick={() => handleSubmenuChange(process.env.PUBLIC_URL + menu.image, menu.title)}
                                                onMouseEnter={() => {
                                                    if (window.innerWidth > 768) {
                                                        handleSubmenuChange(process.env.PUBLIC_URL + menu.image, menu.title);
                                                    }
                                                }}
                                            >
                                                {menu.title}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>

                                <Tab.Content>
                                    {data.menu_list.map((menu, index) => (
                                        <Tab.Pane
                                            key={`${menu.id}-${index}`}
                                            eventKey={menu.title}
                                            className={(visibleSubmenu === menu.title || activeMobileSubmenu === menu.title) ? "submenu-visible" : ""}
                                        >
                                            <ul className="submenu">
                                                {menu.menu_item.map((submenu, subIndex) => (
                                                    <li key={`${submenu.id}-${subIndex}`}>
                                                        <Link to={submenu.menu_link} onClick={toggleMenu}>
                                                            {submenu.menu_name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Tab.Container>
                        </div>

                        <div className='bottompart'>
                            <ul className='link'>
                                <li><Link to="/admission" onClick={toggleMenu}>Admissions</Link></li>
                                <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
                                <li><Link to="/careers" onClick={toggleMenu}>Careers</Link></li>
                                <li><Link to="/termsandpolicies" onClick={toggleMenu}>Terms & Policies</Link></li>
                            </ul>
                            <ContactApi />
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
