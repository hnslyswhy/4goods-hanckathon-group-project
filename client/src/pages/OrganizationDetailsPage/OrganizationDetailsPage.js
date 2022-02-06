import React, { Component } from "react";
import axios from "axios";
import "./OrganizationDetailsPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

class OrganizationDetailsPage extends Component {
  state = {
    targetOrganization: null,
    donationList: null,
  };

  getTargetOrganization = (id) => {
    axios
      .get(`${API_URL}account/${id}`)
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
      .get(`${API_URL}donation/${id}`)
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

    console.log(this.props.match.params.id);
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
            <p>{this.state.targetOrganization.location}</p>
            <p>{this.state.targetOrganization.website}</p>
            <p>{this.state.targetOrganization.description}</p>
          </div>
        </div>
        {/* <div>
          {this.state.donationList.map((donation) => {
            return (
              <div>
                <p>{donation.itemName}</p>
                <p>{donation.information}</p>
                <p>{donation.status}</p>
                <div>
                  <img src={donation.image} />
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    );
  }
}

export default OrganizationDetailsPage;
