import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import "./app.css";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasErrors: false
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch(error, errorInfo) {
    console.log("dsadsa");
    this.setState({ hasErrors: true });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return this.state.hasErrors ? (
      <ErrorIndicator />
    ) : (
      <div className="stardb-app">
        <Header />
        {planet}

        <div className="container mb2 button-row" style={{ padding: 0 }}>
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>
        <PeoplePage />
      </div>
    );
  }
}
