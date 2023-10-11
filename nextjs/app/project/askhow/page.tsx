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
          <div>
            <p className=" text-grayscale-800 font-medium text-[17px]">
              3. 프로젝트 경험
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                회사에서는 주로 MongoDB를 사용하여 개발하였지만, 고객사의
                요청으로 MariaDB로 데이터베이스를 교체하게 되었습니다.
              </p>
              <p>
                비록 typeorm을 사용하였으나, 특정 SQL 문장들 (특히 having
                절)에서 제한 사항이 있어 바닐라 SQL로 직접 처리하였습니다.
              </p>
              <br />
              <p>
                또한, 고객사에서는 SNS 동의를 한 회원들에게 메시지 발송 기능을
                요청하였습니다.
              </p>
              <p>
                이를 위해 Solapi를 활용하여 다양한 발송 옵션 (전체 발송, 전문가
                전체 발송, 회원 전체 발송 및 개별 발송)을 구현하였습니다.
              </p>
              <br />
              <p>
                프로젝트 검수 대기 중, 고객사 측에서 예고하지 않은 이벤트를
                진행하였습니다.
              </p>
              <p>
                이로 인해 사용자 접속이 급증하며 nginx에서 503 에러가
                발생하였습니다.
              </p>
              <p>
                AWS의 로드밸런서 설정은 이미 완료 상태였으나, 예상치 못한 문제로
                서버의 정상 작동이 방해되었습니다.
              </p>
              <p>
                문제 분석 결과, AWS의 health check 설정이 제대로 동작하지 않아
                발생한 것으로 확인되었습니다.
              </p>
              <p>
                health check에서 200 상태 코드 대신 302가 반환되고 있어서, 이를
                허용하여 문제를 해결하였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default AskhowPage;
