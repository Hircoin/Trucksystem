import mongoose from 'mongoose';

// Driver BILL SCHEMA

const DriverbillSchema = new mongoose.Schema({
    trucknumber: {
        type: String,
        default: ''
    },
    truckId: {
        type: String,
        trim: true,
        default: ''
    },
    drivereId: {
        type: String,
        trim: true,
        default: ''
    },
    siteId: {
        type: String,
        trim: true,
        default: ''
    },
    shipmentId: {
        type: String,
        trim: true,
        default: ''
    },
    driverename: {
        type: String,
        trim: true,
        default: ''
    },
    shipmentEndingDate: {
        type: Date,
        default: Date.now  // Automatically set to current date bill date
    },
    drivereNum: {
        type: String,
        default: ''
    },
    
    
    truckOwner: {
        type: String,
        required: true,
        default: ''
    },
    truckOwnerNumber: {
        type: String,
        default: ''
    },
    siteKato: {
        type: Number,
        trim: true,
        default: 0
    },
    siteRate: {
        type: Number,
        trim: true,
        default: 0 // bhav per tone
    },
    product: {
            type: String,
            trim: true,
            default: ''
    },
    DriverBillStatus: {
        type: String,
        default: 'notPaid',
        
    },
    dryverOutstendingPayment: {
        type: Number,
        trim: true,
        default: 0 //dryver na ketla baki?
    },
    paymentDate: {
        type: Date,
        default: null  // Automatically sets to current date
    },
    
    paymentAmount: {
        type: Number,
        required: false,
        default: 0
    },
    dryverDeposit: {
        type: Number,
        trim: true,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    }
});

// Model creation
const driverbill = mongoose.model('Driverbill', DriverbillSchema);

export default driverbill;
