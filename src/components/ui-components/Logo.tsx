import React from "react";
import Link from "next/link";
import identity from "../../data/useIdentity";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="font-semibold">
        {identity.meta.siteName}
      </Link>
    </div>
  );
};

export default Logo;
