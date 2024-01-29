const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// API Creation
app.use(cors());
app.use(bodyParser.json());

// Insert personal info and return student_id
app.post('/api/personalInfo', (req, res) => {
  const personalInfo = req.body;

  db.query('INSERT INTO personal_info SET ?', personalInfo, (err, result) => {
    if (err) {
      console.error('Error inserting PersonalInfo:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const studentId = result.insertId;
    console.log('PersonalInfo inserted successfully. Student ID:', studentId);

    // Return the studentId in the response
    return res.status(200).json({ studentId });
  });
});

// Insert address info and associate with student_id
app.post('/api/address', (req, res) => {
  const addressData = req.body;

  // Ensure the student_id is present in the addressData
  const studentId = addressData.student_id;

  db.query('INSERT INTO address SET ?', addressData, (err, result) => {
    if (err) {
      console.error('Error inserting Address:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const addressId = result.insertId;
    console.log('Address information inserted successfully. Address ID:', addressId);

    res.status(200).json({ addressId });
  });
});

// Insert educational info and associate with student_id
app.post('/api/educationalInfo', (req, res) => {
  const educationalInfo = req.body;

  // Ensure the student_id is present in the educationalInfo
  const studentId = educationalInfo.student_id;

  db.query('INSERT INTO education SET ?', educationalInfo, (err, result) => {
    if (err) {
      console.error('Error inserting EducationalInfo:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const educationId = result.insertId;
    console.log('EducationalInfo inserted successfully. Education ID:', educationId);

    res.status(200).json({ educationId });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
