import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import ScrollAnimation from 'react-animate-on-scroll';


function ResultsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.schoolresultlist);


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
                    {/* <Breadcrumb.Item href="/">Home</Breadcrumb.Item> */}
                    <Breadcrumb.Item href="/achievements">Achievements</Breadcrumb.Item>
                    <Breadcrumb.Item active>Results</Breadcrumb.Item>
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
            <div className='result-gallery-area'>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                    <h2>{data.result[0].title}</h2>
                </ScrollAnimation>
                <div className='inside-block'>
                    <Container>
                        <ul className='photo-gallery-list'>
                            {data.result[0].resultimages.map((results, index) => (
                                <li key={index}>
                                    <img src={results.image || process.env.PUBLIC_URL + "/images/result-1.png"} alt="logo" />
                                </li>
                            ))}
                        </ul>
                    </Container>
                </div>

            </div>

            <ApplyEnrolBlock />
        </>
    );
}
export default ResultsPage;
