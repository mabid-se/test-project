import type { FC, SVGProps } from "react";

const ViewSvg: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={16}
      height={14}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.14 7s2.494-4 6.858-4c4.363 0 6.857 4 6.857 4s-2.494 4-6.857 4C3.634 11 1.14 7 1.14 7z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.998 8.5c.947 0 1.714-.672 1.714-1.5s-.767-1.5-1.714-1.5-1.715.672-1.715 1.5.768 1.5 1.715 1.5z"
      ></path>
    </svg>
  );
};

export default ViewSvg;
