const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  medicalHistory: {
    type: String,
    default: '',
  },
  firebaseUid: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);
