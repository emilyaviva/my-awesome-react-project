import React from "react";
import "./styles.scss";

import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="App">
          <h1>Hello, world!</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
