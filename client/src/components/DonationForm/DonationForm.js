import React, { Component } from 'react';
import './DonationForm.scss';
import axios from 'axios';

class DonationForm extends Component{
  state ={
    selectedFile: null,
    imageUploaded: null,
    previewImg: null,
    chosedImage: false,
    name: '',
    status:'',
    location:'',
    date:'',
    description: ''

  }

  // handling form change
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  fileSelectedHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
      chosedImage: true,
    });
  };

  fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
    formData.append("upload_preset", "wg0wjivl");
    axios
      .post("https://api.cloudinary.com/v1_1/dml1rigkl/image/upload", formData)
      .then((res) => {
        this.setState({
          imageUploaded: res.data.secure_url,
        });
      });
  };
  handleOnSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8080/donation`, {
      accountId: this.props.account,
      image: this.state.imageUploaded,
      itemName: e.target.name.value,
      date: e.target.date.value,
      status: e.target.status.value,
      information: e.target.description.value,
      
    })
    .then(res => {
     
    })
    .catch(err => {
      return err
    })
  }

  render(){

    return (
      <div className='form'>
          {/* form title */}
        <h4 className='form__title'>Create donation item</h4>
        <form className='form__wrapper' onSubmit={this.handleOnSubmit}>
           
           {/* form image */}
           <div>
              <div className='form__thumbnail'>{!this.state.imageUploaded ? null : (
                  <div >
                    <img
                     className='form__thumbnail'
                      src={this.state.imageUploaded}
                    />
                  </div>
                )}</div>
                <div className='form__upload-wrapper'>
                  <input  type='file' name='image' id='new-post-image'  onChange={this.fileSelectedHandler}/>           
                  <button className='form__upload' type='button' onClick={ this.fileUploadHandler}>Upload</button>
                </div>
           </div>

          <div className='form__input-wrapper'>
  
          {/* form item name */}
           <div className='form__item-wrapper'>
           <label className='form__label' htmlFor='item-name'><strong>Name</strong></label>
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

           {/* upload button */}
           <div className='form__button-wrapper'>
            <button className='form__button'>Submit</button>
           </div>
          </div> 
        </form>
      </div>
    );
  }

};

export default DonationForm;

