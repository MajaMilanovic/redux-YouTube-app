import React, { Component } from "react";
import "../../css/app.css";
import SearchBar from "../../containers/SearchBar";
import SingleVideo from "../../containers/SingleVideo";
import VideoList from "../../containers/VideoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper-single-video">
          <SearchBar />
          <SingleVideo />
        </div>
        <VideoList />
      </div>
    );
  }
}

export default App;
