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

  // Capture the studentId when personalInfo is submitted
  const handlePersonalInfoSubmit = (data) => {
    axios.post(`${process.env.REACT_APP_API_URL}/personalInfo`, data)
      .then(response => {
        const studentId = response.data.studentId;
        setPersonalInfo({ ...data, student_id: studentId });
        console.log('PersonalInfo submitted successfully. Student ID:', studentId);
      })
      .catch(error => {
        console.error('Error submitting PersonalInfo:', error);
      });
  };

  // Passing the student_id 
  const handleAddressSubmit = (data) => {
    // Ensure student_id is present in personalInfo
    const studentId = personalInfo ? personalInfo.student_id : null;

    if (studentId) {
      // Include student id
      const addressData = { ...data, student_id: studentId };

      axios.post(`${process.env.REACT_APP_API_URL}/address`, addressData)
        .then(response => {
          setAddressInfo(addressData);
          console.log('Address information submitted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error submitting Address information:', error);
        });
    } else {
      alert('Make sure personalInfo is submitted first.');
    }
  };

  // Pass student id
  const handleEducationalInfoSubmit = (data) => {
    // Ensure student_id is present in personalInfo
    const studentId = personalInfo ? personalInfo.student_id : null;

    if (studentId) {
      // Include student_id in the educationalInfo data
      const educationalData = { ...data, student_id: studentId };

      axios.post(`${process.env.REACT_APP_API_URL}/educationalInfo`,educationalData)
        .then(response => {
          setEducationalInfo(educationalData);
          console.log('EducationalInfo submitted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error submitting EducationalInfo:', error);
        });
    } else {
      console.error('Make sure personalInfo is submitted first..');
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