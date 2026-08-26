import mongoose from 'mongoose';

// Site BILL SCHEMA

const SitebillSchema = new mongoose.Schema({
    trucknumber: {
        type: String,
        default: ''
    },
    truckId: {
        type: String,
        trim: true,
        default: ''
    },
    siteId: {
        type: String,
        trim: true,
        default: ''
    },
    drivereId: {
        type: String,
        trim: true,
        default: ''
    },
    shipmentId: {
        type: String,
        trim: true,
        default: ''
    },
    siteName: {
        type: String,
        default: ''
    },
    shipmentEndingDate: {
        type: Date,
        default: Date.now  // Automatically set to current date bill date
    },
    
    siteManagerNum: {
        type: String,
        default: ''
    },
    siteOwner: {
        type: String,
        default: ''
    },
    siteManager: {
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
    siteBillStatus: {
        type: String,
        default: 'notPaid',
        
    },
    paymentOutstending: {
        type: Number,
        trim: true,
        default: 0 // a shipment na ketla baki
    },
    paymentDate: {
        type: Date,
        default: null  // Automatically sets to current date
    },
    siteDeposit: {
        type: Number,
        trim: true,
        default: 0
    },
    paymentAmount: {
        type: Number,
        required: false,
        default: 0
    },
    product: {
        type: String,
        trim: true,
        default: ''
    },
    createdDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    siteBillverifyed: {
        type: String,
        default: 'yes',
        
    },
});

// Model creation
const sitebill = mongoose.model('Sitebill', SitebillSchema);

export default sitebill;
