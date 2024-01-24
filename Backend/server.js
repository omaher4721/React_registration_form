const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Om8975383040',
  database: 'sd_form',
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

app.post('/api/personalInfo', (req, res) => {
  const personalInfo = req.body;

  db.query('INSERT INTO personal_info SET ?', personalInfo, (err, result) => {
    if (err) {
      console.error('Error inserting PersonalInfo:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('PersonalInfo inserted successfully:', result.insertId);
    return res.status(200).json({ message: 'OK' });
  });
});

app.post('/api/address', (req, res) => {
  const addressData = req.body;

  db.query('INSERT INTO address SET ?', addressData, (err, result) => {
    if (err) {
      console.error('Error inserting Address:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('Address information inserted successfully:', result.insertId);
    res.status(200).send('OK');
  });
});

app.post('/api/educationalInfo', (req, res) => {
  const educationalInfo = req.body;

  db.query('INSERT INTO education SET ?', educationalInfo, (err, result) => {
    if (err) {
      console.error('Error inserting EducationalInfo:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('EducationalInfo inserted successfully:', result.insertId);
    res.status(200).send('OK');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
