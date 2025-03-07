import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from 'react-bootstrap';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SchoolGallery = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && leftColumnRef.current && rightColumnRef.current) {
      // Set initial positions for desktop
      gsap.set(rightColumnRef.current, { y: window.innerHeight - rightColumnRef.current.scrollHeight });
      gsap.set(".about-photo-gallery", { opacity: 1 });

      // Timeline animation for desktop
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: ".about-photo-gallery",
          start: "top top",
          end: "100%",
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      tl.to(leftColumnRef.current, { y: window.innerHeight - rightColumnRef.current.scrollHeight })
        .to(rightColumnRef.current, { y: 0 }, "<");

      return () => {
        // Clean up ScrollTrigger instances
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [isMobile]);

  return (
    <section>
      <div className="about-photo-gallery curriculum-areas">
        <Container>
          <div className="inner-flex">
            <div className="left">
              <div
                className="scroll-animation"
                data-animate="fadeInUp"
                data-once="true"
                data-delay={350}
              >
                <h2>
                  <span>About</span> Gokuldham High School
                  <br />
                  &amp; Junior College
                </h2>
              </div>
              <div className="bottom">
                <div
                  className="scroll-animation"
                  data-animate="fadeInUp"
                  data-once="true"
                  data-delay={350}
                >
                  <p>
                    Gokuldham High School &amp; Junior College was founded on July
                    2, 1983. Making a humble beginning in a rented premises with 3
                    students and 5 staff members, the school has now grown into a
                    multi-storey structure with 3313 students and 200 staff members.
                    It is designed to accommodate a volume of 3688 students.
                  </p>
                  <p>
                    We are a Co-educational institution affiliated to the Council
                    for the Indian School Certificate Examinations (CISCE) preparing
                    students for the Indian Certificate of Secondary Education (ICSE
                    - X) and for the Indian School Certificate Examination (ISC -
                    XII). It was established in June 2008 and is run and managed by
                    Goenka and Associates Educational Trust. It follows ICSE
                    curriculum.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-wrapper">
              {isMobile ? (
                // Mobile layout: All images are small
                <>
                  <div className="photo-line left-cl" ref={leftColumnRef}>
                    <div className="photo small">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Photo 5" />
                    </div>
                    <div className="photo small">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Photo 5" />
                    </div>
                    <div className="photo small">
                      <img
                        src={process.env.PUBLIC_URL + "/images/photo-5.jpg"}
                        alt="Eligibility Criteria"
                      />
                    </div>
                    <div className="photo small">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Activity" />
                    </div>
                  </div>
                  <div className="photo-line right-cl" ref={rightColumnRef}>
                    <div className="photo small">
                      <img
                        src={process.env.PUBLIC_URL + "/images/photo-5.jpg"}
                        alt="Infrastructure Photo"
                      />
                    </div>
                    <div className="photo small">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Photo 3" />
                    </div>
                    <div className="photo small">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Research Centre" />
                    </div>
                    <div className="photo small">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="School Fees Photo" />
                    </div>
                  </div>
                </>
              ) : (
                // Desktop layout: Original structure with large and small images
                <>
                  <div className="photo-line left-cl" ref={leftColumnRef}>
                    <div className="photo large">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Photo 5" />
                    </div>
                    <div className="photo small">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Photo 5" />
                    </div>
                    <div className="photo large">
                      <img
                        src={process.env.PUBLIC_URL + "/images/photo-5.jpg"}
                        alt="Eligibility Criteria"
                      />
                    </div>
                    <div className="photo small">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Activity" />
                    </div>
                  </div>
                  <div className="photo-line right-cl" ref={rightColumnRef}>
                    <div className="photo small">
                      <img
                        src={process.env.PUBLIC_URL + "/images/photo-5.jpg"}
                        alt="Infrastructure Photo"
                      />
                    </div>
                    <div className="photo large">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Photo 3" />
                    </div>
                    <div className="photo small">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="Research Centre" />
                    </div>
                    <div className="photo large">
                      <img src={process.env.PUBLIC_URL + "/images/photo-5.jpg"} alt="School Fees Photo" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default SchoolGallery;