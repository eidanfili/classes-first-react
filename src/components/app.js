import React, { Component } from "react";
import NavBar from "./NavBar";

const greeting = "Hello Eidan";
const loggedIn = true;

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
      </div>
    );
  }
}
