import React from "react";
import requiresAuth from "./components/Auth/requiresAuth";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sleep Tracker Pro</h1>
      </header>
    </div>
  );
};

export default requiresAuth(App);
