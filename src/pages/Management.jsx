import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import GoverningBodyPage from './governing-body';

function ManagementPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.management);


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
                    <Breadcrumb.Item href="/">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item active>MANAGEMENT</Breadcrumb.Item>
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
                <div className='latest-update-area'>
                    <Container>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                            {/* <div className='sub'>MANAGEMENT</div> */}
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                            <h2>Our Management Team</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={600}>
                            <Link to="https://gaet.trialview.in/uploads/school_academic_event_image/3_452_1739864568.pdf" className='btn-more'>Meet our team </Link>
                        </ScrollAnimation>
                    </Container>
                    <div className='image-area'>
                        <ul className='photo-list'>
                            <li className='outer-small'>
                                <div className='photo'>
                                    <img src={data.management_team[4].image} alt="logo" />
                                </div>
                            </li>
                            <li className='outer-small-2'>
                                <div className='photo'>
                                    <img src={data.management_team[3].image} alt="logo" />
                                </div>
                                <div className='photo small'>
                                    <img src={data.management_team[2].image} alt="logo" />
                                </div>
                            </li>
                            <li className='center-image'>
                                <div className='photo'>
                                    <img src={data.management_team[4].image} alt="logo" />
                                </div>
                            </li>
                            <li className='outer-small-4'>
                                <div className='photo small'>
                                    <img src={data.management_team[1].image} alt="logo" />
                                </div>
                                <div className='photo'>
                                    <img src={data.management_team[0].image} alt="logo" />
                                </div>
                            </li>
                            <li className='outer-small'>
                                <div className='photo'>
                                    <img src={data.management_team[4].image} alt="logo" />
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            <GoverningBodyPage/>

            <ApplyEnrolBlock />
        </>
    );
}
export default ManagementPage;