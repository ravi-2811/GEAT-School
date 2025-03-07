
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import './Faq.css';
function FaqPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='top-title-bar'>
                <h1>Frequently Asked<br />Questions</h1>
                <div className='rays'><img src={process.env.PUBLIC_URL + "/images/footer-rays.svg"} alt="ray" /></div>
            </div>

            <div className='faq-page'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>School Bus FAQ’s</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block'>
                                <p><strong>If the parent has paid the first installment bus fee in the month of May for the next academic year (before the school reopened) and applied for a school leaving certificate in the month of May,</strong></p>
                                <p>Enrollment Fee : Non Refundable<br />Bus Fees : To be Refunded</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>If the parent has paid the first installment bus fee in the month of May for the next academic year (before the school reopened), applied for school leaving certificate in the month of June and the child has not availed the bus service,</strong></p>
                                <p>Enrollment Fee : Non Refundable<br/>Bus Fees : One month is notice fee to be deducted.BaIance to be refunded.</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>If a parent has applied for a school leaving certificate in the middle Of the term / applied for withdrawal Of bus service.</strong></p>
                                <p>Enrollment Fee : Non Refundable<br />Bus Fees : Balance amount to be refunded</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>If a parent has shifted the residence close to the school in the middle of the term and applied for withdrawal of bus service,</strong></p>
                                <p>Enrollment Fee : Non Refundable<br />Bus Fees : If intimated the school with one month's notice in writing. balance amount to be refunded. If the withdrawal is with immediate effect a month's fee to be deducted.</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>If there is a Change in bus route in the middle Of the term ( higher rate to lower rate/ lower rate to higher rate),</strong></p>
                                <p>Enrollment Fee : Non Refundable<br />Bus Fees : TO be adjusted in the second instalment / difference in the amount is charged or refunded.</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>General FAQ’s</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block'>
                                <p><strong>How do I apply for Online Admission?</strong></p>
                                <p>To apply for Online Admissions, kindly visit the Admission Page and proceed to apply.</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>How do I apply for a job or how do I know whether there are job vacancies?</strong></p>
                                <p>You can visit the respective school website where you will find the job vacancies in the careers portal.</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>Whom shall I contact for school related queries?</strong></p>
                                <p>The school wise contacts are given below :</p>
                                <ul>
                                    <li>Gokuldham High School & Junior College<Link to="">022 40278296</Link></li>
                                    <li>Yashodham High School & Junior College<Link to="">022 40278201</Link></li>
                                    <li>Vasant Vihar High School & Junior College<Link to="">022 40278300</Link></li>
                                    <li>Lakshdham High School<Link to="">022 40822444</Link></li>
                                    <li>Thane Police School<Link to="">022 25424621</Link></li>
                                    <li>GAET Counselling Center<Link to="">022 49706639</Link></li>
                                </ul>
                            </div>
                            <div className='inner-block'>
                                <p><strong>What is the eligibility criteria for admission?</strong></p>
                                <p>Log on to the respective school website and check for eligibility criteria under the admission page.</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>Do the schools provide transport facilities to students?</strong></p>
                                <p>Yes. the schools prcwide excellent transport facilities to its students.</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>Which curriculum is followed in GAET schools?</strong></p>
                                <p>Vasant Vihar High School - ICSE (A.Y 2021-22 for Grades 1-9)<br />Lakshdham High School - ICSE<br />High School & Junior<br />Yashodham High School & Junior College - State Board<br />Thane Police School - State Board</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>Are Junior Colleges available in GAET schools?</strong></p>
                                <p>Yes, Gokuldham High School & Junior College - ISC<br />Vasant Vihar High School & Junior College - HSC</p>
                            </div>
                            <div className='inner-block'>
                                <p><strong>What precautionary measures are you following during the global pandemic?</strong></p>
                                <p>All SOP guidelines issued by the Government are being strictly followed in our institutions.</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <ApplyEnrolBlock />

        </>
    );
}
export default FaqPage;