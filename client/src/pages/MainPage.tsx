import { FC } from "react";
import TypingAnimation from "../component/TypingAnimation";
import styled from "styled-components";
import AboutMe from "../component/AboutMe";
import Skils from "../component/Skils/Skils";
import Contact from "../component/Contact";
import { background } from "../assets";

interface MainProps {}

const MainPage: FC<MainProps> = () => {
  return (
    <div>
      <div id="cover" className="cover-left" />
      <div className=" relative z-0">
        <img
          className="w-full object-cover h-[600px]"
          src={background}
          alt="배경화면"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <TypingAnimation text="Web Developer 정한슬" />
        </div>
      </div>
      <div className="mt-[-20px] bg-white z-[2] absolute h-[20px] w-full rounded-t-[8px]" />

      <ContentContainer>
        <AboutMe />
        <Skils />
        <Contact />
      </ContentContainer>
    </div>
  );
};

export default MainPage;

const ContentContainer = styled.div`
  padding: 40px;
  padding-bottom: 20px;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;
