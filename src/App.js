import React, { Component } from "react";
import axios from "axios";
import CurationListItem from "./CurationListItem.js";
import MenuHeaderItem from "./MenuHeaderItem.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleClick() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    axios.get("/v2/eventBanner?populate=true").then(res => {
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
      <div className="App">
        <header className="App-header">
          <div className="header-inner">
            <div className="page-header">
              <h1>
                <a href="https://event.ddocdoc.com">
                  <i className="icon icon-ddocdoc-bi" />
                </a>
              </h1>
              <div className="page-header-tool-area">
                <a
                  className="page-header-button page-header-search"
                  href="https://event.ddocdoc.com/search"
                >
                  <i className="icon icon-search" />
                  <span className="sr-only">검색</span>
                </a>
                <a
                  className="page-header-button page-header-bookmark"
                  href="https://event.ddocdoc.com/bookmark"
                >
                  <i className="icon icon-heart-empty" />
                  <span className="sr-only">북마크</span>
                </a>
              </div>
            </div>
            <div className="menu-header">
              <ul>
                <MenuHeaderItem
                  menuText="홈"
                  menuHref="https://event.ddocdoc.com"
                />
                <MenuHeaderItem
                  menuText="인기"
                  menuHref="https://event.ddocdoc.com/pop"
                />
                <MenuHeaderItem
                  menuText="신규"
                  menuHref="https://event.ddocdoc.com/new"
                />
                <MenuHeaderItem
                  menuText="시술별"
                  menuHref="https://event.ddocdoc.com/category/list"
                />
                <MenuHeaderItem menuText="기획전" menuHref="/" />
              </ul>
            </div>
          </div>
        </header>
        <div className="content">
          <ul>{listItems}</ul>
        </div>
        <div>
          <aside className="mobile-only">
            <div className="right-bottom-tools">
              <div className="right-bottom-tools-top-button">
                <span
                  className="right-bottom-tools-top-button-wrap"
                  onClick={this.handleClick}
                >
                  <i className="icon icon-top" />
                </span>
                <span className="sr-only">Top</span>
              </div>
            </div>
          </aside>
        </div>
        <footer className="footer">
          <h5 className="footer-bi-link">
            <a href="https://www.ddocdoc.com">
              <i className="icon icon-ddocdoc-bi-gray" />
              <span className="sr-only">똑닥</span>
            </a>
          </h5>
          <ul className="footer-link-list">
            <li>
              <a href="https://www.ddocdoc.com/termsofservice" target="terms1">
                이용약관
              </a>
            </li>
            <li>
              <a href="https://www.ddocdoc.com/privacypolicy" target="terms2">
                개인정보취급방침
              </a>
            </li>
            <li>
              <a href="https://www.ddocdoc.com/contact?from=ddocdoc">
                제휴문의
              </a>
            </li>
          </ul>
          <small className="footer-copyright">
            Copyright © B-bros Corp. All rights reserved.
          </small>
        </footer>
      </div>
    );
  }
}

export default App;
