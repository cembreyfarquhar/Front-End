import React from "react";

import SignIn from "./SignIn";

const requiresAuth = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      // if user is not logged in, return Login page
      if (!localStorage.getItem("token")) {
        return <SignIn {...this.props} />;
      }
      return <Component {...this.props} />;
    }
  };

export default requiresAuth;
