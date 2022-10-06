// import React, { useState } from "react";
// import styled from "styled-components";
// import hero from "../assets/hero.png";
// import Button from "./Button";

// export default function Home() {
//   const [value, setValue] = useState("₹5000 - ₹100000");
//   return (
//     <HeroSection>
//       <div className="background">
//         <img src={hero} alt="" />
//       </div>
//       <div className="content">
//         <div className="info">
//           <h1>It's Time To</h1>
//           <h1>Explore The World</h1>
//           <Button text={"Plan Your Trip"} />
//         </div>
//         <div className="planner">
//           <form>
//             <div className="row">
//               <label>Destinations</label>
//               <select>
//                 <option>Goa (India)</option>
//                 <option>Kolkata (India)</option>
//               </select>
//             </div>
//             <div className="row">
//               <label>Check In</label>
//               <input type="date" />
//             </div>
//             <div className="row">
//               <label>Range Start from</label>
//               <input
//                 type="text"
//                 readOnly
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//               />
//             </div>
//             <div className="row">
//               <Button text={"Discover More"} />
//             </div>
//           </form>
//         </div>
//       </div>
//     </HeroSection>
//   );
// }
// const HeroSection = styled.section`
//   margin-top: 2rem;
//   position: relative;
//   .background {
//     img {
//       height: 83vh;
//       width: 100%;
//     }
//   }
//   .content {
//     .info {
//       position: absolute;
//       top: 5rem;
//       margin-left: 8rem;
//       h1 {
//         font-size: 5rem;
//         margin-bottom: 2rem;
//       }
//     }
//     .planner {
//       position: absolute;
//       bottom: -2rem;
//       right: 0;
//       background-color: white;
//       padding: 2rem;
//       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//       form {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 3rem;
//         .row {
//           display: flex;
//           flex-direction: column;
//           text-align: start;
//           label {
//             font-size: 0.7rem;
//             color: var(--secondary-text);
//             padding-bottom: 0.5rem;
//           }
//           input,
//           select {
//             border: none;
//             width: 100%;
//             color: var(--primary-color);
//             background-color: white;
//             font-size: 1.1rem;
//             border-bottom: 1px solid #f5ebe9;
//             padding-bottom: 0.3rem;
//           }
//           input:focus {
//             outline: none;
//           }
//           input[type="date"]::-webkit-calendar-picker-indicator {
//             cursor: pointer;
//             filter: invert(50%) sepia(69%) saturate(2588%) hue-rotate(325deg)
//               brightness(105%) contrast(101%);
//           }
//         }
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     .background {
//       img {
//         height: 40vh;
//       }
//     }
//     .content {
//       .info {
//         margin-left: 2rem;
//         h1 {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//         }
//         .lanner {
//           position: initial;
//           margin: 2rem;
//           form {
//             flex-direction: column;
//             align-items: flex-start;
//           }
//         }
//       }
//     }
//   }
// `;
import React, { useState } from "react";
import styled from "styled-components";
import HeroImage from "../assets/hero.png";
import Button from "./Button";
export default function Home() {
  const [value, setValue] = useState("₹5000 - ₹100000");
  return (
    <Section>
      <div className="background">
        <img src={HeroImage} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>It's Time To</h1>
          <h1>Explore The World</h1>
          <Button text="Plan Your Trip" />
        </div>
        <div className="planner">
          <form>
            <div className="row">
              <label>Destinations</label>
              <select>
                <option>Goa (India)</option>
                <option>Kolkata (India)</option>
              </select>
            </div>
            <div className="row">
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className="row">
              <label>Price Range</label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="row">
              <Button text="Discover More" />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 2rem;
  position: relative;
  .background {
    img {
      height: 82vh;
      width: 100%;
    }
  }
  .content {
    .info {
      position: absolute;
      top: 5rem;
      margin-left: 8rem;
      h1 {
        font-size: 5rem;
        margin-bottom: 2rem;
      }
    }
    .planner {
      position: absolute;
      bottom: -2rem;
      right: 0;
      background-color: white;
      padding: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      form {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3rem;
        .row {
          display: flex;
          flex-direction: column;
          text-align: start;
          label {
            font-size: 0.7rem;
            color: var(--secondary-text);
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
              brightness(105%) contrast(101%);
          }
          input:focus {
            outline: none;
          }
          input,
          select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1.1rem;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 0.3rem;
          }
        }
      }
    }
  }
  /* @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 2rem;
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  } */
  @media only screen and (max-width: 1200px) {
    /*Tablets [601px -> 1200px]*/
    .background {
      img {
        height: 100vh;
      }
    }
    .content {
      .info {
        margin-left: 2rem;
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    /*Big smartphones [426px -> 600px]*/
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 2rem;
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    /*Small smartphones [325px -> 425px]*/
  }
`;
