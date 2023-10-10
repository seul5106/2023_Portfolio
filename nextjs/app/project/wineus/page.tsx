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
              3. 프로젝트 사담
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                사내의 React Native 개발자와 본격적으로 협업을 하게 된
                프로젝트입니다.
              </p>
              <p>
                제게 관리자 페이지에 대해서 주어진 테스크가 존재하여 가능한 서버
                API 탬플릿을
              </p>
              <p>
                먼저 빠르게 제작하고 앱 개발자 분이 사용하시다가 Jira에 이슈를
                적어놓으시면
              </p>
              <p>
                이슈 먼저 해결하고 할당받은 테스크를 진행하는 식으로
                작업하였습니다.
              </p>
              <br />
              <p>
                고객사에서 와인 데이터에 대해서 대량 업로드가 가능했으면
                좋겠다는 요구사항을 받아서
              </p>
              <p>
                이미지 데이터를 먼저 업로드 하거나 와인 데이터를 엑셀로 업로드
                하게 되면
              </p>
              <p>
                데이터가 생성되며 이미지의 이름과 와인 데이터의 인덱싱이 일치할
                경우
              </p>
              <p>
                기존의 데이터를 매칭하여 하나의 데이터로 묶어 처리하였습니다.
              </p>
              <p>
                이 과정 중 이미지 대량 업로드와 엑셀 데이터 파싱과 같은 기술적인
                경험을 얻게 되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default WineUsPage;
