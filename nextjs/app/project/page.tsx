'use client';

import { Header } from '@/components/Layout/Header';
import ProjectItem from '@/components/Project/ProjectItem';
import TypingAnimation from '@/components/TypingAnimation';
import { NextPage } from 'next';
import { useState } from 'react';
import { aiplaza } from '@/public/index';
interface ProjectPageProps {}

const ProjectPage: NextPage<ProjectPageProps> = () => {
  const [isOnload, setIsOnLoad] = useState(false);
  return (
    <div className=" bg-black w-full ">
      <Header />
      {isOnload === false ? (
        <div>
          <div id="cover" className="cover-left" />
          <div className=" relative z-0 h-screen">
            <div className="absolute inset-0 bg-black" />
            <div className="w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              <TypingAnimation
                text="이때까지 진행한 프로젝트입니다."
                onChange={setIsOnLoad}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-full fade-in bg-grayscale-white  p-10 max-sm:px-5 flex flex-col justify-start">
          <p className="w-full text-center text-h1 font-semibold mt-10">
            Project
          </p>
          <div className="flex flex-col gap-8 mt-10 justify-center items-center h-full">
            <ProjectItem
              itemRight={false}
              title="AI Plaza"
              content={`AI 빅데이터 분석 기반의 영상자료 분석 서베이 플랫폼이며 \n 회원은 서비스 제공자가 만든 설문조사 폼을 응답하여 제출하면 데이터 분석을 통하여 회원에게 결과를 보여줍니다.`}
              link="https:www.aiplaza.co.kr"
              routerLink="/project/aiplaza"
              period="2022/10 ~ 2022/01"
              ImgSrc={aiplaza}
            />
            <ProjectItem
              itemRight={true}
              title="Wine Us"
              content={`AI 빅데이터 분석 기반의 \n 영상자료 분석 서베이 플랫폼`}
              link="https:www.aiplaza.co.kr"
              routerLink="/project/aiplaza"
              period="2022/10 ~ 2022/01"
              ImgSrc={aiplaza}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
