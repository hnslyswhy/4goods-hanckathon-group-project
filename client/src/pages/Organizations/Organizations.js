import React, { Component } from "react";
import axios from "axios";
import OrganizationsCard from "../../components/OrganizationsCard/OrganizationsCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const API_URL = process.env.REACT_APP_API_URL;

class Organizations extends Component {
  state = {
    //allOrganizations: [],
    //allOrganizationsList: null,
    //targetOrganizations: null,
    allOrganizations: [
      // (program_type = "First Nations Organization"),
      // (program_name = "Vancouver Aboriginal Friendship Centre Society"),
      // (location = "Vancouver"),
      // (image =
      //   "https://www.bcbusiness.ca/CDN/35/image/Vancouver-Aboriginal-Friendship-Centre-Society_max.jpg"),
      // (description =
      //   "A sewing club and community garden for elders, sports programs like a basketball league for youth and recreational soccer for adults, pre-employment assistance, support groups for Indigenous parents, a mat and blanket shelter, and more "),
      // (website = "http://vafcs.org"),
    ],
  };

  getAllOrganizationsList = () => {
    axios
      .get(`${API_URL}account`)
      .then((res) => {
        this.setState({
          allOrganizations: res.data,
          //allOrganizationsList: res.data,
        });
        console.log(res.data);
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  // componentDidMount() {
  //   this.getAllOrganizationsList();
  // }

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

    return (
      <div className="">
        <h1 className="">Non-Profit Organizations</h1>
        <SearchBar
          placeholder="Search for donations, organizations and locations..."
          handleSearch={this.handleSearchServer}
        />
        <OrganizationsCard
          key={organization.id}
          allOrganizations={organization}
        />
        {/* {this.state.allOrganizations.map((organization) => {
          return (
            <OrganizationsCard
              key={organization.id}
              allOrganizations={organization}
            />
          ); */}
      </div>
    );
  }
}

export default Organizations;
