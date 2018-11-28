import React from "react";
import MenuHeaderItemList from "./MenuHeaderItemList.js";
import MainLogo from "./MainLogo.js";
import HeaderButton from "./HeaderButton.js";

export default props => {
  return (
    <header className="App-header">
      <div className="header-inner">
        <div className="page-header">
          <MainLogo baseUrl={props.baseUrl} />
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
