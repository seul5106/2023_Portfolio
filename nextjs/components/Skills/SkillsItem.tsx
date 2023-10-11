'use client';

import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface SkilsItemProps {
  ImgSrc: StaticImageData;
  ItemName: string;
  Proficiency: string;
}

const SkillsItem: FC<SkilsItemProps> = ({ ImgSrc, ItemName, Proficiency }) => {
  return (
    <div className="p-3 shadow rounded-[5px] relative Skill_container">
      <div className="h-full flex flex-col justify-between items-center gap-2">
        <Image
          className=" object-contain  max-w-[80px] max-h-[80px] rounded-[5px]"
          src={ImgSrc}
          alt="skill"
        />
        <p className=" text-b3 font-medium">{ItemName}</p>
      </div>
      <div className=" Skill_label absolute top-0 left-0 w-full h-full rounded-[5px]">
        <div className="flex justify-center items-center w-full h-full">
          <p className=" text-grayscale-white opacity-100">{Proficiency}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
