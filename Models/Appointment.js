const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    doctor: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;