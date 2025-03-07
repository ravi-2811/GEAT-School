import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import ScrollAnimation from 'react-animate-on-scroll';


function AchievementsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.schoolachievement);


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
                    <Breadcrumb.Item href="/achievements">Achievements</Breadcrumb.Item>
                    <Breadcrumb.Item active>Overview</Breadcrumb.Item>
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
                <div className='three-block-area'>
                    <ul className='list'>
                        {data.section.slice().reverse().map((section, index) => (
                            <li key={index}>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <div className="inner-flex">
                                        <div className='photo-block'>
                                            <img src={section.image} alt="logo" />
                                        </div>
                                        <h3><span dangerouslySetInnerHTML={{ __html: section.title || '', }} /></h3>
                                        <p><span dangerouslySetInnerHTML={{ __html: section.sub_title || '', }} /></p>
                                        <Link to={section.link} className='btn-more'>Know More</Link>
                                    </div>
                                </ScrollAnimation>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <ApplyEnrolBlock />
        </>
    );
}
export default AchievementsPage;

