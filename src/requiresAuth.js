import React from "react";
import SignIn from "";

export default function(GoodComponent) {
  class Auth extends React.Component {
    render() {
      if (localStorage.getItem("token")) {
        return <h1>Good</h1>;
      } else {
        return <h1>Hello</h1>;
      }
    }
  }
  return;
}
