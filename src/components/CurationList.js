import React, { Component } from "react";
import { getPromotionListApi } from "../api";
import CurationListItem from "./CurationListItem.js";

class CurationList extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    getPromotionListApi().then(res => {
      const items = res.data.items;
      this.setState({ items });
    });
  }

  render() {
    const listItems = this.state.items.map(item => (
      <CurationListItem key={item.groupId._id} info={item} />
    ));

    return (
      <div className="content">
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default CurationList;
