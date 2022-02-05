import React, { Component } from "react";
import axios from "axios";
import OrganizationsCard from "../../components/OrganizationsCard/OrganizationsCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const API_URL = process.env.REACT_APP_API_URL;

class Organizations extends Component {
  state = {
    allOrganizations: [],
  };

  getAllOrganizationsList = () => {
    axios
      .get(`${API_URL}account`)
      .then((res) => {
        this.setState({
          allOrganizations: res.data,
          //allOrganizationsList: res.data,
        });
        //console.log(res.data);
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getAllOrganizationsList();
  }

  // componentDidUpdate(prevProps) {
  //   if (!this.props.location.state) return;
  //   if (this.props.location.state.id === prevProps.location.state.id) return;

  //   axios
  //     .get(`${API_URL}organizations`)
  //     .then((res) => {
  //       this.setState({
  //         allOrganizations: res.data,
  //         allOrganizationsList: res.data,
  //       });
  //     })
  //     .catch((_err) => {
  //       console.log("error");
  //     });
  // }

  handleSearchServer = (e) => {
    const query = e.target.value.toLowerCase();
    this.props.history.push({ search: `search=${query}` });

    axios
      .get(`${API_URL}account/?search=${query}`)
      .then((res) => {
        this.setState({
          allOrganizations: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  render() {
    if (!this.state.allOrganizations) {
      return null;
    }

    console.log(this.state.allOrganizations);

    return (
      <div className="">
        <h1 className="">Non-Profit Organizations</h1>
        <SearchBar
          placeholder="Search for donations, organizations and locations..."
          handleSearch={this.handleSearchServer}
        />

        {this.state.allOrganizations.map((organization) => {
          return (
            <OrganizationsCard
              key={organization.id}
              allOrganizations={organization}
            />
          );
        })}
      </div>
    );
  }
}

export default Organizations;
