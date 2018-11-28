import React, { Component } from "react";
import axios from "axios";
import CurationListItem from "./CurationListItem.js";

class CurationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get(window.location.href + "api-mock.json").then(res => {
      const items = res.data.items;
      this.setState({
        items: items
      });
    });
  }

  render() {
    const listItems = this.state.items.map(item => {
      return <CurationListItem key={item.groupId._id} info={item} />;
    });

    return (
      <div className="content">
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default CurationList;
