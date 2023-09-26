import { FC } from "react";

interface SkilsItemProps {
  ImgSrc: string;
  ItemName: string;
}

const SkillsItem: FC<SkilsItemProps> = ({ ImgSrc, ItemName }) => {
  return (
    <div className="p-3 shadow rounded-[5px]">
      <div className="h-full flex flex-col justify-between items-center gap-2">
        <img
          className="  max-h-[80px] rounded-[5px]"
          src={ImgSrc}
          alt="skill"
        />
        <p className=" text-b3 font-medium">{ItemName}</p>
      </div>
    </div>
  );
};

export default SkillsItem;
