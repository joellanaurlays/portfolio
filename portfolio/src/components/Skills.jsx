import { Col, Container, Row } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  console.log("Swiper loaded");

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
                <h2>Skills</h2>

                <p>
                    As an Application Development student, I focus on building modern web and mobile applications.
                    I enjoy solving problems, learning new technologies, and creating user-friendly digital solutions
                    that combine performance and clean design.
                </p>

              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  464: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="skill-slider"
              >
                <SwiperSlide>
                  <div className="item">
                    <img src={meter1} alt="skill" />
                    <h5>Web Development</h5>
                    <p>
                        Creating responsive and interactive websites using React, Vite, and Bootstrap.
                        I focus on building clean, efficient, and user-friendly interfaces that work across all devices.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    <img src={meter2} alt="skill" />
                    <h5>Mobile Development</h5>
                    <p>
                      Developing cross-platform mobile applications with a focus on usability,
                      performance, and smooth user experience.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    <img src={meter3} alt="skill" />
                    <h5>Full-Stack Development</h5>
                    <p>
                      Working with both frontend and backend technologies to build complete web applications,
                      including APIs and database integration.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  );
};