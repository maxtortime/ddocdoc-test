import React, { Component } from 'react';
import axios from 'axios';
import CurationListItem from './CurationListItem.js'
import MenuHeaderItem from './MenuHeaderItem.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('/response.json').then(res => {
      const items = res.data.items;
      this.setState({
        items: items,
      });
    });
  }

  render() {
    const listItems = this.state.items.map(item => {
      return (
        <CurationListItem 
          key={item.groupId._id}
          info={item}
        />
      )
    });

    return (
      <div className="App">
        <header className='App-header'>
          <div className="header-inner">
            <div className="page-header">
              <h1>
                <a href="https://event.ddocdoc.com">
                  <i className="icon icon-ddocdoc-bi"></i>
                </a>
              </h1>
              <div className="page-header-tool-area">
                <a 
                  className="page-header-button page-header-search" 
                  href="https://event.ddocdoc.com/search">
                  <i className="icon icon-search"></i>
                  <span className="sr-only">검색</span>
                </a>
                <a 
                  className="page-header-button page-header-bookmark" 
                  href="https://event.ddocdoc.com/bookmark">
                  <i className="icon icon-heart-empty"></i>
                  <span className="sr-only">북마크</span>
                </a>
              </div>
            </div>
            <div className="menu-header">
              <ul>
                <MenuHeaderItem menuText="홈" menuHref="https://event.ddocdoc.com"/>
                <MenuHeaderItem menuText="인기" menuHref="https://event.ddocdoc.com/pop"/>
                <MenuHeaderItem menuText="신규" menuHref="https://event.ddocdoc.com/pop"/>
                <MenuHeaderItem menuText="시술별" menuHref="https://event.ddocdoc.com/pop"/>
                <MenuHeaderItem menuText="기획전" menuHref="https://event.ddocdoc.com/pop"/>
              </ul>
            </div>
          </div>
        </header>
        <div className="content">
          {listItems}
        </div>
      </div>
    );
  }
}

export default App;
