# hospital_management_backend
using node.js and Mysql

# Psychiatry Hospital Management System
This project is a  Hospital Management System that provides APIs for managing psychiatrists, patients, and hospitals.

## Frameworks Used
- *Node.js*
- *Express.js* 
- *MySQL*
  
## Libraries Used
- *bcrypt* (Version 5.1.1): Used for hashing passwords securely.
- *body-parser* (Version 1.20.2): Middleware to parse incoming request bodies.
- *express* (Version 4.18.2): Web application framework for Node.js.
- *mysql2* (Version 3.7.0): MySQL database connectivity for Node.js.
- *validator* (Version 13.11.0): A library for string validation and sanitization.


  
## API Endpoints

- *GET /api/hospitalPsychiatrists/:hospitalId/psychiatrists*
  - *Description:* Get psychiatrists for a specific hospital.
  - *Parameters:* hospitalId - ID of the hospital.
- *GET /api/hospitalPatients/1/patients*
  - *Description:* Get patient for a specific hospital.
  - *Parameters:* hospitalId - ID of the hospital.
- *POST /api/patients/register*
  - *Description:* Register a new patient.
  - *Parameters:*
    - name (string, required): Name of the patient.
    - address (string, required): Address of the patient (minimum 10 characters).
    - email (string, required): Valid email address of the patient.
    - phone (string, required): Phone number of the patient (at least 10 digits with country code).
    - password (string, required): Password with one upper character, one lower character, and a number (8-15 characters).
    - photo (string, required): URL of the patient's photo.
    - hospital_id (integer, required): ID of the hospital.

## Documentation

- *Postman* [<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/30102130-92a53dd6-5bf7-4829-8f61-c850f8e618b3?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30102130-92a53dd6-5bf7-4829-8f61-c850f8e618b3%26entityType%3Dcollection%26workspaceId%3D6b80d8dd-e9f3-479f-a33b-4f93e3fb32ca)

## Database

- *patient.sql*  

## Getting Started

1. Clone the repository: git clone https://github.com/yourusername/psychiatry-center.git
2. Install dependencies: npm install
3. Start the server: npm start
Getting Started 
git clone https://github.com/yourusername/psychiatry-center.git
Install dependencies: npm install
Start the server: npm start
