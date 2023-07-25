import React, { FC } from "react";

type props = {
  href: string;
  title: string;
  rel: string;
};

const ExtButton: FC<props> = ({ href, title, rel }) => {
  return (
    <div>
      <a className="cr-button" href={href} rel={rel + " external"}>
        {title}
        <div className="cr-button-icon">
          <i className="bi bi-arrow-up-right-square" />
        </div>
      </a>
      <br />
    </div>
  );
};

export default ExtButton;
