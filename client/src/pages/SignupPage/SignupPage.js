import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignupPage.scss";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
console.log(baseUrl);

const SignupPage = () => {
  const history = useHistory();
  const [userType, setUserType] = useState("organization");
  const [geoLoc, setGeoLoc] = useState([]);

  const handleUserType = (e) => {
    setUserType(e.target.value);
  };

  //get geolocaiton
  let options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (position) => {
    const coordinations = position.coords;
    console.log(`Latitude : ${coordinations.latitude}`);
    console.log(`Longitude: ${coordinations.longitude}`);
    setGeoLoc([coordinations.latitude, coordinations.longitude]);
  };

  const errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const handleGetGeolocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          }
        });
    } else {
      alert("Sorry Not available!");
    }
  };

  // signup form submission
  const handleSignup = (e) => {
    e.preventDefault();
    let accountInfo = {};
    if (e.target.type.value === "organization") {
      accountInfo = {
        type: e.target.type.value,
        account: e.target.account.value, //used to be: username: req.body.username,  // should be the email address
        password: e.target.password.value,
        program_type: e.target.program_type.value,
        program_name: e.target.program_name.value,
        location: e.target.location.value,
        geolocation: geoLoc,
        description: e.target.description.value,
        website: e.target.website.value,
      };
    } else {
      accountInfo = {
        type: e.target.type.value,
        account: e.target.account.value, //used to be: username: req.body.username,  // should be the email address
        password: e.target.password.value,
        program_name: e.target.program_name.value,
        location: e.target.location.value,
        geolocation: geoLoc,
        description: e.target.description.value,
      };
    }

    console.log(accountInfo);
    // axios.post(`${baseUrl}/auth/signup`, accountInfo);
    axios
      .post("http://localhost:8080/auth/signup", accountInfo)
      .then((response) => {
        console.log(response);
        if (response.data.message === "success") {
          history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="signupPage">
      <h1 className="signupPage__heading">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="signup-form__group">
          <div className="signup-form__field">
            <label className="signup-form__label">User Type</label>
            <select
              name="type"
              className="signup-form__input signup-form__select"
              onChange={handleUserType}
            >
              <option>Please select</option>
              <option>organization</option>
              <option>individual</option>
            </select>
          </div>
        </div>
        {userType === "organization" && (
          <div className="signup-form__group">
            <div className="signup-form__field">
              <label className="signup-form__label">Organization Name</label>
              <input
                className="signup-form__input"
                type="text"
                name="program_name"
              />
            </div>
            <div className="signup-form__field">
              <label className="signup-form__label">Program Type</label>
              <select
                name="program_type"
                className="signup-form__input signup-form__select"
              >
                <option>Please select</option>
                <option>Homeless Shelter</option>
                <option>Free/Low Cost Food Program</option>
                <option>First Nation</option>
              </select>
            </div>
            <div className="signup-form__field signup-form__field--website ">
              <label className="signup-form__label">Website</label>
              <input
                className="signup-form__input"
                type="text"
                name="website"
              />
            </div>
          </div>
        )}
        {userType === "individual" && (
          <div className="signup-form__group">
            <div className="signup-form__field">
              <label className="signup-form__label">Username</label>
              <input
                className="signup-form__input"
                type="text"
                name="program_name"
              />
            </div>
          </div>
        )}
        <div className="signup-form__group">
          <div className="signup-form__field">
            <label className="signup-form__label">E-mail</label>
            <input className="signup-form__input" type="email" name="account" />
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label">Password</label>
            <input
              className="signup-form__input"
              type="password"
              name="password"
            />
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label" name="confirm-password">
              Confrim Password
            </label>
            <input
              className="signup-form__input"
              type="password"
              name="confrimPassword"
            />
          </div>
        </div>
        <div className="signup-form__group">
          <div className="signup-form__field">
            <label className="signup-form__label">Location</label>
            <input className="signup-form__input" type="text" name="location" />
          </div>
          <button
            className="signup-form__gps"
            type="button"
            onClick={handleGetGeolocation}
          >
            get current location
          </button>
          <div className="signup-form__field signup-form__field--description">
            <label className="signup-form__label">Description</label>
            <textarea
              className="signup-form__input signup-form__input--description"
              type="text"
              name="description"
            />
          </div>
        </div>
        <div className="signup-form__field">
          <button className="signup-form__button">Sign Up</button>
        </div>
      </form>
    </main>
  );
};

export default SignupPage;
