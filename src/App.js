import React, { Component } from "react";
import MusicContainer from "./containers/MusicContainer";
import MusicDetail from "./components/MusicDetail";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <MusicContainer />
        <MusicDetail />
      </>
    );
  }
}

export default App;
