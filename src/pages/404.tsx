import React from "react";
import Link from "next/link";
import data from "../data/useData";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="md:text-9xl text-customBlack dark:text-white">404</h1>
      <h2 className="md:text-5xl text-customBlack dark:text-white">
        Ooops! This page cannot be found 😅
      </h2>
      <Link
        className="md:text-3xl border border-zinc-500 hover:bg-zinc-500 hover:text-white px-6 py-3 transition-colors text-customBlack dark:text-white"
        href={"/"}>
        {data.pages.notFound.message}
      </Link>
    </div>
  );
}

export default NotFound;
