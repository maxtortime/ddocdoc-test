import React from "react";
import MenuHeaderItem from "./MenuHeaderItem.js";

export default props => {
  const items = props.menuTypes.map(type => {
    return <MenuHeaderItem type={type} key={type} />;
  });
  return <ul>{items}</ul>;
};
