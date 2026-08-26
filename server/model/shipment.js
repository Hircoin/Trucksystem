import mongoose from 'mongoose';

// RENT BILL SCHEMA

const ShipmentSchema = new mongoose.Schema({
    trucknumber: {
        type: String,
        default: ''
    },
    driverename: {
        type: String,
        trim: true,
        default: ''
    },
    whereLoad: {
        type: String,
        trim: true,
        default: ''
    },
    tonesLoad: {
        type: String,
        trim: true,
        default: ''
    },
    ratePerTone: {
        type: String,
        trim: true,
        default: ''
    },
    drivereId: {
        type: String,
        required: true,
        trim: true,
        default: ''
    },
    truckId: {
        type: String,
        required: true,
        trim: true,
        default: ''
    },
    siteId: {
        type: String,
        trim: true,
        default: ''
    },
    siteName: {
        type: String,
        default: ''
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
    disel: {
        type: Number,
        trim: true,
        default: 0
    },
    tripSalary: {
        type: Number,
        trim: true,
        default: 0
    },
    tole: {
        type: Number,
        trim: true,
        default: 0
    },
    royaltyNum: {
        type: Number,
        trim: true,
        default: 0
    },
    washProduct: {
        type: String,
        default: ''
    },
    massage: {
        type: String,
        trim: true,
        default: ''
    },
    tital: {
        type: String,
        trim: true,
        default: ''
    },
    product: {
        type: String,
        trim: true,
        default: ''
    },
    truckOwner: {
        type: String,
        required: true,
        default: ''
    },
    shipmentStatus: {
        type: String,
        default: 'start',
        
    },
    siteKato: {
        type: Number,
        trim: true,
        default: 0
    },
    siteCharge: {
        type: Number,
        trim: true,
        default: 0 // kato charge
    },
    siteRate: {
        type: Number,
        trim: true,
        default: 0 // bhav per tone
    }, 
    paymentOutstending: {
        type: Number,
        trim: true,
        default: 0 // a shipment na ketla baki
    },
    siteBillStatus: {
        type: String,
        default: 'notPaid',
        
    },
    DriverBillStatus: {
        type: String,
        default: 'notPaid',
        
    },
    sitetoSendBill: {
        type: String,
        default: 'no',
        
    },
    drivertoSendBill: {
        type: String,
        default: 'no',
        
    },
    totalBill: {
        type: Number,
        trim: true,
        default: 0 //levanu total bill
    }, 
    dryverOutstendingPayment: {
        type: Number,
        trim: true,
        default: 0 //dryver na ketla baki?
    }, 
    unloadDate: {
        type: Date
    }, 
    warning: {
        type: String,
        required: false,
        default: 'low',
        enum: ['low', 'medium', 'high', 'risk']  // Optional warning levels
    },
    shipmentStartingDate: {
        type: Date,
        default: Date.now  // Automatically set to current date
    },
    shipmentEndingDate: {
        type: Date,
        default: Date.now  // Automatically set to current date
    },
    sitePaymentDate: {
        type: Date,
        default: null  // Automatically set to current date
    },
    driverPaymentDate: {
        type: Date,
        default: null  // Automatically set to current date
    },
    siteDeposit: {
        type: Number,
        trim: true,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now  // Automatically set to current date
    }
});

// Model creation
const shipment = mongoose.model('Shipment', ShipmentSchema);

export default shipment;
