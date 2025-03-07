import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import Accordion from 'react-bootstrap/Accordion';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { useLocation } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';



function FacilituesPage() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.schoolfacilitieslist);


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
                    <Breadcrumb.Item href="/facilities">Facilities</Breadcrumb.Item>
                    <Breadcrumb.Item active>Overview</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='faq-page'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="4" id={data.facilities[0].slug}>
                        <Accordion.Header>{data.facilities[0].title}</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block-photo'>
                                <div className='left'>
                                    <p><span dangerouslySetInnerHTML={{ __html: data.facilities[0].description }} /></p>
                                </div>
                                <div className='photo'>
                                    <img src={data.facilities[0].image || process.env.PUBLIC_URL + "/images/Activity.jpg"} alt="logo" />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" id={data.facilities[1].slug}>
                        <Accordion.Header>{data.facilities[1].title}</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block-photo'>
                                <div className='left'>
                                    <p><span dangerouslySetInnerHTML={{ __html: data.facilities[1].description }} /></p>
                                </div>
                                <div className='photo'>
                                    <img src={data.facilities[1].image || process.env.PUBLIC_URL + "/images/sports.jpg"} alt="logo" />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" id={data.facilities[2].slug}>
                        <Accordion.Header>{data.facilities[2].title}</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block-photo'>
                                <div className='left'>
                                    <p><span dangerouslySetInnerHTML={{ __html: data.facilities[2].description }} /></p>
                                </div>
                                <div className='photo'>
                                    <img src={data.facilities[2].image || process.env.PUBLIC_URL + "/images/hobby-classes.jpg"} alt="logo" />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" id={data.facilities[3].slug}>
                        <Accordion.Header>{data.facilities[3].title}</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block'>
                                <p>The School provides bus services to the students of pre-primary, primary and secondary sections under the aegis of GAET.<br />
                                    The buses pick up children coming from as far as 9 km away.<br />
                                    The buses are equipped with grills on the windows, walkie talkies for route coordination and first aid kits.<br />
                                    Each bus is manned by a male and female attendant.<br />
                                    All buses are also provided with seat belts and fire safety equipment.<br />
                                    The bus staff has been trained by the Red Cross to use these facilities to tackle emergencies.</p>
                            </div>
                            <div className='inner-block-photo'>
                                <div className='left'>
                                    <span dangerouslySetInnerHTML={{ __html: data.facilities[3].description }} />
                                </div>
                                <div className='photo'>
                                    <img src={data.facilities[3].image || process.env.PUBLIC_URL + "/images/school-transport.jpg"} alt="logo" />
                                </div>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>

                    {data.facilities.slice(4).map((facilities, index) => (
                        <Accordion.Item eventKey={String(index + 5)} id={facilities.slug}>
                            <Accordion.Header>{facilities.title}</Accordion.Header>
                            <Accordion.Body>
                                <div className='inner-block-photo'>
                                    <div className='left'>
                                        <p><span dangerouslySetInnerHTML={{ __html: facilities.description }} /></p>
                                    </div>
                                    <div className='photo'>
                                        <img src={facilities.image || process.env.PUBLIC_URL + "/images/Activity.jpg"} alt="logo" />
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>

            <ApplyEnrolBlock />
        </>
    );
}
export default FacilituesPage;