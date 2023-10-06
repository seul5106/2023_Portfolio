'use client';
import { ProjectItemPageLayout } from '@/components/Layout/ProjectItemPageLayout';
import { NextPage } from 'next';

interface AskHowPageProps {}

const AskhowPage: NextPage<AskHowPageProps> = () => {
  return (
    <ProjectItemPageLayout label="Askhow">
      <div>
        <a className=" font-medium text-grayscale-500 text-b7 whitespace-pre-line">
          {`※ 취소선이 그어진 기술스택은 프로젝트 내 존재하지만 제 경험에 포함되지않은 기술스택을 나타냅니다. \n 기본적으로 typescript로 작성하였습니다.`}
        </a>
        <div className="flex flex-col gap-3">
          <div className="mt-2">
            <p className=" text-grayscale-800 font-medium text-[17px]">
              1. 프로젝트 기술스택
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                <span className=" font-normal">Frontend:</span> React
              </p>
              <p>
                <span className=" font-normal">Frontend-Lib: </span>
                yup, formik, tailwind, bootstrap, swiper, styled-components,
                axios, react-query
              </p>
              <p>
                <span className=" font-normal">Backend: </span>Nest.js
              </p>
              <p>
                <span className=" font-normal">Backend-Lib: </span>
                exceljs, bcrypt, class validator, bull, nodemailer,{' '}
                <span className=" line-through">zoom api,</span> passport,
                aws-sdk, <span className=" line-through">Solapi,</span> typeorm
              </p>
              <p>
                <span className=" font-normal">Database:</span> MariaDB
              </p>
              <p>
                <span className=" font-normal">Cloud:</span> AWS, Route53,
                Elastic beanstalk, Load balancer, ElastiCache for Redis, S3, AWS
                RDS
              </p>
            </div>
          </div>
          <div>
            <p className=" text-grayscale-800 font-medium text-[17px]">
              2. 맡은 업무 범위
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                <span className=" font-normal">사용자 페이지: </span> 공통 푸터,
                공통 모달
              </p>
              <p className="mt-1">
                <span className=" font-normal">관리자 페이지: </span>전문가,
                상담, 설명회, 강의, 분야, 쿠폰, 배너, 교육TIP, QNA, SNS메시지
                발송
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default AskhowPage;
