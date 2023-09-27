import { StaticImageData } from "next/image";
import { FC } from "react";

interface ProjectItemProps {
  title: string;
  content: string;
  ImgSrc?: StaticImageData;
  link?: string;
}

const ProjectItem: FC<ProjectItemProps> = ({ title, content, link }) => {
  return (
    <div className="p-4 bg-grayscale-100 rounded-[5px] box-shadow max-w-[900px] w-full">
      123
    </div>
  );
};

export default ProjectItem;
