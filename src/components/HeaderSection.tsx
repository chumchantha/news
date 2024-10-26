import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderSection = ({
  bgColor,
  title,
  hoverColor,
}: {
  bgColor: string;
  title: string;
  hoverColor: string;
}) => {
  return (
    <>
      {/* header section */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Link href="/" className={`${bgColor} h-10 w-[200px] relative`}>
            <h2 className="absolute my-auto top-[0.4rem] px-6 text-xl">
              {title}
            </h2>
          </Link>
          <Link
            href="/"
            className={`${hoverColor} flex items-center gap-4 px-6`}
          >
            <h2 className="cursor-pointer flex item-center text-lg">
              View All
            </h2>
            <ArrowRight className="cursor-pointer" />
          </Link>
        </div>
        <div className={`${bgColor} h-3 w-full`}></div>
      </div>
    </>
  );
};

export default HeaderSection;
