import React, { useEffect } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import Accordion from 'react-bootstrap/Accordion';
import './Main.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import { useLocation } from 'react-router-dom';


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

    const Sectiontitle = "A high achieving multicultural school for learning";
    const subTitle = "Facilities";
    const BgImg = "/images/facilities-top-photo.jpg"

    return (
        <>
            <InsideTopBanner pageTitle={Sectiontitle} pageSubTitle={subTitle} BackgrondBack={BgImg} />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Facilities</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='faq-page'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1" id="school-transport">
                        <Accordion.Header>School Transport</Accordion.Header>
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
                                    <h2>Salient Features</h2>
                                    <ul>
                                        <li>Well maintained - regularly serviced</li>
                                        <li>Congenial Staff</li>
                                        <li>Walkie-Talkie</li>
                                        <li>Comfortable seats</li>
                                        <li>Grills on the windows</li>
                                        <li>Seat belt for safety</li>
                                        <li>Bag carrier</li>
                                        <li>First Aid Kit</li>
                                        <li>Fire Extinguisher</li>
                                        <li>Regular Emergency and First Aid Training</li>
                                    </ul>
                                    <h2>Fleet Managementt</h2>
                                    <ul>
                                        <li>Supervisor</li>
                                        <li>Mechanic</li>
                                        <li>Route Co-ordinator</li>
                                        <li>Driver</li>
                                        <li>Male Attendant</li>
                                        <li>Female Attendant</li>
                                        <li>Electrician</li>
                                    </ul>
                                </div>
                                <div className='photo'>
                                    <img src={process.env.PUBLIC_URL + "/images/school-transport.jpg"} alt="logo" />
                                </div>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" id="hobby-classes">
                        <Accordion.Header>Hobby Classes</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block-photo'>
                                <div className='left'>
                                    <p>One of the best ways of dealing with stress is having a hobby because they are expressions of personal accomplishments and a means of self discovery. Hobbies allow us the ability to unleash our creativity, boost our self esteem, engage in an activity we are passionate about and give us a sense of pleasure and accomplishment.<br />The hobby activities offered at all schools at GAET include drawing, sketching, calligraphy, bharatnatyam and kathak dance, vocal music both Hindustani and Carnatic Classical, Keyboards, Tabla, English speaking, Drama, Vedic Maths and UCMAS.</p>
                                </div>
                                <div className='photo'>
                                    <img src={process.env.PUBLIC_URL + "/images/hobby-classes.jpg"} alt="logo" />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" id="sports">
                        <Accordion.Header>Value of Sports at Gaet</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block-photo'>
                                <div className='left'>
                                    <p>At GAET, sports, both team sports as well as individual sports are given a place of prominence in conjunction with other co-curricular activities.</p>
                                    <p>Coaching facilities are available in all our schools for the following activities. Athletics, Cricket, Chess, Football, Handball, Kho - Kho, Table Tennis, Taekwondo, Gymnastics, Malkhamb, Judo and Roller Skating.</p>
                                    <h2>Swimming Pool - Aquatics</h2>
                                    <p>In the year 1990, Goenka & Associates Educational Trust (G.A.E.T.) set up the 25M Swimming Pool at the Gokuldham High School Play Ground for the benefit of children of all Schools running under the ageis of G.A.E.T. The Swimming Pool is run under the Management of the Goenka & Associates Educational Trust and is provided with modern amenities for Swimming for beginners as well as for swimmers to attain proficiency in competitive swimming.<br />This facility can be availed by outsiders as well as adults.<br />Many students have won in State as well as National Level Competitions.</p>
                                    <h2>Gymnasium</h2>
                                    <p>GAET has a state of the art well equipped gymnasium.<br />The gymnasium membership is open to all our staff and students as well as parents and residents of the locality.</p>
                                </div>
                                <div className='photo'>
                                    <img src={process.env.PUBLIC_URL + "/images/sports.jpg"} alt="logo" />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" id="activity">
                        <Accordion.Header>Activity</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block-photo'>
                                <div className='left'>
                                    <p>Keeping in mind environmental degradation and the need to conserve water the school has a huge sewage treatment plant and a water-harvesting system. It is a good teaching aid too for the students. Rarely does one find such a facility in a school. Students are taken for educational trips, picnics, camps and long tours.</p>

                                    <h2>Student Activities</h2>
                                    <p>Is formed by democratically held elections through secret ballot. The council consists of Head Boy, Head Girl, Captains- Red, Blue, Green, Yellow, Sports Captain, Cultural Activities Captain and prefects.</p>

                                    <h2>Activities in The School</h2>
                                    <p>Zero hour - Inter-house competitions like: Debate, elocution, quiz, collage making, etc. Sports | Annual day | Hindi diwas | Children's day | Projects |Joy of giving Science week | Mathematics week | Life skills | Personal safety education Sex education</p>

                                    <h2>Inter-School Competition</h2>
                                    <p>Geeta chanting<br />Competitions organised by Ramkrishna Muth<br />All for kids<br />Interschool debate and elocution competition</p>
                                    <h2>Inter-School (Literary) Competition</h2>
                                    <ul>
                                        <li>AISM (GIZMO Geeks, debates, elocution)</li>
                                        <li>YMCA</li>
                                        <li>Bournvita</li>
                                        <li>MR Pai elocution competition</li>
                                        <li>Story telling competition</li>
                                    </ul>
                                    <h2>Art & Craft Competitions</h2>
                                    <p>Free Inter-school drawing competition | Horlicks Whiz kids | Bharat Vikas Parishad | Times NIEHT Scholarship | EXPISCOR | VISTAURA | Lions club competition | PEAS | Navneet drawing competition</p>
                                    <h2>Sports Competitions</h2>
                                    <p>Inter-school competitions | MSSA | Poisar Gymkhana | Harris Shield (Cricket) | Kichadia (Cricket) | Mini Olympics (Olympia foundation) Chess Tournaments | Gymnastics | Taekwondo | Malkhamb | Football | Handball | Throwball | Basketball | YMCA | Judo Karate | Swimming | Skating | Atheletics | Badminton | Tennis - Table tennis / Lawn tennis</p>
                                </div>
                                <div className='photo'>
                                    <img src={process.env.PUBLIC_URL + "/images/Activity.jpg"} alt="logo" />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <ApplyEnrolBlock />
        </>
    );
}
export default FacilituesPage;

