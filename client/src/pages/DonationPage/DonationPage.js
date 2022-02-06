import React, { Component } from "react";
import "./DonationPage.scss";
import CardItem from "../../components/CardItem/CardItem";
import DonationForm from "../../components/DonationForm/DonationForm";
import axios from "axios";
class DonationPage extends Component {
  state = {
    organization: null,
    donations: [],
    accountObj: null,
  };

  fetchData = () => {
    let token = sessionStorage.getItem("token");
    axios
      .get(`http://localhost:8080/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data.account);
        this.setState({ organization: res.data.account });
        axios
          .get(`http://localhost:8080/auth/login/${this.state.organization}`)
          .then((res) => {
            console.log(res);
            this.setState({ accountObj: res.data });
            axios
              .get(
                `http://localhost:8080/donation/account/${res.data.accountId}`
              )
              .then((res) => {
                console.log(res.data);
                this.setState({ donations: res.data });
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    console.log(this.props);
    if (!this.state.organization) {
      return null;
    }
    if (!this.state.donations) {
      return null;
    }

    return (
      <>
        {this.state.accountObj && (
          <>
            <section className="donation">
              <div className="donation__wrapper">
                <img
                  className="donation__image"
                  src={this.state.accountObj.image}
                  alt={this.state.accountObj.program_name}
                />
                <div className="donation__wrapper2">
                  <h4 className="donation__subtitle">
                    Name: {this.state.accountObj.program_name}
                  </h4>
                  <h4 className="donation__subtitle">
                    Location: {this.state.accountObj.location}
                  </h4>
                  <p className="donation__text">
                    {this.state.accountObj.description}
                  </p>
                </div>
              </div>
            </section>
            <div className="donation__component">
              <DonationForm
                accountId={this.props}
                account={this.state.accountObj.accountId}
              />
            </div>
          </>
        )}
        <div className="donation__posts">
          {this.state.donations.map((donation) => {
            return (
              <span className="donation__card">
                <CardItem
                  image={donation.image}
                  name={donation.itemName}
                  status={donation.status}
                  description={donation.information}
                />
              </span>
            );
          })}
        </div>
      </>
    );
  }
}
export default DonationPage;
