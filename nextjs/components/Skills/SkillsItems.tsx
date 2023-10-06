'use client';

import { FC } from 'react';

interface SkilsItemsProps {
  label: string;
  children: React.ReactNode;
}

const SkilsItems: FC<SkilsItemsProps> = ({ label, children }) => {
  return (
    <div className="mt-6">
      <p className=" text-grayscale-800 text-[21px] text-center">{label}</p>
      <div className="flex flex-wrap justify-center gap-4">{children}</div>
    </div>
  );
};

export default SkilsItems;
