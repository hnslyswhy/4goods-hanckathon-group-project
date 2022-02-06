import React from "react";
import "./LogoutPage.scss";

const LogoutPage = () => {
  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <main className="logout">
      <h1 className="logout__heading">See you again soon!</h1>
      <button className="logout__button" onClick={logout}>
        Confirm logout
      </button>
    </main>
  );
};

export default LogoutPage;
