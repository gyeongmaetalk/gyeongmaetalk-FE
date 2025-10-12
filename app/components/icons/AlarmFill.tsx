import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.28}
      d="M5.573 3.645C6.621 2.406 8.146 1.75 10 1.75s3.379.656 4.427 1.895c1.033 1.222 1.531 2.924 1.531 4.897v.625c0 2.054.57 3.27 1.38 4.056a.99.99 0 0 1 .238 1.049.97.97 0 0 1-.91.645H3.334a.97.97 0 0 1-.909-.645.99.99 0 0 1 .237-1.049c.811-.786 1.38-2.002 1.38-4.056v-.625c0-1.973.499-3.675 1.532-4.897M7.583 17.5a.75.75 0 0 1 .75-.75h3.334a.75.75 0 0 1 0 1.5H8.333a.75.75 0 0 1-.75-.75"
    />
  </svg>
);
export default SvgAlarmFill;
