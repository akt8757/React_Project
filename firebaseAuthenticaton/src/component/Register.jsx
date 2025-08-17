import React, { useState } from "react";
import { registerWithEmailPassword } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerWithEmailPassword(email, password);
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button onClick={handleSubmit}>Register</button>
      </form>

      <div>
        <p>
          Already have an account?
          <br />
          <NavLink to="/Login">Sign in</NavLink>
        </p>
      </div>
    </div>
  );
}
