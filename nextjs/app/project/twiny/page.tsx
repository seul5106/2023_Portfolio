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
          <div>
            <p className=" text-grayscale-800 font-medium text-[17px]">
              3. 프로젝트 사담
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                프로젝트 진행 도중 CSR로 진행하기로 했었던 프로젝트를 SSR로
                해달라는 요청이 들어와
              </p>
              <p>급하게 NextJS를 적용한 프로젝트입니다.</p>
              <p>
                이미 프로젝트가 60% 진행된 이후라 서버 프레임워크를 바꿀 시간은
                없었으며
              </p>
              <p>급한대로 NextJS를 nestJS에 올려서 사용해야 했습니다.</p>
              <p>
                프레임워크 변경건으로 최대한 사이드 이펙트가 발생하지 않도록
                면밀히 검토하였지만
              </p>
              <p>
                nestJS와 NextJS를 연결 해주는 라이브러리인 nest/next에서
                사용자의 언어 종류를 파악해 주는 부분에서 충돌이 일어나
              </p>
              <p>클라이언트에서 사용자 언어를 얻도록 변경하였습니다.</p>
              <p>
                이 외에 NextJS에서 훅의 경우 서버에서 실행되면 에러가 발생하여
                페이지에 선언된 커스텀 훅들을 전부 server에서 실행 되지 않도록
                변경하였습니다.
              </p>
              <br />
              <p>결제 부분에서도 많은 부분을 고심하였습니다.</p>
              <p>포트원이라는 통합모듈이 있어서 다행이었지만</p>
              <p>
                프로젝트 요구사항 중 외국인 결제 가능 여부와 빌링키 결제가
                포함되어있어
              </p>
              <p>포트원으로 페이팔과 정기결제를 사용하기로 했습니다.</p>
              <p>
                프로젝트 진행중 포인트 환급 시스템이 적용되어있는 사업체일 경우
                메이저 PG사들은 카드사 심사
              </p>
              <p>
                자체가 되질 않는다 하여 KSnet으로 모듈 교체 후 적용하였습니다.
              </p>
              <p>
                원래 나이스페이먼츠를 쓰다가 KSnet으로 넘어오니 모듈 자체에도
                문제가 있는게
              </p>
              <p>나이스페이먼츠의 경우 모바일에서도 새창으로 열리는 반면</p>
              <p>
                KSnet의 경우 결제 페이지로 이동하고 다시 원래 페이지로 이동하게
                되어있어
              </p>
              <p>
                결제 완료 후 뒤로가기를 하였을 시 결제 페이지로 이동해버려
                사용자 경험을 해치는 문제가 발생하였습니다.
              </p>
              <p>이에 대한 대응책으로 클라이언트에서 충전하기 버튼 클릭 시</p>
              <p>
                모바일인지 검사하여 모바일일 경우 새창으로 열어 결제 페이지로
                이동하게 변경하였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default TwinyPage;
