import * as React from "react";
import type { SVGProps } from "react";
const SvgKakao = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={19}
    fill="none"
    viewBox="0 0 18 19"
    {...props}
  >
    <g clipPath="url(#kakao_svg__a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M9 1.444c-4.71 0-9 3.786-9 6.99 0 2.4 1.558 4.516 3.931 5.774l-.998 3.666c-.089.325.28.583.563.396l4.377-2.905A12 12 0 0 0 9 15.422c4.97 0 9-3.129 9-6.989 0-3.203-4.03-6.989-9-6.989"
        clipRule="evenodd"
        opacity={0.902}
      />
    </g>
    <defs>
      <clipPath id="kakao_svg__a">
        <path fill="#fff" d="M0 .5h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKakao;
