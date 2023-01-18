import React from "react";
import "./Register.scss";
import Image from "./Image.svg";

export default function Register() {
  return (
    <>
      <div className="container">
        <div className="left">
          <div>
          <h3>Music keeps you motivated</h3>
          <div className="image">
            <img src={Image} width={350} />
          </div>
          </div>

        </div>
        <div className="right">
          <h3>Create an Account</h3>

          <form className="form">
            <div className="form__group">
              <label htmlFor="firstname">First Name</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form__group">
              <label htmlFor="lastname">Last Name</label>
              <input id="password" name="password" required />
            </div>
            <div className="form__group">
              <label htmlFor="lastname">Email</label>
              <input id="email" name="email" required />
            </div>

            <div className="form__group">
              <label htmlFor="date">Date of Birth</label>
              <input type="dateTime" id="date" name="date" required />
            </div>

            <div className="form__group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form__group">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            <div className="form__buttons">
              <button type="submit">Create account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
