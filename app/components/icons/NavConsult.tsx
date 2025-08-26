import * as React from "react";

import type { SVGProps } from "react";
const SvgNavConsult = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="nav-consult_svg__a"
      width={25}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.5 0h24v24H.5z" />
    </mask>
    <g mask="url(#nav-consult_svg__a)">
      <path
        fill="currentColor"
        d="M21.5 20.6a.9.9 0 0 1-.375-.075 1 1 0 0 1-.325-.225L18.5 18h-10q-.824 0-1.412-.587A1.93 1.93 0 0 1 6.5 16v-1h11q.824 0 1.413-.588.587-.587.587-1.412V6h1q.824 0 1.413.588.587.587.587 1.412v11.575q0 .45-.3.738a.98.98 0 0 1-.7.287m-18-5a.98.98 0 0 1-.7-.287.98.98 0 0 1-.3-.738V4q0-.824.587-1.412A1.93 1.93 0 0 1 4.5 2h11q.824 0 1.413.587.587.588.587 1.413v7q0 .825-.587 1.412A1.93 1.93 0 0 1 15.5 13h-9l-2.3 2.3q-.15.15-.325.225a.9.9 0 0 1-.375.075"
      />
    </g>
  </svg>
);
export default SvgNavConsult;
