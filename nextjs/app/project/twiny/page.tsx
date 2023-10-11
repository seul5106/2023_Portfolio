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
              3. 프로젝트 경험
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                프로젝트 중간에 요청사항이 변경되어, 원래 CSR 기반으로 진행하던
                프로젝트를 SSR로 전환해야 했습니다.
              </p>
              <p>
                이때 이미 프로젝트는 60% 진행되어 있었기에, 전체 서버
                프레임워크를 변경하는 것은 어려웠습니다.
              </p>
              <p>
                결과적으로 NextJS를 선택하여 nestJS 위에 구현하게 되었습니다.
              </p>

              <p>
                변경 과정에서 최대한 사이드 이펙트를 최소화하기 위해 주의깊게
                접근했으나,
              </p>
              <p>
                nest/next 라이브러리에서 사용자 언어 인식 부분에서 문제가
                발생했습니다.
              </p>
              <p>
                이를 해결하기 위해 클라이언트 측에서 사용자 언어를 얻는 방식으로
                수정하였습니다.
              </p>
              <p>
                또한, NextJS의 훅이 서버에서 실행될 때 발생하는 문제를 해결하기
                위해 해당 훅들이 서버에서 실행되지 않도록 조정하였습니다.
              </p>
              <br />
              <p>결제 시스템 구현 역시 다양한 고려사항이 있었습니다.</p>
              <p>
                프로젝트 요구사항에 따라 외국인 결제와 빌링키 결제를 지원해야
                했고, 이를 위해 통합 모듈인 포트원을 활용하여 페이팔과 정기결제
                기능을 도입하였습니다.
              </p>
              <p>
                하지만 포인트 환급 시스템이 적용된 사업체의 경우 주요 PG사에서의
                카드사 심사가 어려워, 결제 모듈을 KSnet으로 변경하여 적용하게
                되었습니다.
              </p>
              <br />
              <p>이 과정에서도 문제가 있었습니다.</p>
              <p>
                기존의 나이스페이먼츠는 모바일에서도 결제 페이지가 새 창으로
                열렸으나, KSnet은 결제 후 원래 페이지로 돌아오는 방식이었습니다.
              </p>
              <p>
                이로 인해 사용자가 결제 완료 후 '뒤로 가기'를 클릭하면 결제
                페이지로 다시 이동하는 문제가 발생하였습니다.
              </p>
              <p>
                이를 해결하기 위해, 충전하기 버튼을 클릭할 때 모바일 여부를
                확인하여 모바일 사용자의 경우 새 창에서 결제 페이지가 열리도록
                수정하였습니다.
              </p>
              <br />
              <p>소셜 로그인 부분에도 문제가 있었습니다.</p>
              <p>
                트위터 소셜 로그인을 연동 시 다른 소셜 로그인처럼 Oauth2.0을
                지원하나 트위터 API 호출 시 호출 자체가 되지 않는 문제가
                생겼었습니다.
              </p>
              <p>
                API 문서와 똑같이 설정하여도 호출도 되질 않고 에러 로그도 나오질
                않아서 기존 트위터 passport 라이브러리 github에서 트위터 소셜
                로그인은 다른 소셜 로그인과는 달리 API 호출 시 세션 설정을
                해놓지 않으면 자동으로 reject 된다 하여 main.ts에 세션 설정을
                해놓고 호출하여 문제를 해결하였습니다.
              </p>
              <br />
              <p>
                프로젝트에서는 자동 정산 기능의 구현이 중요한 요구사항으로
                제시되었습니다.
              </p>
              <p>
                포트원은 이 기능을 지원하지 않았기 때문에, KSnet의 자회사인
                하이픈의 송금 API를 활용하여 구현하였습니다.
              </p>
              <p>
                자동 정산 시스템 구축에 있어 주요 고려사항은 다음과 같았습니다:
              </p>
              <p>1.스캐쥴러를 실행 시간</p>
              <p>2.사용자 정산 요청 후 10일 이후 처리</p>
              <p>3.사용자 정보 오입력 시 즉시 실패 처리</p>
              <p>4.송금 API와 은행 내부 서버 에러 발생 시, 익일 처리</p>
              <p>5. 5회 이상 요청 실패 시, 시스템상 에러로 기록 및 실패 처리</p>
              <p>
                스케줄러의 실행 시간은 하이픈 측과의 상담을 통해 API 호출이
                상대적으로 적은 오전 7시로 결정하였습니다.
              </p>
              <p>
                또한, 하이픈의 송금 API는 사용자 정보의 오입력에 대한 에러
                처리가 미흡했기에,
              </p>
              <p>
                우리쪽에서는 은행의 에러 코드를 전체적으로 수집하여 오입력으로
                판단되는 에러 코드에 대한 처리를 별도로 구현하였습니다.
              </p>
              <br />
              <p>
                이 프로젝트는 사내에서 가장 큰 규모를 자랑했고, 특히 결제
                파트에서는 기술적 숙련도가 크게 향상되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default TwinyPage;
