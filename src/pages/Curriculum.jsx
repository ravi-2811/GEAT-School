import React from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';


function CurriculumPage() {
    const Sectiontitle = "The Future Begins Here!";
    const subTitle = "Curriculum";
    const BgImg = "/images/academic-photo.jpg"
    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/academic">Academic</Breadcrumb.Item>
                    <Breadcrumb.Item active>Curriculum</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section>
                <div className='inner-top-content-block'>
                    <Container>
                        <p>"Learning to do their best, work with others, and be safe fair and kind."</p>
                    </Container>
                </div>
            </section>
            <section>
                <div className='curriculum-area' style={{background: `url(/images/curriculum.jpg) no-repeat fixed top` }}>
                    <div className='inner-flex'>
                        <div className='left'>
                            <h2>Curriculum</h2>
                        </div>
                        <div className='right'>
                            <div className='block'>
                                <p>The special feature of the curriculum is that students can opt for subjects of their choice at Grade 9 level.</p>
                            </div>
                            <div className='block'>
                                <p>Besides this, in our institution, they learn the regional language upto Grade 8 as the third language and concentrate on two languages from Grade 9.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ApplyEnrolBlock />
        </>
    );
}
export default CurriculumPage;

