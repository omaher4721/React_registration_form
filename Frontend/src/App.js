import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Address from './components/Address';
import EducationalInfo from './components/EducationalInfo';
import './App.css';
import axios from 'axios';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [addressInfo, setAddressInfo] = useState(null);
  const [educationalInfo, setEducationalInfo] = useState(null);

  const handlePersonalInfoSubmit = (data) => {
    axios.post('http://localhost:3001/api/personalInfo', data)
      .then(response => {
        console.log('PersonalInfo submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting PersonalInfo:', error);
      });
  };

  const handleAddressSubmit = (data) => {
    axios.post('http://localhost:3001/api/address', data)
      .then(response => {
        console.log('Address information submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting Address information:', error);
      });
  };

  const handleEducationalInfoSubmit = (data) => {
    axios.post('http://localhost:3001/api/educationalInfo', data)
      .then(response => {
        console.log('EducationalInfo submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting EducationalInfo:', error);
      });
  };

  return (
    <div className="App">
      <PersonalInfo onSubmit={handlePersonalInfoSubmit} />
      <Address onSubmit={handleAddressSubmit} />
      <EducationalInfo onSubmit={handleEducationalInfoSubmit} />
    </div>
  );
};

export default App;
