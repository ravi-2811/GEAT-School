import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';


function AdmissionPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const { data, error } = useApi(endpoints.schooladmission);



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
                    <Breadcrumb.Item href="/admission">Admission</Breadcrumb.Item>
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
                <div className='admission-page'>
                    <Container>
                        <div className='inner-list'>
                            {data.admission
                                .slice()
                                .reverse()
                                .map((admission, index) => (
                                    <div className='inner-flex' id={admission.slug} key={index}>
                                        <div className='content-block'>
                                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                                <h2>{admission.title}</h2>
                                            </ScrollAnimation>
                                            <div className='bottom'>
                                                {/* <p><span dangerouslySetInnerHTML={{ __html: admission.description || '', }} /></p> */}
                                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                                    <span dangerouslySetInnerHTML={{ __html: admission.description }} />
                                                </ScrollAnimation>
                                                <br />
                                                {admission.link && admission.link.trim() !== "" && (
                                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                                        <Link to={admission.link} className='btn-more'>CHECK HERE</Link>
                                                    </ScrollAnimation>
                                                )}
                                            </div>
                                        </div>
                                        <div className='photo-area'>
                                            <div className='img-block'>
                                                <img src={admission.image} alt={admission.slug} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                        </div>
                    </Container>
                </div>
            </section>
            <ApplyEnrolBlock />
        </>
    );
}
export default AdmissionPage;

