import React, { useState } from 'react';
import './Address.css';

const Address = ({ onSubmit }) => {
  const [addressData, setAddressData] = useState({
    presentAddress: '',
    streetAddress: '',
    streetAddressLineTwo: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(addressData);

    setFormSubmitted(true);
  };

  return (
    <div className='Address'>
      <h2>Address Information</h2>
      <form onSubmit={handleFormSubmit}>
        <input id ='presentAddress'
          type="text"
          name="presentAddress"
          value={addressData.presentAddress}
          onChange={handleChange}
          placeholder="Present Address"
          required
        />
        <input id='street-A'
          type="text"
          name="streetAddress"
          value={addressData.streetAddress}
          onChange={handleChange}
          placeholder="Street Address"
          required
        />
        <input id='street-A2'
          type="text"
          name="streetAddressLineTwo"
          value={addressData.streetAddressLineTwo}
          onChange={handleChange}
          placeholder="Street Address Line Two"
        />
        <input id='city'
          type="text"
          name="city"
          value={addressData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <div className='statezip'>
        <input id='state'
          type="text"
          name="state"
          value={addressData.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        <input
          type="text"
          name="zipCode"
          value={addressData.zipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        </div>
        <div className='country'>
        <select
          name="country"
          value={addressData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
          {/* Add more countries as needed */}
        </select>
        </div>
        <button type='submit' className={formSubmitted ? 'submittrd' :''}>
          {formSubmitted ? 'Address Saved':'Save Address'}
        </button>
      </form>
    </div>
  );
};

export default Address;
