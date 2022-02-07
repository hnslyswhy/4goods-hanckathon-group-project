import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  let token = sessionStorage.getItem("token");
  //console.log(typeof token);

  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="header-logo" />
      </Link>
      <nav className="header__navlist">
        <Link className="header__link" to="/">
          <p className="header__navlist-item">Home</p>
        </Link>
        <Link className="header__link" to="/donors">
          <p className="header__navlist-item">Donors</p>
        </Link>
        <Link className="header__link" to="/donations">
          <p className="header__navlist-item">Goods</p>
        </Link>
        {token && (
          <>
            <Link className="header__link" to="/profile">
              <p className="header__navlist-item"> Profile </p>
            </Link>

            <Link className="header__link" to="/logout">
              <p className="header__navlist-item"> Logout </p>
            </Link>
          </>
        )}
        {!token && (
          <Link className="header__link" to="/login">
            <p className="header__navlist-item">Login</p>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
