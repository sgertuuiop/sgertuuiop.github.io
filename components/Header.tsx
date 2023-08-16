import React, { FC } from "react";
import Link from "next/link";

type props = {
  title: string;
};

const Header: FC<props> = ({ title }) => {
  return (
    <div>
      <header role="banner" className="cr-header">
        <h1 className="cr-header">
          <Link href="/" className="cr-header-link">
            <img
              className="cr-header-image"
              alt=""
              width="32"
              height="32"
              src="/assets/favicon.png"
            />
            <br />
            <b>CHRISTIAN RODRIGUEZ</b>
          </Link>{" "}
          -&gt; {title}
        </h1>
      </header>
    </div>
  );
};

export default Header;
