import React, { Component } from 'react';
import './DonationPage.scss';
import DonationForm from '../../components/DonationForm/DonationForm';
import axios from 'axios'

class DonationPage extends Component {
  state ={
    organization: null
  }

  fetchOrganization = (id) => {
    axios.get( `http://localhost:8080/account/${id}`)
    .then(res => {
      console.log(res.data)
      this.setState({organization: res.data})
    }).catch(err => {
      console.log(err)
    })

  }

  componentDidMount() {
    this.fetchOrganization(this.props.match.params.id);
  }

  render(){
    console.log(this.props)
    if(!this.state.organization){
      console.log(this.state.organization)
      return null  
    }
    const {description, location, program_name} = this.state.organization

    console.log('descr',description)
    
    return (
      <>
      {this.state.organization && 
       <section className="donate"> 
        <div className="donate__wrapper">
         <div className="donate__image"></div>
          <div className="donate__wrapper2">
            <h3 className="donate__subtitle">Name: {program_name}</h3>
            <h3 className="donate__subtitle">Location: {location}</h3>
            <p className='donate__text' >{description}</p>
          </div>
        </div>
      </section>

     }
        <DonationForm/>
      </>
    );
  };

  }

export default DonationPage;
