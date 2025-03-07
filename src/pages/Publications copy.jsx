import React, { useEffect, useState } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { useApi } from '../hooks/useApi';
import ScrollAnimation from 'react-animate-on-scroll';
import { endpoints } from '../services/api';

function PublicationsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useApi(endpoints.schoolpublication);
    const [isExpanded, setIsExpanded] = useState(false);

    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;

    const publicationsToShow = isExpanded ? data.publication.slice().reverse() : data.publication.slice().reverse().slice(0, 5);

    return (
        <>
            <InsideTopBanner
                pageTitle={data.top_section.title}
                pageSubTitle={data.top_section.page_name}
                BackgrondBack={data.top_section.back_image}
            />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/events">Events</Breadcrumb.Item>
                    <Breadcrumb.Item active>Publications</Breadcrumb.Item>
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
                <div className='publication-list'>
                    <ul className='list'>
                        {publicationsToShow.map((publication, index) => (
                            <li key={index}>
                                <div className='number'>{String(index + 1).padStart(2, '0')}</div>
                                <div className='name'>{publication.title}</div>
                                <div className='detail'>
                                    <span dangerouslySetInnerHTML={{ __html: publication.publication }} />
                                </div>
                                <Link to={publication.link} className='btn-more'>LEARN MORE</Link>
                            </li>
                        ))}
                    </ul>
                    {data.publication.length > 5 && (
                        <div className='photo-gallery-area text-center'>
                            <Button variant="more" onClick={() => setIsExpanded(!isExpanded)}>
                                {isExpanded ? "See Less" : "See More"}
                            </Button>
                        </div>
                    )}

                </div>
            </section>
            <ApplyEnrolBlock />
        </>
    );
}
export default PublicationsPage;
