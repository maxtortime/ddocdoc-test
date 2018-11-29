import React from "react";
import MenuHeaderItemList from "./MenuHeaderItemList/MenuHeaderItemList";
import HeaderButton from "./HeaderButton/HeaderButton";
import "./Header.css";

export default ({ baseUrl, menuTypes }) => {
  const headerButtonTypes = [
    { name: "search", keyword: "검색" },
    { name: "bookmark", keyword: "즐겨찾기" }
  ];

  return (
    <header className="App-header">
      <div className="header-inner">
        <div className="page-header">
          <h1>
            <a href={baseUrl}>
              <i className="icon icon-ddocdoc-bi" />
            </a>
          </h1>
          <div className="page-header-tool-area">
            {headerButtonTypes.map(({ name, keyword }, idx) => (
              <HeaderButton
                key={idx}
                name={name}
                baseUrl={baseUrl}
                keyword={keyword}
              />
            ))}
          </div>
        </div>
        <div className="menu-header">
          <MenuHeaderItemList menuTypes={menuTypes} />
        </div>
      </div>
    </header>
  );
};
