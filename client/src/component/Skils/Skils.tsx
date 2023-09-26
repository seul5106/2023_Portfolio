import { FC } from "react";
import SkillsItem from "./SkilsItem";
import SkilsItems from "./SkilsItems";
import {
  aws,
  css,
  express,
  git,
  html,
  javascript,
  mongodb,
  mysql,
  ncp,
  nestjs,
  nextjs,
  nodejs,
  portone,
  react,
  tailwind,
  typescript,
} from "../../assets";

interface SkilsProps {}

const Skils: FC<SkilsProps> = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[40px]">
      <p className=" text-[32px] font-medium">Skils</p>
      <SkilsItems label="Lang">
        <SkillsItem ImgSrc={javascript} ItemName="Javascript" />
        <SkillsItem ImgSrc={typescript} ItemName="typescript" />
      </SkilsItems>
      <SkilsItems label="Front">
        <SkillsItem ImgSrc={html} ItemName="Html" />
        <SkillsItem ImgSrc={css} ItemName="CSS" />
        <SkillsItem ImgSrc={react} ItemName="React" />
        <SkillsItem ImgSrc={nextjs} ItemName="Next.js" />
        <SkillsItem ImgSrc={tailwind} ItemName="Tailwind CSS" />
      </SkilsItems>
      <SkilsItems label="Backend">
        <SkillsItem ImgSrc={nestjs} ItemName="NestJs" />
        <SkillsItem ImgSrc={mongodb} ItemName="MongoDB" />
        <SkillsItem ImgSrc={mysql} ItemName="MySql" />
        <SkillsItem ImgSrc={express} ItemName="Express" />
      </SkilsItems>
      <SkilsItems label="Etc">
        <SkillsItem ImgSrc={git} ItemName="Git" />
        <SkillsItem ImgSrc={aws} ItemName="Aws" />
        <SkillsItem ImgSrc={ncp} ItemName="NCP" />
        <SkillsItem ImgSrc={nodejs} ItemName="NodeJs" />
        <SkillsItem ImgSrc={portone} ItemName="PortOne" />
      </SkilsItems>
    </div>
  );
};

export default Skils;
