import React, { Component } from 'react';
import './DonationForm.scss';
import axios from 'axios';
// import {v4: uuid} from 'uuid';

class DonationForm extends Component{
  state ={
    selectedFile: null,
    name: '',
    status:'',
    location:'',
    date:'',
    description: ''

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.value)
  }
  
  fileSelectedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]})
  }
  handleOnSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8080/donation`, {
      accountId: this.props.props.match.params.id,
      image: e.target.selectedFile.value,
      itemName: e.target.name.value,
      date: e.target.date.value,
      status: e.target.status.value,
      information: e.target.description.value,
      
    })
    .then(res => {
     
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    console.log(this.props.props)

    return (
      <div className='form'>
          {/* form title */}
        <h4 className='form__title'>Create donation item</h4>
        <form className='form__wrapper' onSubmit={this.handleOnSubmit}>
           
           {/* changes to file */}
           <div>
              <div className='form__thumbnail'></div>
              <input type='file' name='selectedFile'  value={this.state.selectedFile}onChange={this.handleChange}/>           
           </div>
          <div className='form__input-wrapper'>
  
          {/* form item name */}
           <div className='form__item-wrapper'>
           <label className='form__label' htmlFor='item-name'>Name</label>
             <input
              type='text'
              name='name'
              value={this.state.name}
              placeholder='Item Name'
              onChange={this.handleChange}
              className='form__item'
              required
             />
           </div>
  
          {/* form item location */}
           <div className='form__item-wrapper'>
           <label className='form__label' htmlFor='status'>Status</label>
             <input
              type='text'
              name='status'
              placeholder='status'
              className='form__item'
              required
             />
           </div>
  
          {/* form item date */}
           <div className='form__item-wrapper'>
           <label className='form__label' htmlFor='date'>Date</label>
             <input
              type='date'
              name='date'
              className='form__item'
              onChange={this.handleChange}
              required
             />
           </div>
           
          {/* form item description */}
           <div className='form__item-wrapper'>
           <label className='form__label' htmlFor='description'>Description</label>
             <textarea
              type='description'
              name='description'
              className='form__item'
              placeholder='Describe your item'
              onChange={this.handleChange}
              cols='10'
              rows='4'
              required
             />
           </div>
           <div className='form__button-wrapper'>
            <button className='form__button'>Upload</button>
           </div>
          </div>
  
  
        </form>
      </div>
    );
  }

};

export default DonationForm;

