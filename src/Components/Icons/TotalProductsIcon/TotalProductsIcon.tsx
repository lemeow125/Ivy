import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function TotalProductsIcon(props: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-packages"
      width={props.size + "px"}
      height={props.size + "px"}
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke={props.color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z"></path>
      <path d="M2 13.5v5.5l5 3"></path>
      <path d="M7 16.545l5 -3.03"></path>
      <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z"></path>
      <path d="M12 19l5 3"></path>
      <path d="M17 16.5l5 -3"></path>
      <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5"></path>
      <path d="M7 5.03v5.455"></path>
      <path d="M12 8l5 -3"></path>
    </svg>
  );
}
