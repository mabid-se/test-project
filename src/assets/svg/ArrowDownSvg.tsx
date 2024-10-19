import type { FC, SVGProps } from "react";

const ArrowDownSvg: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 22a2 2 0 01-1.41-.59l-10-10a2 2 0 012.82-2.82L16 17.17l8.59-8.58a2 2 0 012.82 2.82l-10 10A2 2 0 0116 22z"></path>
    </svg>
  );
};

export default ArrowDownSvg;
