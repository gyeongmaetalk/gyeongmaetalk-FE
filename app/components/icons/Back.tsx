import * as React from "react";

import type { SVGProps } from "react";
const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#171719"
      d="M10.136.363a.9.9 0 0 1 0 1.273L2.772 8.999l7.364 7.364a.9.9 0 1 1-1.273 1.273l-8-8a.9.9 0 0 1 0-1.273l8-8a.9.9 0 0 1 1.273 0"
    />
  </svg>
);
export default SvgBack;
