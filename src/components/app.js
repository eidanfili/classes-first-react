import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const greeting = "Hello Eidan";
const loggedIn = true;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catData: [],
    };
  }

  componentDidMount() {
    axios.get("https://catfact.ninja/breeds").then((response) => {
      console.log(this.state.catData);
      this.state.catData = response.data.data;
      console.log(this.state.catData);
    });
  }

  render() {
    return (
      <div className="app">
        <NavBar />
      </div>
    );
  }
}
