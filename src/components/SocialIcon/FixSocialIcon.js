import React from "react";
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2.3rem;
    color: rgb(255, 255, 255);
    background: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: rgb(0, 0, 0);
      background: #f6f6f6;
    }

    .round {
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    a {
      font-size: 2.5rem;
      color: #f6f6f6;
      &:hover {
        color: rgb(0, 0, 0);
        background: #f6f6f6;
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;
function FixSocialIcon() {
  return (
    <SocialContainer>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
      >
        <ul>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/nwosat-tochukwu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="round" />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/obere4u"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="item">
            <a
              href="https://dev.to/obere4u"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDev className="round" />
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;
