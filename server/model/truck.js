import mongoose from 'mongoose';

// PROPERTY SCHEMA

const TruckSchema = new mongoose.Schema({
    truckName: {
        type: String,
        trim: true,
        default: ''
    },
    modelname: {
        type: String,
        trim: true,
        default: ''
    },
    discription: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    modelYear: {
        type: Number,
        required: false,
        trim: true,
        default: 2020
    },
    modelCapacity: {
        type: Number,
        required: false,
        default: 0
    },
    licensedriver: {
        type: String,
        required: false,//which tyoe licence car,two wheel...
        default: 'truck'
    },
    plateno: {
        type: String,
        required: true,
        default: ''
    },
    royalty: {
        type: Number,
        required: true,
        default: 0
    },
    picture: {
        type: String,
        required: false,
        default: ''
    },
    truckOwner: {
        type: String,
        required: true,
        default: ''
    },
    tyersNumbers: {
        type: Number,
        trim: true,
        default: 0
    },
    tyersDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    insuranceDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    insurancelastDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    enginelastdate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    engineNum: {
        type: String,
        required: false,
        default: 0
    },
    permite: {
        type: String,
        trim: true,
        default: 'no'
    },
    permitelastDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    tyerlastDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    puclastDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    greecelastDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    serviceDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    GPSlastDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    batterywaterlastDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    secisNum: {
        type: Number,
        required: false,
        default: 0
    },
    insurenceNum: {
        type: Number,
        required: false,
        default: 0
    },
    registerNum: {
        type: Number,
        required: false,
        default: 0
    },
    lastdriver: {
        type: String,
        trim: true,
        default: ''
    },
    lastsite: {
        type: String,
        trim: true,
        default: ''
    },
    lasttripDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    performanceShipment: {
        type: Number,
        required: false,
        default: 0
    },
    fuelAvg: {
        type: Number,
        required: false,
        default: 0
    },
    speedAvg: {
        type: Number,
        required: false,
        default: 0
    },
    profitAvg: {
        type: Number,
        required: false,
        default: 0
    },
    maintainenseAvg: {
        type: Number,
        required: false,
        default: 0
    },
    maintainenseStatus: {
        type: String,
        trim: true,
        default: 'no'
    },
    createdDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    }
});

// Model creation
const truck = mongoose.model('Truck', TruckSchema);

export default truck;
