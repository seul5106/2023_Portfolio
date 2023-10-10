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
              3. 프로젝트 사담
            </p>
            <div className="ml-4 font-light text-[15px]">
              <p>nestJS를 1주일동안 개인공부 후 투입된 프로젝트입니다.</p>
              <p>
                다행히 회사 내부에 레퍼런스 코드가 온전히 존재하여 학습하는데는
                큰 문제가 없었으나
              </p>
              <p>
                사용자가 응답한 폼 데이터를 연세대측 API에 전달하여 결과값을
                리턴받는 업무가 있었으며
              </p>
              <p>
                연세대측 API의 데이터 분석 속도가 생각외로 오래 걸려 API
                타임아웃 현상이 발생하였으며
              </p>
              <p>
                이에 대한 대처로 스케쥴러로 정해진 시간에 결과값을 다시 수신
                받거나
              </p>
              <p>AI Plaza 내부 시스템에 결과값을 받을 컨트롤러 하나를 열어서</p>
              <p>
                연세대측에서 데이터 분석이 완료되면 저희 측 시스템에 완료된
                결과값을 전달해주는 방안이 있었습니다.
              </p>
              <p>
                두 가지 방안 중 연세대측에서 가능한 분석이 끝나면 사용자가
                결과를 확인했으면 좋겠다 하여 두 번째 방안을 채택하였습니다.
              </p>
              <br />
              <p>
                처음 투입된 프로젝트였지만 tailwindCSS, nestjs에 대해서 어느
                정도 숙련도를 갖추게 된 프로젝트였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemPageLayout>
  );
};

export default AIplazaPage;
