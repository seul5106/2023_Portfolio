import { headerArrowLeft } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface ProjectItemPageHeaderProps {
  label: string;
}

export const ProjectItemPageHeader: FC<ProjectItemPageHeaderProps> = ({
  label,
}) => {
  const router = useRouter();
  return (
    <div className="h-[60px] sticky inset-x-0 top-0 w-full bg-grayscale-white border-b border-grayscale-200 p-4 flex justify-between items-center">
      <div className="flex gap-2">
        <button
          onClick={() => {
            router.back();
          }}
        >
          <Image
            className="h-5 w-5"
            src={headerArrowLeft}
            alt="뒤로가기 이미지"
          />
        </button>
        <p className=" text-b6 font-medium">{label}</p>
      </div>
      <div className=" font-medium flex gap-3 text-b6">
        <Link href="/">Home</Link>
        <Link href="/project">Project</Link>
      </div>
    </div>
  );
};
