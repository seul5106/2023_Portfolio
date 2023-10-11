'use client';
import { ProjectItemPageLayout } from '@/components/Layout/ProjectItemPageLayout';
import { NextPage } from 'next';

interface WineUsPageProps {}

const WineUsPage: NextPage<WineUsPageProps> = () => {
  return (
    <ProjectItemPageLayout label="Wine Us">
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
                <span className=" font-normal">Frontend:</span> React,{' '}
                <span className=" line-through">React-native</span>
              </p>
              <p>
                <span className=" font-normal">Frontend-Lib: </span>
                yup, formik, tailwind, bootstrap, swiper, styled-components,
                axios, headless ui
              </p>
              <p>
                <span className=" font-normal">Backend: </span>Nest.js
              </p>
              <p>
                <span className=" font-normal">Backend-Lib: </span>
                exceljs, bcrypt, class validator, nodemailer, mongoose,
                passport, aws-sdk
              </p>
              <p>
                <span className=" font-normal">Database:</span> MongoDB
              </p>
              <p>
                <span className=" font-normal">Cloud:</span> AWS, Route53,
                Elastic beanstalk, Load balancer, S3
              </p>
            </div>
          </div>
          <div>
            <p className=" text-grayscale-800 font-medium text-[17px]">
              2. 맡은 업무 범위
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                <span className=" font-normal">사용자 페이지: </span>없음
              </p>
              <p className="mt-1">
                <span className=" font-normal">관리자 페이지: </span>회원목록,
                탈퇴회원목록, 배너, 약관, 신고, 와인, 후기, 매장, 매장카테고리,
                제보, 요청, 공지사항, 와인 데이터 대량 업로드 시스템
              </p>
            </div>
          </div>
          <div>
            <p className=" text-grayscale-800 font-medium text-[17px]">
              3. 프로젝트 경험
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                이 프로젝트는 회사 내 React Native 개발자와의 첫 번째 협업
                경험이었습니다.
              </p>
              <p>저는 관리자 페이지를 담당하게 되었으며,</p>
              <p>
                초기에는 서버 API 템플릿을 신속히 구축하여 앱 개발자와
                공유하였습니다.
              </p>
              <p>
                앱 개발자가 Jira에 기록한 이슈를 우선적으로 처리하고, 그 후에
                주어진 테스크를 진행하는 방식으로 작업했습니다.
              </p>
              <br />
              <p>
                고객사의 요구로, 와인 데이터를 대량으로 업로드하는 기능을
                구현하였습니다.
              </p>
              <p>
                사용자가 이미지를 먼저 업로드한 뒤, 와인 데이터를 엑셀 형태로
                업로드하면,
              </p>
              <p>
                이미지 이름과 와인 데이터 인덱스가 일치하는 경우 자동으로
                매칭하여 하나의 데이터로 합쳐 처리하였습니다.
              </p>
              <p>
                이 프로젝트를 통해 이미지의 대량 업로드 및 엑셀 데이터 파싱과
                같은 기술적인 부분에서 풍부한 경험을 얻을 수 있었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default WineUsPage;
