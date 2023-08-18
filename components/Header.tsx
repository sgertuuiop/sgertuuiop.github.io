import React, { FC } from "react";
import Link from "next/link";

type props = {
  title: string;
};

const Header: FC<props> = ({ title }) => {
  return (
    <header role="banner" className="cr-header">
      <h1 className="cr-header">
        <img
          className="cr-header-image"
          alt=""
          width="32"
          height="32"
          src="/assets/favicon.png"
        />
        <br />
        <Link href="/" className="cr-header-link">
          <b>CHRISTIAN RODRIGUEZ</b>
        </Link>{" "}
        <span aria-hidden>→&nbsp;</span>
        {title}
      </h1>
    </header>
  );
};

export default Header;
