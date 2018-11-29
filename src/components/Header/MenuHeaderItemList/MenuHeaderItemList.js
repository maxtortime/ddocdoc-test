import React from "react";
import MenuHeaderItem from "./MenuHeaderItem/MenuHeaderItem";

export default ({ menuTypes }) => {
  return (
    <ul>
      {menuTypes.map(type => {
        return <MenuHeaderItem type={type} key={type} />;
      })}
    </ul>
  );
};
