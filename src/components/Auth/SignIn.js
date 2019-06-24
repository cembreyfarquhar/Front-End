import React, { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2>Welcome back. Log in below</h2>
      <form>
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
      </form>
      <h3>
        Don't have an account? Click <button>here</button> to sign up
      </h3>
    </>
  );
}

export default SignIn;
