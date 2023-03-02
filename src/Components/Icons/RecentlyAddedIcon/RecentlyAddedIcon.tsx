import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function RecentlyAddedIcon(props: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-book-upload"
      width={props.size + "vh"}
      height={props.size + "vh"}
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke={props.color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"></path>
      <path d="M11 16h-5a2 2 0 0 0 -2 2"></path>
      <path d="M15 16l3 -3l3 3"></path>
      <path d="M18 13v9"></path>
    </svg>
  );
}
