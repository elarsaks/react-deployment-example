import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Automate
          <span>React</span>
          App Deployment with
          <span>GitHub Actions</span>
          <a
            href="https://www.linkedin.com/pulse/automate-react-app-deployment-github-actions-elar-saks-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Article
          </a>{" "}
          <br />
          <a
            href="https://github.com/elarsaks/react-deployment-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </p>
      </div>
    );
  }
}

export default App;
