const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  guests: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  message: { type: String },
  email: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);