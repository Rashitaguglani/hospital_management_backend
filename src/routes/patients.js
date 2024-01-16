const express = require('express');
const patientController = require('../controllers/patientMController');

const router = express.Router();

router.post('/register', (req, res) => {
    const { name, address, email, phone, password, photo, hospital_id } = req.body;


    patientController.registerPatient(name, address, email, phone, password, photo, hospital_id, res);
});


module.exports = router;
