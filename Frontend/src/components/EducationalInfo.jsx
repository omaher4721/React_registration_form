import React, { useState } from 'react';
import './EducationalInfo.css';

const EducationalInfo = ({ onSubmit }) => {
  const [educationData, setEducationData] = useState({
    sscSchoolName: '',
    sscMarks: '',
    SScBoardName: '',
    familyIncome: '',
    hasScholarship: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setEducationData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(educationData);
    setFormSubmitted(true);
  };

  return (
    <div className="EI">
      <h2 style={{ color: '' }}>Educational Information</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="SSC">
          {/* <label>SSC School Name:</label> */}
          <input id='ssc-S_name'
            type="text"
            name="sscSchoolName"
            value={educationData.sscSchoolName}
            onChange={handleChange}
            placeholder="SSC School Name"
            required
          />
          {/* <label>SSC Marks (%):</label> */}
          <input id='ssc-marks'
            type="text"
            name="sscMarks"
            value={educationData.sscMarks}
            onChange={handleChange}
            placeholder="SSC Marks (%)"
            required
          />
          {/* <label>SSC Board Name:</label> */}
          <input
            type="text"
            name="SScBoardName"
            value={educationData.SScBoardName}
            onChange={handleChange}
            placeholder="SSC Board Name"
            required
          />
        </div>
        <div className="Income">
          {/* <label>Family Income:</label> */}
          <select
            name="familyIncome"
            value={educationData.familyIncome}
            onChange={handleChange}
            required
          >
            <option value="">Select Income Range</option>
            <option value="lessThan10k">Less than 50000</option>
            <option value="10kto50k">50000 - 100000</option>
            <option value="50kto100k">100000 - 350000</option>
            <option value="moreThan100k">More than 350000</option>
          </select>
        </div>
        <div className="Scholarship">
          <label>Do you have any Scholarship?</label>
          <div id='radio'>
            <label>
              <input
                type="radio"
                name="hasScholarship"
                value="yes"
                checked={educationData.hasScholarship === 'yes'}
                onChange={handleChange}
              />
              <span className='labelText'>Yes</span>
            </label>
            <label>
              <input 
                type="radio"
                name="hasScholarship"
                value="no"
                checked={educationData.hasScholarship === 'no'}
                onChange={handleChange}
              />
             <span className='labelText'>No</span>
            </label>
          </div>
        </div>
        <button type="submit" className={formSubmitted ? 'submitted' : ''}>
          {formSubmitted ? 'Educational Info Saved!' : 'Save Educational Info'}
        </button>
      </form>
    </div>
  );
};

export default EducationalInfo;
