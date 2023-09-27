"use client";

import { Header } from "@/components/Layout/Header";
import ProjectItem from "@/components/Project/ProjectItem";
import TypingAnimation from "@/components/TypingAnimation";
import { NextPage } from "next";
import { useState } from "react";

interface ProjectPageProps {}

const ProjectPage: NextPage<ProjectPageProps> = () => {
  const [isOnload, setIsOnLoad] = useState(false);
  return (
    <div className=" bg-black w-full">
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
        <div className="w-full fade-in bg-grayscale-white h-screen p-10 max-sm:px-5 flex flex-col justify-start">
          <p className="w-full text-center text-h1 font-semibold">Project</p>
          <div className="flex flex-col gap-8 mt-10 justify-center items-center">
            <ProjectItem
              title="Ai_Plaza"
              content="124124123"
              link="https:www.aiplaza.co.kr"
              // ImgSrc='123'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
