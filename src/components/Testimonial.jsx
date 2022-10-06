import React from "react";
import styled from "styled-components";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import avatar from "../assets/avatar.png";
export default function Testimonial() {
  return (
    <Section>
      <div className="title">
        <h1>What our Happy Customers Say About Us</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial-image-one">
          <img src={testimonial1} alt="testimonial1" />
        </div>
        <div className="testimonial">
          <div className="title">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <h3>Anirban Majumdar</h3>
              <span>Full Stack Developer</span>
            </div>
          </div>
          <p className="description">
            Jetrips Hotel is an excellent choice for anybody for considering
            hosting their events there. Top level facilities and excellent staff
            make for a briallant environment within which to operate. The hotel
            is meticulous in its planning.
          </p>
        </div>
        <div className="testimonial-image-two">
          <img src={testimonial2} alt="testimonial2" />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 30%;
    }
  }
  .testimonials {
    display: flex;
    gap: 4rem;
    .testimonial {
      margin-top: 4rem;
      padding: 4rem 3rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-top: 0.5rem solid var(--primary-color);
      .title {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        .image {
          img {
            height: 3rem;
          }
        }
        .info {
          span {
            color: var(--primary-color);
          }
        }
      }
      .description {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }
`;
