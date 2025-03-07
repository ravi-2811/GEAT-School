import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './VisionMission.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';

function VisionMissionPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.visionMission);

    useEffect(() => {
        if (!data) return; // Don't run if data isn't loaded yet

        const listItems = document.querySelectorAll('.rightlist li');

        const handleItemClick = (event) => {
            listItems.forEach((li) => li.classList.remove('open'));
            event.currentTarget.classList.add('open');
        };

        listItems.forEach((item) => item.addEventListener('click', handleItemClick));

        // Cleanup to avoid memory leaks
        return () => {
            listItems.forEach((item) => item.removeEventListener('click', handleItemClick));
        };
    }, [data]); // Only re-run when data changes


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
                    <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item active>Vision & Mission</Breadcrumb.Item>
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

            <section>
                <div className='vision-tab-area'>
                    <Container>
                        <div className='inner-block'>
                            <div className='left-part'>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                    <div className='logo'>
                                        <img src={process.env.PUBLIC_URL + "/images/gaet-vertical.png"} alt="logo" />
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <ul className="rightlist">
                                {data.vision_mission?.slice().reverse().map((vision, index) => (
                                    <li key={index} className={index === 0 ? 'open' : ''}>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={1000}>
                                            <h3 dangerouslySetInnerHTML={{ __html: vision.title }} />
                                            <div className="bottom-part">
                                                <div className="left-block">
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: vision.description,
                                                        }}
                                                    />
                                                </div>
                                                <div className="photo-block">
                                                    <div className="top-left"></div>
                                                    <div className="top-right"></div>
                                                    <img
                                                        src={vision.image}
                                                        alt="vision-mission"
                                                    />
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </div>
            </section>

            <ApplyEnrolBlock />
        </>
    );
}

export default VisionMissionPage;
