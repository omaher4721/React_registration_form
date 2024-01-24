import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Address from './components/Address';
import EducationalInfo from './components/EducationalInfo';
import './App.css';
import axios from 'axios';

const App = () => {
  const [studentId, setStudentId] = useState(null);

  const handlePersonalInfoSubmit = (data) => {
    axios.post('http://localhost:3001/api/personalInfo', data)
      .then(response => {
        console.log('PersonalInfo submitted successfully:', response.data);
        setStudentId(response.data.student_id); // Assuming your server responds with the generated student_id
      })
      .catch(error => {
        console.error('Error submitting PersonalInfo:', error);
      });
  };

  const handleAddressSubmit = (data) => {
    if (studentId) {
      // Attach the student_id obtained from PersonalInfo submission to the address data
      data.student_id = studentId;

      axios.post('http://localhost:3001/api/address', data)
        .then(response => {
          console.log('Address information submitted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error submitting Address information:', error);
        });
    } else {
      console.error('Student ID is not available. PersonalInfo must be submitted first.');
    }
  };

  const handleEducationalInfoSubmit = (data) => {
    if (studentId) {
      // Attach the student_id obtained from PersonalInfo submission to the educationalInfo data
      data.student_id = studentId;

      axios.post('http://localhost:3001/api/educationalInfo', data)
        .then(response => {
          console.log('EducationalInfo submitted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error submitting EducationalInfo:', error);
        });
    } else {
      console.error('Student ID is not available. PersonalInfo must be submitted first.');
    }
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
