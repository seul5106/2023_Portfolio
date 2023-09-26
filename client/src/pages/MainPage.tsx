import { FC, useEffect, useState } from "react";
import backgroundImg from "../assets/background.png";
import TypingAnimation from "../component/TypingAnimation";

interface MainProps {}

const MainPage: FC<MainProps> = () => {
  return (
    <div className="">
      <div id="cover" className="cover-left" />
      <div className=" relative z-0">
        <img
          className="w-full object-cover h-[600px]"
          src={backgroundImg}
          alt="배경화면"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <TypingAnimation text="Web Developer 정한슬" />
        </div>
      </div>
      <div className="mt-[-20px] bg-white z-30 absolute h-[20px] w-full rounded-t-[8px]" />
      {/** About Me */}
      <div className="py-10 px-[40px] w-full">
        <div className=" flex justify-center">
          <div className="flex items-center gap-10  justify-between max-w-[960px]">
            <div className=" text-center text-grayscale-800 text-[32px] leading-[38px]">
              <p className=" underline">About</p>
              <p>Me</p>
            </div>
            <div className="p-3 text-b7">
              {/* <p className=" text-[24px] font-semibold">저는요</p> */}
              <p>
                저는 타인을 깊이 신뢰하며, 필요한 동료에게는 언제나 도움의
                손길을 뻗쳐줍니다.
              </p>
              <p>
                다양한 의견과 문화를 존중하며, 팀의 다양성을 통한 혁신적인
                아이디어와 해결책을 추구합니다.
              </p>
            </div>
          </div>
        </div>
        {/** Skill */}
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
