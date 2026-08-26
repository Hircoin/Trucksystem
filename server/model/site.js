import mongoose from 'mongoose';

// PROPERTY SCHEMA

const SiteSchema = new mongoose.Schema({
    siteName: {
        type: String,
        trim: true,
        default: ''
    },
    massage: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    structureMassage: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    address: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    siteManager: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    sitePerson: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    siteOwner: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    truckOwner: {
        type: String,
        required: true,
        default: ''
    },
    katoSite: {
        type: String,//yes,no
        trim: true,
        default: 'yes'
    },
    siteManagerNum: {
        type: Number,
        required: false,
        default: 0
    },
    ratePerTone: {
        type: Number,
        required: false,
        default: 0
    },
    distencekm: {
        type: Number,
        required: false,
        default: 0
    },
    runningTrucks: {
        type: Number,
        required: false,
        default: 0
    },
    runningStatus: {
        type: String,
        required: false,
        default: 'yes' // yes,no
    },
    paymentOutstending: {
        type: String,
        required: true,
        default: 0
    },
    paymentstartingDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    paymentendingDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    paymentAmount: {
        type: Number,
        required: false,
        default: 0
    },
    paymentDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    siteId: {
        type: String,
        required: false,
        default: ''
    },
    sitePassword: {
        type: String,
        required: false,
        default: ''
    },
    siteverifyes: {
        type: String,
        required: false,// yes,no
        default: 'no'
    },
    siteProduct: {
        type: String,
        required: false,// reti,kapchi
        default: ''
    },
    siteStatus: {
        type: String,
        required: false,// active, deactive,workcomplet
        default: 'active'
    },
    workingStatus: {
        type: String,
        required: false,// yes,no
        default: 'yes'
    },
    lastdriver: {
        type: String,
        trim: true,
        default: ''
    },
    lasttruck: {
        type: String,
        trim: true,
        default: ''
    },
    lasttripDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    createdDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    }
});

// Model creation
const site = mongoose.model('Site', SiteSchema);

export default site;
