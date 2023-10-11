'use client';
import { ProjectItemPageLayout } from '@/components/Layout/ProjectItemPageLayout';
import { NextPage } from 'next';

interface AskHowPageProps {}

const AskhowPage: NextPage<AskHowPageProps> = () => {
  return (
    <ProjectItemPageLayout label="Stock Play">
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
                yup, formik, tailwind, bootstrap, styled-components, axios,
                react-query, <span className=" line-through">Socket.io</span>
              </p>
              <p>
                <span className=" font-normal">Backend: </span>Nest.js
              </p>
              <p>
                <span className=" font-normal">Backend-Lib: </span>
                exceljs, bcrypt, class validator, bull, nodemailer, passport,
                aws-sdk, mongoose,{' '}
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
                <span className=" font-normal">사용자 페이지: </span> 없음
              </p>
              <p className="mt-1">
                <span className=" font-normal">관리자 페이지: </span> 교육생
                데이터 대량 업로드, 게임 실행, 게임 단계별 실행, 진행중인 게임
                데이터 변경, 초기 게임 설정값 관리
              </p>
            </div>
          </div>
          <div>
            <p className=" text-grayscale-800 font-medium text-[17px]">
              3. 프로젝트 경험
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                이 프로젝트에서 기본적인 시스템 설계는 제 상사분이
                주도하셨습니다.
              </p>
              <p>
                게임 운영과 관련된 많은 부분이 상사분과 깊게 연관되어 있어,
                그와의 원활한 커뮤니케이션이 중요했습니다.
              </p>
              <p>
                제 업무는 상사분이 구축해 놓은 소켓 전파 메소드를 단계별로
                호출하면서,
              </p>
              <p>게임 운영에 필요한 추가적인 기능들을 구현하는 것이었습니다.</p>
              <br />
              <p>게임 진행 중에는 다양한 예외 상황이 고려되어야 했습니다. </p>
              <p>
                예를 들어, 대표자로 선출된 인원을 관리자가 삭제하거나 비활성화할
                때, 그에 따른 변화를 어떻게 처리할 것인지,
              </p>
              <p>
                또는 게임 중 퀴즈 추가 시 해당 퀴즈의 타이밍은 어떻게 결정할
                것인지 등의 문제들이 있었습니다.
              </p>
              <p>
                이러한 문제를 혼자서 결정하기에는 한계가 있었기 때문에, 이번
                프로젝트에서는 기획자와의 의사소통이 특히 중요했습니다.
              </p>
              <br />
              <p>
                이러한 과정을 통해, 프로젝트의 완성도는 높아졌고, 팀 간의
                커뮤니케이션 능력과 문제 해결 능력이 크게 향상되었습니다.
              </p>
              <p>
                또한, 실제 운영 환경에서의 예외 상황을 체계적으로 다루는 능력을
                기르게 되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default AskhowPage;
