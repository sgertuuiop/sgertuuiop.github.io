import React, { FC } from "react";

type props = {
  title: string;
  text: string;
};

const Notice: FC<props> = ({ title, text }) => {
  return (
    <p className="cr-notice">
      <b>{title}:</b> {text}
    </p>
  );
};

export default Notice;
