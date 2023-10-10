'use client';

import { Header } from '@/components/Layout/Header';
import ProjectItem from '@/components/Project/ProjectItem';
import TypingAnimation from '@/components/TypingAnimation';
import { NextPage } from 'next';
import { useState } from 'react';
import {
  aiplaza,
  army,
  askhow,
  stockplay,
  twiny,
  wineus,
} from '@/public/index';
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
          <div className="flex flex-col gap-[48px] mt-10 justify-center items-center h-full">
            <ProjectItem
              itemRight={true}
              title="Twiny"
              content={`팬트리를 벤치마킹한 팬소통 플랫폼입니다. \n\n1. 멤버십 구독\n2. 크리에이터와 영상통화·채팅\n3. 포스트 글작성\n4. 크리에이터 자동정산`}
              link="https://twiny.me"
              routerLink="/project/twiny"
              period="2023/06 ~ 2023/09"
              ImgSrc={twiny}
            />
            <ProjectItem
              itemRight={false}
              title="AI Plaza"
              content={`AI 빅데이터 분석 기반의 영상자료 분석 서베이 플랫폼이며 \n 회원은 서비스 제공자가 만든 설문조사 폼을 응답하여 제출하면 데이터 분석을 통하여 회원에게 결과를 보여줍니다.`}
              link="https:www.aiplaza.co.kr"
              routerLink="/project/aiplaza"
              period="2022/10 ~ 2023/01"
              ImgSrc={aiplaza}
            />
            <ProjectItem
              itemRight={true}
              title="Wine Us"
              content={`우리카드 사내벤처 프로젝트이며 와인 커뮤니티 플랫폼입니다. \n\n1. 취향에 맞춘 개인별 와인추천\n2. 모임 와인추천\n3. 와인 판매 매장확인\n4. 와인 이미지 검색`}
              routerLink="/project/wineus"
              period="2023/01 ~ 2023/02"
              ImgSrc={wineus}
            />
            <ProjectItem
              itemRight={false}
              title="AskHow 고도화"
              content={`검증받은 교육전문가에게 질문하고 상담받는 \n교육고민 해결 플랫폼입니다.\n\n1. 전문가의 교육 TIP \n2. 무료로 질문하는 상담사례\n3. 1:1전화·채팅·화상상담\n4. 직접 만드는 프로필&상담상품`}
              link="https://askhow.co.kr"
              routerLink="/project/askhow"
              period="2023/02 ~ 2023/04"
              ImgSrc={askhow}
            />
            <ProjectItem
              itemRight={true}
              title="국방사업"
              content={`국방과학기술혁신 촉진법 제18조 비밀유지의무 조항으로 인해 \n2024년 01월 01에 상세내용이 공개됩니다.`}
              routerLink="/project/army"
              // period="2023/02 ~ 2023/04"
              ImgSrc={army}
            />
            <ProjectItem
              itemRight={false}
              title="Stock Play"
              content={`더 플레이 컴퍼니의 의뢰를 받아 진행한 \n주식게임 프로젝트입니다.`}
              routerLink="/project/stockplay"
              period="2023/06 ~ 2023/07"
              ImgSrc={stockplay}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
