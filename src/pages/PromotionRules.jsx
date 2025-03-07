import React from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import { Container } from 'react-bootstrap';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';


function PromotionRulesPage() {
    const Sectiontitle = "Where Learning Begins";
    const subTitle = "Promotion Rules";
    const BgImg = "/images/promotion-rules-photo.jpg"
    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/academic">Academic</Breadcrumb.Item>
                    <Breadcrumb.Item active>Promotion Rules</Breadcrumb.Item>
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
                <div className='curriculum-area' style={{background: `url(/images/promotion-rules-photo-2.jpg) no-repeat fixed top` }}>
                    <div className='inner-flex'>
                        <div className='left'>
                            <h2>Promotion Rules</h2>
                        </div>
                        <div className='right'>
                            <div className='block'>
                                <p>The school holds two terminal examinations from Grade I to Grade XII.</p>
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
export default PromotionRulesPage;

