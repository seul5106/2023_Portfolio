"use client";

import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface SkilsItemProps {
  ImgSrc: StaticImageData;
  ItemName: string;
}

const SkillsItem: FC<SkilsItemProps> = ({ ImgSrc, ItemName }) => {
  return (
    <div className="p-3 shadow rounded-[5px]">
      <div className="h-full flex flex-col justify-between items-center gap-2">
        <Image
          className=" object-contain  max-w-[80px] max-h-[80px] rounded-[5px]"
          src={ImgSrc}
          alt="skill"
        />
        <p className=" text-b3 font-medium">{ItemName}</p>
      </div>
    </div>
  );
};

export default SkillsItem;
