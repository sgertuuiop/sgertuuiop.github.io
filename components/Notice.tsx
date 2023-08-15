import React, { FC } from "react";

type props = {
  title: string;
  text: string;
};

const Notice: FC<props> = ({ title, text }) => {
  return (
    <p className="cr-notice">
      <strong>{title}:</strong> {text}
    </p>
  );
};

export default Notice;
