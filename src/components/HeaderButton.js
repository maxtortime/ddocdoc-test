import React from "react";
import "./HeaderButton.css";

export default ({ baseUrl, keyword, name }) => {
  return (
    <a
      className={`page-header-button page-header-${name}`}
      href={`${baseUrl}${name}`}
    >
      <i className={`icon icon-${name}`} />
      <span className="sr-only">{keyword}</span>
    </a>
  );
};
