import React, { Component } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class OrganizationDetailPage extends Component {
  state = {
    targetOrganization: null,
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

  componentDidMount() {
    this.getTargetOrganization(this.props.match.params.id);
  }

  render() {
    if (!this.state.targetOrganization) {
      return null;
    }
    console.log(this.state.targetOrganization);
    return (
      <div>
        <div>
          <h1>{this.state.targetOrganization.program_name}</h1>
          <img src={this.state.targetOrganization.image} />
          <p>{this.state.targetOrganization.description}</p>
          <p>{this.state.targetOrganization.location}</p>
          <p>{this.state.targetOrganization.website}</p>
        </div>
        {/* <div>
          {this.state.targetOrganization.donations.map((donation) => {
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

export default OrganizationDetailPage;
