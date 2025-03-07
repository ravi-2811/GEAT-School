import React, {useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';

import EventsGrades from './EventsGrades';

function EventsPage() {
    const Sectiontitle = "Everyone Is An Achiever";
    const subTitle = "Events";
    const BgImg = "/images/event-photo.jpg"

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
            const elements = [
                { id: "photo-block-1", offset: 350, reverse: false },
                { id: "photo-block-2", offset: -350, reverse: true },   
            ];
    
            elements.forEach(({ id, offset, reverse }) => {
                const element = document.getElementById(id);
                if (element) {
                    const directionMultiplier = reverse ? -1 : 1; 
                    element.style.transform = `translateY(${offset - scrollTop * 0.1 * directionMultiplier}px)`;
                }
            });
        };
    
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
     

    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/events">Events</Breadcrumb.Item>
                    <Breadcrumb.Item active>Overview</Breadcrumb.Item>
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
                <div className='announcement-area pd-0'>
                    <h2>Events & Notice Board</h2>
                    <EventsGrades/>
                </div>
            </section>

            <section>
                <div className='photo-gallery-event'>
                    <Container>
                        <div className='inner-flex'>
                            <div className='half-block first-block'>
                                <div className='img-block' id='photo-block-1'>
                                    <img src={process.env.PUBLIC_URL + "/images/event-1.jpg"} alt="" />
                                </div>
                                <div className='content'>
                                    <h3>Photo-gallery</h3>
                                    <Link to="/photogallery" className='btn-more'>LEARN MORE</Link>
                                </div>
                            </div>
                            <div className='half-block secondimg'>
                                <div className='img-block' id='photo-block-2'>
                                    <img src={process.env.PUBLIC_URL + "/images/event-2.jpg"} alt="" />
                                </div>
                                <div className='content'>
                                    <h3>Publications</h3>
                                    <Link to="/publications" className='btn-more'>LEARN MORE</Link>
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
export default EventsPage;

