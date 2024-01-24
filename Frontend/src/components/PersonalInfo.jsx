import React, { useState } from 'react';
import './PersonalInfo.css';

const PersonalInfo = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    gender: '',
    class:'',
    field: '',
    dob: '',
    hasDisable: '', 
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormSubmitted(true)
  };

  return (
    <div className='PersonalInfo'>
      <h3>Personal Information</h3>
      <form onSubmit={handleFormSubmit}>
      <div className='NameFields'>
        <input id='firstName'
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input id='MiddleName'
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Middle Name"
        />
        <input id='LastName'
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        
        <input
          type="tel"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          placeholder="Mobile No"
          required
        />
 <div id='Gender'>
  <label>
    Gender:
  </label>
  <label>
    Male
    <input
      type="radio"
      name="gender"
      value="male"
      checked={formData.gender === 'male'}
      onChange={handleChange}
      required
    />
  </label>
  <label>
    Female
    <input
      type="radio"
      name="gender"
      value="female"
      checked={formData.gender === 'female'}
      onChange={handleChange}
      required
    />
  </label>
  <label>
    Other
    <input
      type="radio"
      name="gender"
      value="other"
      checked={formData.gender === 'other'}
      onChange={handleChange}
      required
    />
  </label>
</div>

        <div className='class'>
          <select name="class" value={formData.class} onChange={handleChange} required>
            <option value="" disabled>Select Class</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='Field'>
          <select name="field" value={formData.degree} onChange={handleChange} required>
            <option value="" disabled>Select Field</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="art">Art</option>
            {/* Add more options as needed */}
          </select>
        </div>
        
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
        />
        <div className="PhysicallyDisable">
          <label>Physically Disable?</label>
          <div>
            <label>
              Yes
              <input
                type="radio"
                name="hasDisable"
                value="yes"
                checked={formData.hasDisable === 'yes'}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              No
              <input
                type="radio"
                name="hasDisable"
                value="no"
                checked={formData.hasDisable === 'no'}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <button type="submit" className={formSubmitted ? 'submitted' : ''}>
          {formSubmitted ? 'Info Saved!' : 'Save Personal Info'}
          </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
