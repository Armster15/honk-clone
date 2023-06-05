import React from "react";
import { motion } from "framer-motion";
import type { SVGProps } from "react-html-props";

export const Circle = motion(
  React.forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      ref={ref}
      {...props}
    >
      <path
        fill="#F3F4F6"
        d="M10.95 21.874c6.049 0 10.952-4.896 10.952-10.937C21.902 4.897 16.999 0 10.95 0 4.903 0 0 4.897 0 10.937c0 6.04 4.903 10.937 10.95 10.937z"
        opacity="0.4"
      ></path>
    </svg>
  ))
);
