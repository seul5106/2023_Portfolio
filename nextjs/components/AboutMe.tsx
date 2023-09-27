"use client";

import { FC } from "react";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex max-sm:flex-col items-center gap-10  justify-between max-w-[960px]">
        <div className=" text-center text-grayscale-800 text-[32px] leading-[38px]">
          <p className=" underline">About</p>
          <p>Me</p>
        </div>
        <div className="p-3 text-b7">
          {/* <p className=" text-[24px] font-semibold">저는요</p> */}
          <p>
            저는 타인을 깊이 신뢰하며, 필요한 동료에게는 언제나 도움의 손길을
            뻗쳐줍니다.
          </p>
          <p>
            다양한 의견과 문화를 존중하며, 팀의 다양성을 통한 혁신적인
            아이디어와 해결책을 추구합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
