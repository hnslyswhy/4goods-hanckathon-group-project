import React, { Component } from "react";
//import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/external-link-icon.png";
import "./OrganizationsCard.scss";

class OrganizationsCard extends Component {
  state = {
    donationList: [],
  };

  getDonationList = (id) => {
    // console.log(`http://localhost:8080/donation/account/${id}`);
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
    this.getDonationList(this.props.allOrganizations.accountId);
  }

  render() {
    if (!this.props.allOrganizations && this.state.donationList) {
      return null;
    }

    return (
      <div className="OrganizationsCard">
        <div className="OrganizationsCard__img-container">
          <img
            className="OrganizationsCard__img-container--img"
            src={this.props.allOrganizations.image}
            alt={this.props.allOrganizations.program_name}
          />
        </div>
        <div className="OrganizationsCard__info">
          <h2 className="OrganizationsCard__info--title">
            {this.props.allOrganizations.program_name}
          </h2>
          <p>
            <b>Program type:</b> {this.props.allOrganizations.program_type}
          </p>
          <p>
            <b>Location:</b> {this.props.allOrganizations.location}
          </p>
          <p className="OrganizationsCard__info--details">
            {this.props.allOrganizations.description}
          </p>
          {/* donation tags */}
          <p className="OrganizationsCard__info--status">
            Donations in need:{" "}
            {this.state.donationList.length &&
              this.state.donationList &&
              this.state.donationList.map((donation) => {
                if (donation.status === "In Need") {
                  return (
                    <span key={donation._id} className="in-need">
                      {donation.itemName}
                    </span>
                  );
                }
              })}
          </p>
          <p className="OrganizationsCard__info--status">
            Surplus donations:{" "}
            {this.state.donationList.length &&
              this.state.donationList &&
              this.state.donationList.map((donation) => {
                if (donation.status === "Surplus") {
                  return (
                    <span key={donation._id} className="surplus">
                      {donation.itemName}
                    </span>
                  );
                }
              })}
          </p>

          <div className="OrganizationsCard__links">
            <Link
              className="OrganizationsCard__links--learn-more"
              to={{
                pathname: `donors/${this.props.allOrganizations.accountId}`,
              }}
            >
              Learn More
            </Link>
            <a
              className="OrganizationsCard__links--website"
              target="_blank"
              href={this.props.allOrganizations.website}
            >
              Website
              <img className="OrganizationsCard__link-icon" src={linkIcon} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationsCard;
