import React from "react";

const Links = () => {
  return (
    <div className="flex flex-col items-center">
      <LinkIcon label="email" />
      <LinkIcon label="linkedin" />
      <LinkIcon label="spotify" />
    </div>
  );
};

const LinkIcon = (props: { label: string }) => {
  return <div>{props.label}</div>;
};

export default Links;
