import React, { Component, Fragment } from "react";
import { TABS_BTN } from "./TABS_BTN";

const Tab1 = () => <h1>Text of tab1</h1>;

const Tab2 = () => <h1>Text of tab2</h1>;

const Tab3 = () => <h1>Text of tab3</h1>;

const people = ['Jack', 'Max', 'Leo', 'Alex'];



class App extends Component {
  state = {
    activeTab: 1,
  };

  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute("data-name"),
    });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Fragment>
        {TABS_BTN.map(({ dataName, title, icon }) => (
            <button
                key={`${dataName}-${title}`}
                data-name={dataName}
                onClick={this.handleTab}
            >{icon}{title}</button>
        ))}
        {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
        <div>
          {`Active tab is: ${
            activeTab === 1 ? "first" : activeTab === 2 ? "second" : "third"
          }`}
        </div>
        <ul>
            {people.map((person, index) => (
                <li key={index}>{person}</li>
            ))}
        </ul>
      </Fragment>
    );
  }
}

export default App;