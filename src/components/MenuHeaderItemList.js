import React from "react";
import MenuHeaderItem from "./MenuHeaderItem.js";

export default ({ menuTypes }) => {
  return (
    <ul>
      {menuTypes.map(type => {
        return <MenuHeaderItem type={type} key={type} />;
      })}
    </ul>
  );
};
