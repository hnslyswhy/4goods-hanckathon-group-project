import React, { Component } from 'react';
import './DonationPage.scss';
import DonationForm from '../../components/DonationForm/DonationForm';
import axios from 'axios'

class DonationPage extends Component {
  state ={
    organization: null
  }

  fetchOrganization = (id) => {
    axios.get( `http://localhost:8080/donation/${id}`)
    .then(res => {
      console.log(res.data)
      this.setState({organization: res.data})
    })

  }

  componentDidMount() {
    this.fetchOrganization(this.props.match.params.id);
  }

  render(){
    console.log(this.props)
    return (
      <>
        <DonationForm/>
      </>
    );
  };

  }

export default DonationPage;
