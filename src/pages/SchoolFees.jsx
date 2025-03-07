import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import Accordion from 'react-bootstrap/Accordion';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';

function SchoolFeesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.studentfees);
    const { data: settingsData } = useApi(endpoints.settings);

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
                    <Breadcrumb.Item active>School Fees</Breadcrumb.Item>
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
                <div className='fees-content-block'>
                    <Container>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                        <div className="inner-flex">
                            <div className="title-area">
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <h2>School <span> Fees</span></h2>
                                </ScrollAnimation>
                            </div>
                            <div className="content-part">
                                <Accordion defaultActiveKey={null}>
                                    {data.school_fees?.slice().reverse().map((fees, index) => (
                                        <Accordion.Item eventKey={index.toString()} key={`accordion-item-${index}`}>
                                            <Accordion.Header>{fees.title}</Accordion.Header>
                                            <Accordion.Body>
                                                <div className='inner-block'>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: fees.description
                                                        }}
                                                    />
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>

                                <div className='simpleText'>
                                    To view the Fee Payment Schedule for Academic Year 2023-2024 :
                                </div>

                                <a target='_blank' rel='noopener noreferrer' href={settingsData?.settings?.school_fee_pdf || "#"} className='common-btn filled-btn'>Download PDF</a>
                            </div>
                        </div>
                        </ScrollAnimation>
                        
                    </Container>
                </div>
            </section>

            <section>
                <div className='fees-content-block'>
                    <Container>
                        <div className="inner-flex">
                            <div className="title-area">
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <h2>School <span> Bus Fees</span></h2>
                                </ScrollAnimation>
                            </div>
                            <div className="content-part">
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <div className='simpleText'>
                                        Distance Wise School Bus Fees W.e.f June 2023-May 2024
                                    </div>
                                    <a target='_blank' rel='noopener noreferrer' href={settingsData?.settings?.distance_wise_school_bus_fee_pdf || "#"} className='common-btn filled-btn'>Download PDF</a>
                                </ScrollAnimation>


                                <div className='gap50'></div>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <div className='simpleText'>
                                        To view the Route Wise School Bus Fees for Academic Year 2023-2024
                                    </div>

                                    <a target='_blank' rel='noopener noreferrer' href={settingsData?.settings?.route_wise_school_bus_fee_pdf || "#"} className='common-btn un-filled-btn'>Download PDF</a>

                                </ScrollAnimation>

                                <div className='gap50'></div>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <div className='simpleText'>
                                        To view the Rules regarding payment of School Bus Fees
                                    </div>

                                    <a target='_blank' rel='noopener noreferrer' href={settingsData?.settings?.rules_regarding_payment_school_fee_pdf || "#"} className='common-btn un-filled-btn'>Download PDF</a>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <ApplyEnrolBlock />
        </>
    );
}
export default SchoolFeesPage;