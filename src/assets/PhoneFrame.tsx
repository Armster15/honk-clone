import React from "react";
import { motion } from "framer-motion";
import type { SVGProps } from "react-html-props";

export const PhoneFrame = motion(
  React.forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
    <svg
      preserveAspectRatio="none"
      x="0px"
      y="0px"
      width="558px"
      height="1101px"
      viewBox="0 0 558 1101"
      ref={ref}
      {...props}
    >
      <path
        fill="#363636"
        d="M498.35 159.25q0-31.2-.9-41.85-1.3-16-6.1-25.35-4.6-9-11.75-16.2-7.1-7.15-16.1-11.7-9.4-4.8-25.35-6.1-10.6-.9-41.85-.9H161.8q-31.2 0-41.85.9-15.95 1.3-25.35 6.1-9 4.55-16.1 11.7-7.15 7.2-11.8 16.2-4.8 9.35-6.05 25.35-.9 10.65-.9 41.85v40.25h-1.8q-1.2 0-1.2 1.2v33.15q0 1.2 1.2 1.2h1.8v28.85h-1.8q-1.2 0-1.2 1.2v66.25q0 .5.35.9.3.35.85.35h1.8v15.3h-1.8q-.55 0-.85.4-.35.35-.35.9v66.2q0 1.2 1.2 1.2h1.8v438.3q0 31.3.9 41.95 1.25 15.95 6.05 25.3 4.65 9 11.8 16.15 7.1 7.2 16.1 11.75 9.4 4.75 25.35 6.1 10.65.8 41.85.8h234.5q31.25 0 41.85-.8 15.95-1.35 25.35-6.1 9-4.55 16.1-11.75 7.2-7.15 11.75-16.15 4.8-9.35 6.1-25.3.9-10.65.9-41.95V395.15h1.8q.5 0 .9-.4.35-.3.35-.8v-104.3q0-.55-.35-.85-.4-.35-.9-.35h-1.8v-129.2M410.1 79.3q20.45 0 27.45.6 10.4.8 16.55 3.9 12 6.2 18.25 18.2 3.05 6.15 3.95 16.6.55 6.95.55 27.45V868.2q0 20.4-.55 27.35-.9 10.45-3.95 16.55-6.25 12.15-18.25 18.25-6.15 3.15-16.55 3.95-7 .6-27.45.6H148q-20.45 0-27.45-.6-10.4-.8-16.55-3.95-12-6.1-18.25-18.25-3.05-6.1-3.9-16.55-.6-6.95-.6-27.35V146.05q0-20.5.6-27.45.85-10.45 3.9-16.6Q92 90 104 83.8q6.15-3.1 16.55-3.9 7-.6 27.45-.6h20.45q1.5 0 1.95.15 1.05.35 1.45 1.4.15.45.15 1.95 0 7.15.15 9.55.2 3.65 1.05 5.9 1.5 4.05 4.55 7.15 3.1 3.15 7.15 4.55 2.25.85 5.9 1.05 2.5.15 9.55.15h157.4q7.1 0 9.5-.15 3.7-.2 5.95-1.05 4.05-1.4 7.1-4.55 3.15-3.1 4.6-7.15.8-2.25 1.05-5.9.15-2.4.15-9.55 0-1.5.15-1.95.35-1.05 1.4-1.4.45-.15 1.95-.15h20.5z"
      />
    </svg>
  ))
);
