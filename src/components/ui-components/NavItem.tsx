import React from "react";
import Emoji from "./Emoji";
import Link from "next/link";
import Button from "./Button";
import { NavItem } from "../../types/types";

const NavItem = (props: NavItem) => {
  const isCTA = props.label === "Start a Project";

  return (
    <li className="p-1 flex items-center">
      <Link
        className={`font-semibold block transition-all ${
          isCTA
            ? "bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 rounded-full"
            : "p-2 m-1 hover:bg-gray-100 hover:text-black rounded-md"
        }`}
        href={props.path}
        key={props.path + props.label + props.emoji}>
        {props.label}
        {props.emoji && <Emoji symbol={props.emoji} label={props.label} />}
      </Link>
    </li>
  );
};

export default NavItem;
