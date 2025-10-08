import * as React from "react";
import type { SVGProps } from "react";
const SvgCompany = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="#FEECFB" d="M0 0h16v16H0z" />
    <path
      fill="#E846CD"
      fillRule="evenodd"
      d="M3.911 1.4H8.09c.26 0 .492 0 .683.015.204.017.415.054.621.159a1.6 1.6 0 0 1 .7.699c.104.206.141.417.158.62.016.192.016.423.016.684v3.156h1.822c.26 0 .492 0 .683.015.204.017.415.054.621.16a1.6 1.6 0 0 1 .7.698c.104.206.141.417.158.621.016.192.016.423.016.684v5.688h-3.334v-2.766a.6.6 0 0 0-1.2 0v2.766h-8V3.577c0-.26 0-.492.016-.683.017-.204.054-.415.159-.621a1.6 1.6 0 0 1 .699-.7c.206-.104.417-.141.62-.158.192-.016.423-.016.684-.016m.156 5.933a.6.6 0 0 1 .6-.6h2.666a.6.6 0 1 1 0 1.2H4.667a.6.6 0 0 1-.6-.6m0-2.667a.6.6 0 0 1 .6-.6h2.666a.6.6 0 0 1 0 1.2H4.667a.6.6 0 0 1-.6-.6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompany;
