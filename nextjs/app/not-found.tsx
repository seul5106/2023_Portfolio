"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

interface NotFoundPageProps {}

const NotFoundPage: NextPage<NotFoundPageProps> = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full text-center text-h1 font-semibold">
        페이지를 찾을 수 없습니다.
      </div>
      <button
        onClick={() => {
          router.push("/");
        }}
        className=" rounded-[10px] text-b6 py-3 mt-[40px] w-full max-w-[300px] bg-grayscale-800 text-grayscale-white font-semibold"
      >
        홈으로
      </button>
    </div>
  );
};

export default NotFoundPage;
