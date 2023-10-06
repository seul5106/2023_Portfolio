'use client';
import { ProjectItemPageLayout } from '@/components/Layout/ProjectItemPageLayout';
import { NextPage } from 'next';

interface TwinyPageProps {}

const TwinyPage: NextPage<TwinyPageProps> = () => {
  return (
    <ProjectItemPageLayout label="Twiny">
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
                <span className=" font-normal">Frontend:</span> Next.js
              </p>
              <p>
                <span className=" font-normal">Frontend-Lib: </span>
                yup, formik, tailwind, bootstrap, swiper, styled-components,
                axios, react-query, ckEditor5,{' '}
                <span className=" line-through">Socket.io</span>
              </p>
              <p>
                <span className=" font-normal">Backend: </span>Nest.js
              </p>
              <p>
                <span className=" font-normal">Backend-Lib: </span>i18n,{' '}
                <span className=" line-through">peerjs,</span> exceljs, bcrypt,
                class validator, bull, nodemailer, mongoose, passport, aws-sdk,{' '}
                <span className=" line-through">Socket.io</span>
              </p>
              <p>
                <span className=" font-normal">Database:</span> MongoDB
              </p>
              <p>
                <span className=" font-normal">Cloud:</span> AWS, Route53,
                Elastic beanstalk, Load balancer, ElastiCache for Redis, S3
              </p>
            </div>
          </div>
          <div>
            <p className=" text-grayscale-800 font-medium text-[17px]">
              2. 맡은 업무 범위
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                <span className=" font-normal">사용자 페이지: </span>{' '}
                카카오·페이스북·트위터·구글 소셜로그인, 일반 로그인 및 회원가입,
                모달, 비밀번호 찾기 이메일 발송, 메인 페이지, 홈 포스트 리스트,
                포스트 상세, 댓글 작성 및 신고, 알림 페이지,크리에이터 및 회원
                정보 수정, 수익관리페이지, 정산요청, 자동정산 시스템, 포트원
                KSnet 모듈 연동, 빌링키 결제, 페이팔 결제, 트위니 포인트 결제,
                다국어 시스템 적용, 스토리 업로드 및 상세, 이용내역, 계정관리,
                결제수단 관리, 멤버십 설정,
              </p>
              <p className="mt-1">
                <span className=" font-normal">관리자 페이지: </span> 신고 제한
                조치, 결제환불, 매출 목록, 매출 통계, 매출 엑셀 다운로드,
                회원관리, 플랫폼 배너 관리, 이벤트 관리, 크리에이터 신청 및
                관리, 정산 관리,
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default TwinyPage;
