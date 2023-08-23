import React, { FC } from "react";
import Link from "next/link";

type props = {
  href: string;
  title: string;
  rel?: string;
  icon?: string;
};

const Button: FC<props> = ({ href, title, icon }) => {
  return (
    <>
      <Link className="cr-button" href={href}>
        <i className={"ti ti-" + icon} /> {title}
      </Link>
      <br />
    </>
  );
};

const ExtButton: FC<props> = ({ href, title, rel, icon }) => {
  return (
    <>
      <a
        className="cr-button"
        href={href}
        rel={rel ? rel + " external" : "external"}
      >
        <i className={"ti ti-" + icon} /> {title}
        <div className="cr-button-icon">
          <i className="ti ti-external-link" />
        </div>
      </a>
      <br />
    </>
  );
};

const HomeButton = ({}) => {
  return (
    <>
      <Link className="cr-button" href="/">
        <i className="ti ti-home" /> Go home
        <div className="cr-button-icon">
          <i className="ti ti-arrow-back-up" />
        </div>
      </Link>
      <br />
    </>
  );
};

export { Button, ExtButton, HomeButton };
