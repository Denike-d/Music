import React from "react";
import "./Login.scss";
import Image from "./Image.svg";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="left">
          <h3>Music keeps you motivated</h3>
          <div className="image">
            <img src={Image} width={350} />
          </div>
        </div>
        <div className="right">
          <div>
          <h3>Login</h3>
          <div>
          <form className="form">
            <div className="form__group">
              <label htmlFor="lastname">Email</label>
              <input id="email" name="email" required />
            </div>

            <div className="form__group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            <div className="form__buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
