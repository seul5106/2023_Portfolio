import Link from "next/link";
import { FC } from "react";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="w-full flex justify-end px-3 fixed top-0 z-10">
      <div className=" bg-[#000000] p-4 text-[#b2b2b2] font-semibold text-b8 rounded-b-[10px] opacity-80">
        <div className="flex justify-between gap-10">
          <Link href="/">Home</Link>
          <Link href="/project">Project</Link>
          {/* <Link to="/dev-info">Developer Info</Link> */}
        </div>
      </div>
    </div>
  );
};
