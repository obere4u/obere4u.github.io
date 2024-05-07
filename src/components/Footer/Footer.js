import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-image: url(/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;

  .copyright {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-items: center;
    margin-top: auto;
    padding: 20px 0px;

    small {
      background: linear-gradient(to right, #ffffff, #ffffff, #000000, #000000);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      text-align: center;

      @media screen and (max-width: 768px) {
        background: linear-gradient(
          to right,
          #ffffff,
          #ffffff
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    }

    span {
      color: #ff0000;
      margin-left: 10px;
    }
  }
`;
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterSection>
      <div className="Container" />
      <div></div>
      <div className="copyright">
        <small>{currentYear} &copy; Tochukwu Nwosa </small>
        <span>❤</span>
      </div>
    </FooterSection>
  );
}

export default Footer;
