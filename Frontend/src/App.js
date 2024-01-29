import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Address from './components/Address';
import EducationalInfo from './components/EducationalInfo';
import Thankyou from './components/Thankyou';
import './App.css';
import axios from 'axios';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [addressInfo, setAddressInfo] = useState(null);
  const [educationalInfo, setEducationalInfo] = useState(null);
  const [allFieldsSubmitted, setAllFieldsSubmitted] = useState(false);

  const handlePersonalInfoSubmit = (data) => {
    axios.post(`${process.env.REACT_APP_API_URL}/personalInfo`, data)
      .then(response => {
        const { studentId, alreadySubmitted } = response.data;
  
        if (alreadySubmitted) {
          alert('You have already submitted the form with this email.');
        } else {
          setPersonalInfo({ ...data, student_id: studentId });
          console.log('PersonalInfo submitted successfully. Student ID:', studentId);
        }
      })
      .catch(error => {
        console.error('Error submitting PersonalInfo:', error);
      });
  };
  

  const handleAddressSubmit = (data) => {
    if (personalInfo) {
      const studentId = personalInfo.student_id;
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
      alert('Please fill in and submit the Personal Info section first.');
    }
  };

  const handleEducationalInfoSubmit = (data) => {
    if (personalInfo) {
      const studentId = personalInfo.student_id;
      const educationalData = { ...data, student_id: studentId };

      axios.post(`${process.env.REACT_APP_API_URL}/educationalInfo`, educationalData)
        .then(response => {
          setEducationalInfo(educationalData);
          console.log('EducationalInfo submitted successfully:', response.data);
          setAllFieldsSubmitted(true);
        })
        .catch(error => {
          console.error('Error submitting EducationalInfo:', error);
        });
    } else {
      alert('Please fill in and submit the Personal Info section first.');
    }
  };

  return (
    <div className="App">
      {!allFieldsSubmitted && (
        <>
          <PersonalInfo onSubmit={handlePersonalInfoSubmit} />
          <Address onSubmit={handleAddressSubmit} />
          <EducationalInfo onSubmit={handleEducationalInfoSubmit} />
        </>
      )}

      {allFieldsSubmitted && <Thankyou />}
    </div>
  );
};

export default App;
