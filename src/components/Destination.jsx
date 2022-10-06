import React from "react";
import styled from "styled-components";
import cuba from "../assets/cuba.png";
import paris from "../assets/paris.png";
import japan from "../assets/japan.png";
import Button from "./Button";
export default function Destination() {
  const data = [
    {
      name: "Cuba City",
      image: cuba,
    },
    {
      name: "Paris",
      image: paris,
    },
    {
      name: "Japan",
      image: japan,
    },
  ];
  return (
    <div>
      <Section>
        <div className="info">
          <h2>
            Top <span>Destinations</span> In the world
          </h2>
          <p>
            It is a long established fact that reader will be distracted by the
            readable contact of a page when looking at it's layout from it.{" "}
          </p>
          <Button text="Discover More" />
        </div>
        <div className="destinations">
          {data.map(({ name, image }) => {
            return (
              <div className="destination" key={name}>
                <div className="image">
                  <img src={image} alt="Destination" />
                </div>
                <div className="name">
                  <h3>{name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
const Section = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 2rem;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    h2 {
      font-size: 3rem;
      line-height: 3rem;
      span {
        color: var(--primary-color);
      }
    }
    p {
      color: var(--secondary-text);
    }
  }
  .destinations {
    flex: 2;
    display: flex;
    gap: 2rem;
    .destination {
      position: relative;
      img {
        height: 20rem;
      }
      .name {
        position: absolute;
        bottom: 0.2rem;
        height: 99%;
        width: 100%;
        background: linear-gradient(
          to bottom,
          #ffffff14,
          #000000ae
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: flex;
        flex-direction: column-reverse;
        transition: var(--default-transition);
        &:hover {
          background-color: #0000006f;
          box-shadow: rgba(100, 100, 111, 0.044) 0px 7px 29px 0px;
        }
        h3 {
          margin-left: 1rem;
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 2rem;
    .destinations {
      flex-direction: column;
      justify-content: center;

      .destination {
        img {
          width: 100%;
          height: 100%;
        }
        .name {
          bottom: 0.2rem;
          height: 99%;
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 2rem;
    .destinations {
      /* flex-direction: column; */
      justify-content: center;

      .destination {
        img {
          width: 100%;
          height: 100%;
        }
        .name {
          bottom: 0.2rem;
          height: 99.8%;
          width: 100%;
        }
      }
    }
  }
`;
