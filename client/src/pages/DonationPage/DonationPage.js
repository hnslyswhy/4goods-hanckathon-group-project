import React, { Component } from 'react';
import './DonationPage.scss';
import CardItem from '../../components/CardItem/CardItem';
import DonationForm from '../../components/DonationForm/DonationForm';
import axios from 'axios'

class DonationPage extends Component {
  state ={
    organization: null,
    donations: []
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

  fetchDonations  = (id) => {
    axios.get( `http://localhost:8080/donation/account/${id}`)
    .then(res => {
      console.log(res.data)
      this.setState({donations: res.data})
    }).catch(err => {
      console.log(err)
    })

  }

  componentDidMount() {
    this.fetchOrganization(this.props.match.params.id);
    this.fetchDonations(this.props.match.params.id);
  }

  render(){
   
    if(!this.state.organization){
      return null  
    }
    if(!this.state.donations){
      return null  
    }
    const {description, location, program_name, image} = this.state.organization;
    
    return (
      <>
      {this.state.organization && 
       <section className="donation"> 
        <div className="donation__wrapper">
         <img className="donation__image" src={image} alt={program_name}/>
          <div className="donation__wrapper2">
            <h4 className="donation__subtitle">Name: {program_name}</h4>
            <h4 className="donation__subtitle">Location: {location}</h4>
            <p className='donation__text' >{description}</p>
          </div>
        </div>
      </section>

     }
     <div className='donation__component'>
       <DonationForm/>

     </div>

      {this.state.donations.map(donation => {
        return (
          <span className='donation__card'>
           <CardItem
            image ={donation.image}
            name={donation.itemName}
            status={donation.status}
            description={donation.information}
           />
          </span>
        )
      })}


      </>
    );
  };

  }

export default DonationPage;
