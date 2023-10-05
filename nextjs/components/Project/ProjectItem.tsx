import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface ProjectItemProps {
  itemRight?: boolean;
  title: string;
  content: string;
  ImgSrc?: StaticImageData;
  link?: string;
  routerLink?: string;
  period: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
  title,
  content,
  link,
  itemRight = false,
  period,
  ImgSrc,
  routerLink,
}) => {
  const router = useRouter();
  return (
    <div className="p-4 bg-grayscale-100 rounded-[5px] box-shadow max-w-[900px] w-full h-full">
      <p className=" text-center text-[21px] font-medium">{title}</p>
      <div
        className={`flex max-sm:flex-col mt-5 gap-4 h-full ${
          itemRight ? 'flex-row-reverse' : ''
        }`}
      >
        <Image
          className=" object-cover max-w-[380px] rounded-[10px] max-sm:max-w-full"
          src={ImgSrc}
          alt="프로젝트 이미지"
        />
        <div className="w-full flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <span className=" whitespace-pre-line text-grayscale-600">
              {content}
            </span>
            <div>
              <ProjectContentItem label="Link" link={link} />
              <ProjectContentItem label="Period" content={period} />
            </div>
          </div>
          <button
            onClick={() => {
              router.push(routerLink);
            }}
            className="w-[50%] max-sm:w-full mt-2 bg-black text-grayscale-white rounded-[5px] p-2 flex items-center justify-center text-[14px]"
          >
            <span className=" text-[14px] font-semibold">▶ 자세히 보기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

interface ProjectContentItemProps {
  label: string;
  content?: string;
  link?: string;
}

const ProjectContentItem: FC<ProjectContentItemProps> = ({
  label,
  content,
  link,
}) => {
  return (
    <div className="flex gap-2 w-full text-grayscale-700">
      <p className="font-medium">{label}:</p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-light break-words w-full"
        >
          {link}
        </a>
      ) : (
        <span className=" font-light">{content}</span>
      )}
    </div>
  );
};
