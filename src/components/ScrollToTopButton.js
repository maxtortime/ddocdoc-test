import React, { Component } from "react";

class ScrollToTopButton extends Component {
  handleClick() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
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
    );
  }
}

export default ScrollToTopButton;
