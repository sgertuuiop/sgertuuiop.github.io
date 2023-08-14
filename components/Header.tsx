import React, { FC } from "react";
import Link from "next/link";

type props = {
  title: string;
};

const Header: FC<props> = ({ title }) => {
  return (
    <div>
      <div className="cr-header">
        <p>
          <Link href="/" className="cr-header cr-header-link">
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
        </p>
      </div>
    </div>
  );
};

export default Header;
