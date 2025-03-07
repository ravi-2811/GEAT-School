import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';

function StudentCarePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.studentcare);


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
                    <Breadcrumb.Item href="/academic">Academic</Breadcrumb.Item>
                    <Breadcrumb.Item active>Student Care</Breadcrumb.Item>
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
                <div className='promotion-rules-area'>
                    <Container>
                        <div className='inner-flex'>
                            <h2><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>School</ScrollAnimation> <span><ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>Guidelines</ScrollAnimation></span></h2>
                            <ul className='rule-list'>
                                {data.promotion_rules.slice().reverse().map((item, index) => (
                                    <li key={index}>
                                        <div className='rule-block'>
                                            <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray1.png"} alt="ray" /></div>
                                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                                <h3>{item.title}</h3>
                                            </ScrollAnimation>
                                            <div className='photo-block'>
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className='download'>
                                                <div className='logo'>
                                                    <img src={process.env.PUBLIC_URL + "/images/gaet-gokuldham.png"} alt="" />
                                                </div>
                                                {/* <Link to={item.download_media}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7965 14.768V18.6256C20.7965 19.1371 20.5933 19.6277 20.2316 19.9894C19.8699 20.3511 19.3793 20.5543 18.8677 20.5543H5.36628C4.85474 20.5543 4.36414 20.3511 4.00243 19.9894C3.64071 19.6277 3.4375 19.1371 3.4375 18.6256V14.768M7.29506 9.94605L12.117 14.768M12.117 14.768L16.939 9.94605M12.117 14.768V3.19531" stroke="white" stroke-width="1.33531" stroke-linecap="round" stroke-linejoin="round" /></svg></Link> */}
                                                <Link target='_blank' to='https://gaet.trialview.in/uploads/school_gallery_image/1_1739864511.pdf'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7965 14.768V18.6256C20.7965 19.1371 20.5933 19.6277 20.2316 19.9894C19.8699 20.3511 19.3793 20.5543 18.8677 20.5543H5.36628C4.85474 20.5543 4.36414 20.3511 4.00243 19.9894C3.64071 19.6277 3.4375 19.1371 3.4375 18.6256V14.768M7.29506 9.94605L12.117 14.768M12.117 14.768L16.939 9.94605M12.117 14.768V3.19531" stroke="white" stroke-width="1.33531" stroke-linecap="round" stroke-linejoin="round" /></svg></Link>
                                            </div>
                                        </div>
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
export default StudentCarePage;

