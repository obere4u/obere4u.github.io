import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/my-head.png"
            alt="tochukwu_nwosa_head_on_eyeglasses."
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Tochukwu Nwosa</strong>. I'm originally from Nigeria. </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Electrical and Electronics Engineering course at Federal University of Technology, Owerri, Nigeria. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            After my studies, my love quest for knowledge keeping growing and in 2019, at my first attempt in learning programming, I had a setback after 3 months due to lack of power. After that, in 2022, I started learning again and since then, I have never looked back. It hasn't been an easy road but I must say it's been a fun journey for me. In these thing, I have been able to collaborate with so many people and together we have built an amazing projects for example, I joined the design team and software team at Kinplus Technologies to design and build an Attendance App which has help in checkmating ghost-workers, we also improve the company website for better visualization and enhanced user experience.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in frontend web development and cross-platform mobile development (in view).
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
