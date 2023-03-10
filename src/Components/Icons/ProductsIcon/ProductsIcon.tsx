import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function ProductsIcon(props: props) {
  return (
    <svg
      width={props.size + "px"}
      height={props.size + "px"}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={props.color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M11 6h9"></path>
      <path d="M11 12h9"></path>
      <path d="M12 18h8"></path>
      <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"></path>
      <path d="M6 10v-6l-2 2"></path>
    </svg>
  );
}
