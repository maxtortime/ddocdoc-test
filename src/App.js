import React, { Component } from "react";
import Header from "./components/Header.js";
import CurationList from "./components/CurationList.js";
import ScrollToTopButton from "./components/ScrollToTopButton.js";
import Footer from "./components/Footer.js";
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
        <CurationList />
        <ScrollToTopButton />
        <Footer />
      </div>
    );
  }
}

export default App;
