import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function AppLogo(props: props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-plant-2"
        width={props.size + "vh"}
        height={props.size + "vh"}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke={props.color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M2 9a10 10 0 1 0 20 0"></path>
        <path d="M12 19a10 10 0 0 1 10 -10"></path>
        <path d="M2 9a10 10 0 0 1 10 10"></path>
        <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"></path>
        <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"></path>
      </svg>
    </div>
  );
}
