'use client';

import { logo } from '@/public';
import Image from 'next/image';
import { FC } from 'react';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full bg-grayscale-800 py-10 px-3 mt-10 flex justify-center">
        <div className="flex-col w-full max-w-[700px] ">
          <p className=" text-grayscale-white max-sm:text-center sm:ml-3">
            Contact
          </p>
          <div className="flex gap-4 max-sm:flex-col">
            <Image className="max-w-[80px]" src={logo} alt="로고" />
            <div className=" text-grayscale-white whitespace-break-spaces max-sm:text-[14px]">
              <p>Email: seul5106@gmail.com</p>
              <p>Git: https://github.com/seul5106</p>
              <p>Phone: 010-9057-0451</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
