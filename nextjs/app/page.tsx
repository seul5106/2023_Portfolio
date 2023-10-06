'use client';

import { NextPage } from 'next';
import TypingAnimation from '../components/TypingAnimation';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe';
import Skils from '../components/Skills/Skills';
import Contact from '../components/Contact';
import { background } from '@/public';
import Image from 'next/image';
import { Header } from '@/components/Layout/Header';

interface IndexProps {}

const IndexPage: NextPage<IndexProps> = () => {
  return (
    <div>
      <Header />
      <div id="cover" className="cover-left" />
      <div className=" relative z-0">
        <Image
          className="w-full object-cover h-[600px]"
          src={background}
          priority
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

export default IndexPage;

const ContentContainer = styled.div`
  padding: 40px;
  padding-bottom: 20px;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;
