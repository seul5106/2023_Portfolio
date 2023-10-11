'use client';

import { FC } from 'react';
import SkillsItem from './SkillsItem';
import SkilsItems from './SkillsItems';
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
} from '@/public';

interface SkilsProps {}

const Skils: FC<SkilsProps> = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[100px]">
      <p className=" text-[32px] font-medium">Skills</p>
      <SkilsItems label="Lang">
        <SkillsItem
          Proficiency="familiar"
          ImgSrc={javascript}
          ItemName="Javascript"
        />
        <SkillsItem
          Proficiency="familiar"
          ImgSrc={typescript}
          ItemName="typescript"
        />
      </SkilsItems>
      <SkilsItems label="Front">
        <SkillsItem Proficiency="familiar" ImgSrc={html} ItemName="Html" />
        <SkillsItem Proficiency="familiar" ImgSrc={css} ItemName="CSS" />
        <SkillsItem Proficiency="familiar" ImgSrc={react} ItemName="React" />
        <SkillsItem
          Proficiency="intermediate"
          ImgSrc={nextjs}
          ItemName="Next.js"
        />
        <SkillsItem
          Proficiency="familiar"
          ImgSrc={tailwind}
          ItemName="Tailwind CSS"
        />
      </SkilsItems>
      <SkilsItems label="Backend">
        <SkillsItem Proficiency="familiar" ImgSrc={nestjs} ItemName="NestJs" />
        <SkillsItem
          Proficiency="familiar"
          ImgSrc={mongodb}
          ItemName="MongoDB"
        />
        <SkillsItem
          Proficiency="intermediate"
          ImgSrc={mysql}
          ItemName="MySql"
        />
        <SkillsItem
          Proficiency="intermediate"
          ImgSrc={express}
          ItemName="Express"
        />
      </SkilsItems>
      <SkilsItems label="Etc">
        <SkillsItem Proficiency="familiar" ImgSrc={git} ItemName="Git" />
        <SkillsItem Proficiency="familiar" ImgSrc={aws} ItemName="AWS" />
        <SkillsItem Proficiency="tried" ImgSrc={ncp} ItemName="NCP" />
        <SkillsItem Proficiency="familiar" ImgSrc={nodejs} ItemName="NodeJs" />
        <SkillsItem
          Proficiency="familiar"
          ImgSrc={portone}
          ItemName="PortOne"
        />
      </SkilsItems>
    </div>
  );
};

export default Skils;
