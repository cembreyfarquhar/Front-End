import React, { useState } from "react";

import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND;

function SignIn({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>Welcome back. Log in below</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          logIn();
        }}
      >
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Sign In</button>
      </form>
    </>
  );

  function logIn() {
    axios
      .post(`${baseUrl}/api/auth/login`, {
        username,
        password
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        window.location.reload(false);
      })
      .catch(console.error);
  }

  function register() {
    axios
      .post(`${baseUrl}/api/auth/register`, {
        username,
        password
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(console.error);
  }
}

export default SignIn;
