import React, { Component } from "react";
import axios from "axios";
import "./OrganizationDetailsPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

class OrganizationDetailsPage extends Component {
  state = {
    targetOrganization: [],
    donationList: [],
  };

  getTargetOrganization = (id) => {
    axios
      .get(`http://localhost:8080/account/${id}`)
      .then((res) => {
        this.setState({
          targetOrganization: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getDonationCards = (id) => {
    axios
      .get(`http://localhost:8080/donation/account/${id}`)
      .then((res) => {
        this.setState({
          donationList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getTargetOrganization(this.props.match.params.id);
    this.getDonationCards(this.props.match.params.id);
  }

  render() {
    if (!this.state.targetOrganization && !this.state.donationList) {
      return null;
    }
    console.log(this.state.donationList);

    return (
      <div>
        <div className="OrganizationDetailsPage">
          <div className="OrganizationDetailsPage__img-container">
            <img
              className="OrganizationDetailsPage__img-container--img"
              src={this.state.targetOrganization.image}
            />
          </div>
          <div className="OrganizationDetailsPage__info">
            <h1 className="OrganizationDetailsPage__info--title">
              {this.state.targetOrganization.program_name}
            </h1>

            <div className="OrganizationDetailsPage__info--location-website">
              <p className="OrganizationDetailsPage__info--location">
                {this.state.targetOrganization.location}
              </p>

              <a
                className="OrganizationDetailsPage__info--website"
                href={this.state.targetOrganization.website}
                target="_blank"
              >
                Go to the Website {">"}
                {/* <img src={linkIcon} className="detailPage__external-link" /> */}
              </a>
            </div>
            {/* <p>{this.state.targetOrganization.website}</p> */}
            <p className="OrganizationDetailsPage__info--des">
              {this.state.targetOrganization.description}
            </p>
          </div>
        </div>
        <div className="OrganizationDetailsPage__card-group">
          {this.state.donationList.map((donation) => {
            return (
              <div className="OrganizationDetailsPage__donation-card">
                <div className="OrganizationDetailsPage__donation-card--img-container">
                  <img
                    className="OrganizationDetailsPage__donation-card--img"
                    src={donation.image}
                  />
                </div>
                <div className="OrganizationDetailsPage__donation-card--info">
                  <div className="OrganizationDetailsPage__donation-card--item-date">
                    <p className="OrganizationDetailsPage__donation-card--item-name">
                      {donation.itemName}
                    </p>
                    <p className="OrganizationDetailsPage__donation-card--date">
                      Posted:{new Date(donation.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="OrganizationDetailsPage__donation-card--status">
                    Status:
                    {donation.status === "In Need" ? (
                      <span className="in-need">In Need</span>
                    ) : (
                      <span className="surplus">Surplus</span>
                    )}
                  </p>
                  <p>{donation.information}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default OrganizationDetailsPage;
