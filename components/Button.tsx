import React, { FC } from "react";
import Link from "next/link";

type props = {
  href: string;
  title: string;
  rel?: string;
};

const Button: FC<props> = ({ href, title }) => {
  return (
    <div>
      <Link className="cr-button" href={href}>
        {title}
      </Link>
      <br />
    </div>
  );
};

const ExtButton: FC<props> = ({ href, title, rel }) => {
  return (
    <div>
      <a className="cr-button" href={href} rel={rel + " external"}>
        {title}
        <div className="cr-button-icon">
          <i className="ti ti-external-link" />
        </div>
      </a>
      <br />
    </div>
  );
};

const HomeButton = ({}) => {
  return (
    <div>
      <Link className="cr-button" href="/">
        Go home
        <div className="cr-button-icon">
          <i className="ti ti-home" />
        </div>
      </Link>
      <br />
    </div>
  );
};

export { Button, ExtButton, HomeButton };
