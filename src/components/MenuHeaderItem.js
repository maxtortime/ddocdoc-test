import React from "react";
import "./MenuHeaderItem.css";

export default ({ type }) => {
  const isPromotion = type === "기획전";

  const hrefBase = "https://event.ddocdoc.com/";

  const hrefByType = {
    홈: null,
    인기: "pop",
    신규: "new",
    시술별: "category/list"
  };

  const hrefUrl = isPromotion ? "/" : `${hrefBase}${hrefByType[type]}`;

  const className = isPromotion
    ? "menu-header-item menu-header-active-item"
    : "menu-header-item";

  const anchorContent = isPromotion ? (
    <span className="red-point">{type}</span>
  ) : (
    type
  );

  const renderIcon = () =>
    isPromotion && (
      <div className="icon icon-curation-new-badge new-items-icon" />
    );
  const renderAnchor = () => <a href={hrefUrl}>{anchorContent}</a>;

  return (
    <li className={className}>
      <div>
        {renderIcon()}
        {renderAnchor()}
      </div>
    </li>
  );
};
