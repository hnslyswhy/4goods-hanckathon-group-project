import React from 'react';
import './DonationForm.scss';

const DonationForm = () => {
  return (
    <div className='form'>
      <form className='form'>

        {/* form title */}
        <h4 className='form__title'>Create Donation Form</h4>
        <div className='form__thumbnail'></div>

        <div className='form__input-wrapper'>

        {/* form item name */}
         <div className='form__item-wrapper'>
         <label className='form__label' htmlFor='item-name'>Name</label>
           <input
            type='text'
            name='item-name'
            placeholder='Item Name'
            className='form__item'
            required
           />
         </div>

        {/* form item location */}
         <div className='form__item-wrapper'>
         <label className='form__label' htmlFor='location'>Location</label>
           <input
            type='text'
            name='location'
            placeholder='Location'
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
            required
           />
         </div>

        </div>

      </form>
    </div>
  );
};

export default DonationForm;

// name, location, date, description, upload
