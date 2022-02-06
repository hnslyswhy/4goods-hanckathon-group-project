import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginPage.scss";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const LoginPage = () => {
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    let accountInfo = {
      account: e.target.account.value,
      password: e.target.password.value,
    };
    // axios.post(`${baseUrl}/auth/login`, accountInfo);
    axios
      .post("http://localhost:8080/auth/login", accountInfo)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          sessionStorage.setItem("token", response.data.token);
          history.push("/profile");
        }
        if (response.status === 204) {
          alert("Email and Password Not Match");
        }
      })
      .catch((e) => {
        history.push("/signup");
        // how to check if it is failed or account does not exist ?
      });
  };

  return (
    <main className="loginPage">
      <h1 className="loginPage__heading">Please Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-form__group">
          <label className="login-form__label" htmlFor="username">
            Email:
          </label>
          <input className="login-form__input" type="email" name="account" />
        </div>
        <div className="login-form__group">
          <label className="login-form__label" htmlFor="password">
            Password:
          </label>
          <input
            className="login-form__input"
            type="password"
            name="password"
          />
        </div>
        <div className="login-form__group">
          <button className="login-form__button" type="submit">
            Login
          </button>
        </div>
        <div className="login-form__group">
          <Link className="login-form__link" to="/signup">
            No Account? Signup Now
          </Link>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
