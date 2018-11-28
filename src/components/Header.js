import React from "react";
import MenuHeaderItemList from "./MenuHeaderItemList.js";
import HeaderButton from "./HeaderButton.js";
import "./Header.css"

export default props => {
  return (
    <header className="App-header">
      <div className="header-inner">
        <div className="page-header">
          <h1>
            <a href={props.baseUrl}>
              <i className="icon icon-ddocdoc-bi" />
            </a>
          </h1>
          <div className="page-header-tool-area">
            <HeaderButton type="search" baseUrl={props.baseUrl} />
            <HeaderButton type="bookmark" baseUrl={props.baseUrl} />
          </div>
        </div>
        <div className="menu-header">
          <MenuHeaderItemList menuTypes={props.menuTypes} />
        </div>
      </div>
    </header>
  );
};
