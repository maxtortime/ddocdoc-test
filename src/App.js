import React, { Component } from "react";
import Header from "./components/Header/Header";
import CurationListContainer from "./container/CurationListContainer/CurationListContainer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  getBaseUrl = () => "https://event.ddocdoc.com/";
  getMenuTypes = () => ["홈", "인기", "신규", "시술별", "기획전"];

  render() {
    return (
      <div className="App">
        <Header baseUrl={this.getBaseUrl()} menuTypes={this.getMenuTypes()} />
        <CurationListContainer />
        <ScrollToTopButton />
        <Footer />
      </div>
    );
  }
}

export default App;
