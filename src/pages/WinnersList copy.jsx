import React from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';


function WinnersListPage() {
    const Sectiontitle = "Who you are tomorrow begins with what you do today.";
    const subTitle = "Winners List";
    const BgImg = "/images/winners-list-photo.jpg"
    const images = [
        "/images/academic-photo.jpg",
        "/images/admission-photo.jpg",
        "/images/event-photo.jpg",
        "/images/gokuldham.png",
        "/images/Infrastructure-photo.jpg",
        "/images/photo-2.png",
        
    ]
    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/achievements">Achievements</Breadcrumb.Item>
                    <Breadcrumb.Item active>Winners List</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section>
                <div className='inner-top-content-block'>
                    <Container>
                        <p>"Success is the sum of small efforts, repeated day in and day out."</p>
                    </Container>
                </div>
            </section>
            <div className='winner-gallery-area'>
                <h2>Academic Winning</h2>
                <div className='inside-block'>
                    <Container>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                            <Masonry columnsCount={3} gutter="10px">
                            {images.map((image, i) => (
                                <img
                                key={i}
                                src={image}
                                alt=""
                                style={{width: "100%", display: "block"}}
                                />
                            ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Container>
                </div>
                <div className='text-center'>
                    <Link to="about" className='btn-more'>See more</Link>
                </div>
            </div>
            <div className='winner-gallery-area'>
                <h2>Co-Curricular Activies Winning</h2>
                <div className='inside-block'>
                    <Container>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                            <Masonry columnsCount={3} gutter="10px">
                            {images.map((image, i) => (
                                <img
                                key={i}
                                src={image}
                                alt=""
                                style={{width: "100%", display: "block"}}
                                />
                            ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Container>
                </div>
                <div className='text-center'>
                    <Link to="about" className='btn-more'>See more</Link>
                </div>
            </div>
            <div className='winner-gallery-area'>
                <h2>Sports Winning</h2>
                <div className='inside-block'>
                    <Container>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                            <Masonry columnsCount={3} gutter="10px">
                            {images.map((image, i) => (
                                <img
                                key={i}
                                src={image}
                                alt=""
                                style={{width: "100%", display: "block"}}
                                />
                            ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Container>
                </div>
                <div className='text-center'>
                    <Link to="about" className='btn-more'>See more</Link>
                </div>
            </div>
            <ApplyEnrolBlock />
        </>
    );
}
export default WinnersListPage;

