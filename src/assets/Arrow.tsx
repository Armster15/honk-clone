import React from "react";
import { motion } from "framer-motion";
import type { SVGProps } from "react-html-props";

export const Arrow = motion(
  React.forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="32"
      fill="none"
      viewBox="0 0 37 32"
      ref={ref}
      {...props}
    >
      <path
        fill="#FFE53D"
        d="M5.014 24.08c2.22 2.761 4.326 3.97 7.456 6.385 1.878.92 4.269 1.84 6.374 1.438 3.074-.575 5.521-4.141.171-9.72H31.31c3.13 0 5.691-2.589 5.691-5.752 0-3.164-2.561-5.752-5.691-5.752H19.812c3.756-4.256 3.13-8.282 1.138-9.547-2.618-1.726-4.325-1.208-6.886-.23-2.561.977-4.667 2.645-6.602 4.6C-4.376 16.202.29 18.33 5.014 24.082z"
      ></path>
    </svg>
  ))
);
