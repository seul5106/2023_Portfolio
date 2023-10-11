'use client';
import { ProjectItemPageLayout } from '@/components/Layout/ProjectItemPageLayout';
import { NextPage } from 'next';

interface AIplazaPageProps {}

const AIplazaPage: NextPage<AIplazaPageProps> = () => {
  return (
    <ProjectItemPageLayout label="AI Plaza">
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
                yup, formik, tailwind, bootstrap, styled-components, axios
              </p>
              <p>
                <span className=" font-normal">Backend:</span> Nest.js
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
                <a className=" font-medium text-grayscale-500 text-b7 whitespace-pre-line">
                  {`회사에서 처음 투입된 프로젝트라 맡은 업무가 많지는 않습니다. \n`}
                </a>
                <span className=" font-normal">사용자 페이지: </span> 아임포트
                결제 전반, 회원가입 페이지, 공지사항 페이지
              </p>
              <p className="mt-1">
                <span className=" font-normal">관리자 페이지: </span> 유지보수
              </p>
            </div>
          </div>
          <div>
            <p className=" text-grayscale-800 font-medium text-[17px]">
              3. 프로젝트 경험
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>
                이 프로젝트는 개인적으로 nestJS를 1주일 동안 학습한 후 참여하게
                된 경험이었습니다.
              </p>
              <p>
                다행히 회사에는 충분한 레퍼런스 코드가 있어 학습 과정에 큰
                어려움은 없었습니다.
              </p>
              <p>
                주요 업무 중 하나는 사용자의 폼 데이터를 연세대 API로 전송하고
                결과값을 받아오는 것이었습니다.
              </p>
              <p>
                그러나 연세대 API의 데이터 처리 시간이 예상보다 길어, API
                타임아웃 문제가 발생하였습니다.
              </p>
              <p>이 문제에 대응하기 위해 두 가지 방법을 검토하였습니다.</p>
              <p>
                첫 번째는 정해진 시간에 스케줄러를 사용해 결과값을 다시 받아오는
                것,
              </p>
              <p>
                두 번째는 우리 시스템에 결과를 받는 컨트롤러를 하나 추가하여
                연세대에서 데이터 처리가 완료되면 결과값을 전송받는
                것이었습니다.
              </p>
              <p>
                사용자가 가능한 한 빠르게 결과를 확인할 수 있도록, 두 번째
                방법을 선택하였습니다.
              </p>
              <br />
              <p>
                이 프로젝트를 통해 처음 접한 tailwindCSS와 nestJS에 대해 깊은
                이해와 숙련도를 얻을 수 있었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default AIplazaPage;
