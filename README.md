Certainly! Here's the entire content in one README file:

```markdown
# Student Registration Form App

This project is a simple student registration form application built with React for the frontend and Node.js (Express) for the backend. It uses MySQL as the database to store personal, address, and educational information.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MySQL

## Setup

### Backend

1. Navigate to the `server` directory.

```bash
cd server
```

2. Install dependencies.

```bash
npm install
```

3. Create a MySQL database named `sd_form` and update the database connection details in `server.js`.

4. Run the backend server.

```bash
npm start
```

The server will be running on http://localhost:3001.

### Frontend

1. Navigate to the `client` directory.

```bash
cd client
```

2. Install dependencies.

```bash
npm install
```

3. Start the React app.

```bash
npm start
```

The app will be accessible on http://localhost:3000.

## Usage

1. Fill out the personal information form, address form, and educational information form.

2. Submit each form to store the data in the MySQL database.

## Project Structure

- `server.js`: Backend server using Express.
- `client/src/App.js`: Frontend React application.
- `client/src/components/`: React components for personal, address, and educational information.

Feel free to modify and extend this project according to your needs!
```
