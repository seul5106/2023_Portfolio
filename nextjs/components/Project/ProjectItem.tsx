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
  period?: string;
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
      <p className=" text-center text-[28px] font-bold">{title}</p>
      <div className="border-b border-grayscale-200 mt-4" />
      <div
        className={`flex max-sm:flex-col mt-5 gap-4 h-full w-full ${
          itemRight ? 'flex-row-reverse' : ''
        }`}
      >
        <Image
          className="  object-contain max-w-[380px] max-h-[280px] max-sm:max-h-full rounded-[10px] max-sm:max-w-full"
          src={ImgSrc}
          alt="프로젝트 이미지"
          priority
        />
        <div className="w-full flex flex-col justify-between">
          <span className=" whitespace-pre-line text-grayscale-600">
            {content}
          </span>

          <div className="mt-4 w-full">
            {link ? <ProjectContentItem label="Link" link={link} /> : <></>}
            {period ? (
              <ProjectContentItem label="Period" content={period} />
            ) : (
              <></>
            )}
            {period ? (
              <button
                onClick={() => {
                  router.push(routerLink);
                }}
                className="w-[50%] max-sm:w-full mt-2 bg-black text-grayscale-white rounded-[5px] p-2 flex items-center justify-center text-[14px]"
              >
                <span className=" text-[14px] font-semibold">
                  ▶ 자세히 보기
                </span>
              </button>
            ) : (
              <></>
            )}
          </div>
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
    <div className="text-grayscale-700">
      <a className="font-medium">{`${label}: `}</a>
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
        <a className=" font-light">{content}</a>
      )}
    </div>
  );
};
