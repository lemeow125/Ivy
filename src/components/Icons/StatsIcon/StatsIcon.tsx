import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function StatsIcon(props: props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-align-box-bottom-center"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke={props.color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
        <path d="M9 15v2"></path>
        <path d="M12 11v6"></path>
        <path d="M15 13v4"></path>
      </svg>
    </div>
  );
}
