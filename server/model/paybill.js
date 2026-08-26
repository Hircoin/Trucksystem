import mongoose from 'mongoose';


const PaybillSchema = mongoose.Schema({
    transactionId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false,
        default: ''
    },
    driverAge: {
        type: String,
        default: ''
    },
    driverName: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        required: false,
        default: ''
    },
    driverAge: {
        type: String,
        default: ''
    },
    driverName: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        required: false,
        default: ''
    },
    driverAge: {
        type: String,
        default: ''
    },
    driverName: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        required: false,
        default: ''
    },
    driverAge: {
        type: String,
        default: ''
    },
    driverName: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Paybill = mongoose.model('Paybill', PaybillSchema);

export default Paybill;
