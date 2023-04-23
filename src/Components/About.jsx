import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useEffect } from "react";
import styled from "styled-components";
import myImage from "../Resources/Images/me.png";
import backgroundImage from "../Resources/Images/background.webp";

import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <div id="about" className="about section">
      <Container>
        <div className="aboutBox">
          <div className="about_leftBox">
            <h1 id="user-detail-name">Hi, I'm Shekhar Suman.</h1>
            <Typical
              className="typical"
              loop={Infinity}
              steps={[
                "I’m a FullStack Web Developer",
                1000,
                "I Build Amazing Websites!",
                500,
              ]}
            />
            <p>
              I’m a FullStack web developer skilled in MERN stack .I love to
              learn new things and I am always open to learn new technologies.
            </p>
            <div id="resume">
              <a
                id="resume-link-2"
                href="https://drive.google.com/uc?export=download&id=1e9YYU1Gq6lMYG83eB70nCGR98newj81G"
              >
                <button id="resume-button-2" data-aos="fade-left">
                  Download Resume
                  <DownloadIcon />
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1e9YYU1Gq6lMYG83eB70nCGR98newj81G/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                <button data-aos="fade-left">
                  View Resume
                  <VisibilityIcon />
                </button>
              </a>
            </div>
          </div>
          <div className="about_rightBox">
            <div>
              <img
                className="home-img"
                src={myImage}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </Container>
      <AboutMeWrapper data-aos="fade-right">
        <div className="aboutSection">
          <div className="left">
            <h3>About</h3>
            <p></p>
            <p>
              Email: <span>shekhar74suman@gmail.com</span>
            </p>
            <p>
              Language: <span>English</span>
            </p>
            <p>
              Nationality: <span>Indian</span>
            </p>
          </div>
          <div className="right">
            <h2>
              I am a <span>Full Stack Web Developer</span>
            </h2>
            <p id="user-detail-intro">
              My name is Shekhar Suman, I am from Deoghar, Jharkhand.I am
              skilled in React,Nodejs,Express and MongoDB and always thrives to
              work on end to end products which develop sustainable and scalable
              social and technical systems to create impact.
            </p>
          </div>
        </div>
      </AboutMeWrapper>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${backgroundImage});
  a {
    text-decoration: none;
  }

  #resume {
    display: flex;
    gap: 5px;
  }

  .aboutBox {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .typical {
    color: teal !important;
    // border:1px solid black;

    font-weight: 700 !important;
    font-size: 30px !important;
  }

  .about_leftBox {
    width: 50%;
    text-align: left;
    padding: 10px;
  }

  .about_leftBox > h1 {
    font-size: 30px;
    line-height: 10px;
  }

  .about_leftBox > p {
    color: black;
    font-size: 17px;
    font-weight: 500;
  }

  .about_leftBox button {
    padding: 12px 20px 12px 20px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid teal;
    background: #23465a;
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-size: 16px;
  }

  .about_leftBox button:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    cursor: pointer;
  }

  .about_rightBox {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }

  .about_rightBox > div {
    width: 250px;
    height: 250px;
    margin: auto;
    border-radius: 100%;
    background-color: white;
    overflow: hidden;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    // height:450px;

    #resume {
      display: flex;
    }
    .about_leftBox button {
      padding: 8px 12px 8px 12px;
      margin-top: 0px;
      border-radius: 10px;
      border: 1px solid teal;
      background: teal;
      color: white;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 10px;
    }
    .aboutBox {
      height: 130%;
      flex-direction: column-reverse;
      gap: 0px;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
      width: 120%;
    }

    .about_leftBox > p {
      color: #8492a6;
      line-height: 15px;
      font-size: 15px;
      font-weight: 500;
      width: 120%;
    }

    .about_leftBox {
      width: 60%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: 200px;
      margin: auto;
      border-radius: 100%;
      background-color: white;
      overflow: hidden;
    }

    .typical {
      //  border:1px solid black;
      width: 200%;
      margin: 0rem;
      height: 50px;
      text-transform: small-caps;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }
    #resume {
      display: flex;
    }
    .about_leftBox button {
      padding: 8px 12px 8px 12px;
      margin-top: 0px;
      margin-left: 3px;
      border-radius: 10px;
      border: 1px solid teal;
      background: teal;

      color: white;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 10px;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 17px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: 200px;
    }

    .typical {
      //  border:1px solid black;
      width: 100%;
      margin: 0rem;
      height: 50px;
      // margin-left: 2.7rem;
      text-transform: small-caps;
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 320px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: 150px;
    }
  }

  @media only screen and (max-width: 319px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: 150px;
    }
  }
`;
const AboutMeWrapper = styled.div`
  width: 100%;
  margin-top: -50px;
  margin-bottom: 40px;
  .aboutSection {
    width: 80%;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    gap: 10px;
    // border: 2px solid black
  }

  .typical {
    // border:1px solid black;
    width: 100%;
    margin-top: -1.7rem;
    margin-left: 2.7rem;
    text-transform: small-caps;
  }

  .left {
    width: 30%;
    text-align: left;
    background-color: #f8f9fa;
    padding: 5px 15px 5px 15px;
    border-radius: 10px;
  }

  .left > p {
    font-size: small;
    font-weight: bold;
  }

  .left > p > span {
    color: #707070;
  }

  .left > h3 + p {
    margin-top: 0px;
    border-top: 1.5px dashed #d4dae1;
  }

  .right {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px 0px 10px;
  }

  .right > h2 {
    width: 100%;
    margin-bottom: 0px;
    font-size: 20px;
    text-align: left;
  }
  .right > h2 > span {
    color: teal;
  }

  .right > p {
    text-align: left;
    margin-top: 5px;
  }

  .right > div {
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    margin-top: -10px;
  }

  .right > div > img {
    margin-left: -35px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1110px) {
    .left {
      width: 35%;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > p {
      font-size: 14px;
    }

    .typical {
      //  border:1px solid black;
      width: 100%;
      margin-top: -1.7rem;
      margin-left: 2.7rem;
      text-transform: small-caps;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }

    .right > h2 {
      font-size: 17px;
    }

    .right > p {
      font-size: 15px;
    }

    .typical {
      //  border:1px solid black;
      width: 100%;
      margin-top: -1.4rem;
      margin-left: 2.7rem;
      text-transform: small-caps;
    }
  }

  @media only screen and (max-width: 320px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > h2 {
      font-size: 16px;
    }

    .right > p {
      font-size: 13px;
    }

    .typical {
      //  border:1px solid black;
      width: 100%;
      margin-top: -1.7rem;
      margin-left: 2.7rem;
      text-transform: small-caps;
    }
  }
`;
export default About;
