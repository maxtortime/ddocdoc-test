import React from "react";

export default props => {
  const typeToKorean = {
    search: "검색",
    bookmark: "즐겨찾기"
  };
  return (
    <a
      className={"page-header-button page-header-" + props.type}
      href={props.baseUrl + props.type}
    >
      <i className={"icon icon-" + props.type} />
      <span className="sr-only">{typeToKorean[props.type]}</span>
    </a>
  );
};
