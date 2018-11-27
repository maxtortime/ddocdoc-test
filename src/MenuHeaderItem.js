import React from "react";

export default props => {
  let className = "menu-header-item";
  let newIcon = "";
  let anchor = <a href={props.menuHref}>{props.menuText}</a>;

  if (props.menuText === "기획전") {
    className += " menu-header-active-item";
    newIcon = <div className="icon icon-curation-new-badge new-items-icon" />;

    anchor = (
      <a href={props.menuHref}>
        <span className="red-point">{props.menuText}</span>
      </a>
    );
  }

  return (
    <li className={className}>
      <div>
        {newIcon}
        {anchor}
      </div>
    </li>
  );
};
