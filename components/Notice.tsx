import React, { FC } from "react";
import Link from "next/link";

type props = {
  text: string;
};

const Notice: FC<props> = ({ text }) => {
  return (
    <div className="cr-notice">
      <h2>
        <b>
          <i className="bi bi-exclamation-triangle-fill"></i> NOTICE
        </b>
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default Notice;
