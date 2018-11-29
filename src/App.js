import React, { Component } from "react";
import Header from "./components/Header/Header.js";
import CurationListContainer from "./container/CurationListContainer/CurationListContainer.js";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

class App extends Component {
  state = {
    baseUrl: "https://event.ddocdoc.com/",
    menuTypes: ["홈", "인기", "신규", "시술별", "기획전"]
  };

  render() {
    return (
      <div className="App">
        <Header baseUrl={this.state.baseUrl} menuTypes={this.state.menuTypes} />
        <CurationListContainer />
        <ScrollToTopButton />
        <Footer />
      </div>
    );
  }
}

export default App;
