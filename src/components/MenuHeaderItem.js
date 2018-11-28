import React from "react";
import './MenuHeaderItem.css'

export default props => {
  const hrefBase = "https://event.ddocdoc.com/";
  const hrefByType = {
    홈: null,
    인기: "pop",
    신규: "new",
    시술별: "category/list"
  };
  const hrefUrl =
    props.type === "기획전" ? "/" : hrefBase + hrefByType[props.type];
  const className =
    props.type === "기획전"
      ? "menu-header-item menu-header-active-item"
      : "menu-header-item";
  const newIcon =
    props.type === "기획전" ? (
      <div className="icon icon-curation-new-badge new-items-icon" />
    ) : null;
  const anchorContent =
    props.type === "기획전" ? (
      <span className="red-point">{props.type}</span>
    ) : (
      props.type
    );
  const anchor = <a href={hrefUrl}>{anchorContent}</a>;

  return (
    <li className={className}>
      <div>
        {newIcon}
        {anchor}
      </div>
    </li>
  );
};
