import mongoose from 'mongoose';

// PROPERTY SCHEMA

const DriverSchema = new mongoose.Schema({
    driverNumber: {
        type: String,
        required: true,
        trim: true
    },
    driverNumberLicence: {
        type: String,
        required: false,
        trim: true
    },
    driverExperience: {
        type: Number,
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
    truckOwner: {
        type: String,
        required: true,
        default: ''
    },
    driverAdharcard: {
        type: Number,
        required: false,
        default: 0
    },
    massage: {
        type: String,
        required: false,
        default: '' //payment sedule
    },
    drivereStatus: {
        type: String,
        required: false,
        default: 'active'  // holiday, off,active
    },
    dryvereProfesion: {
        type: String,
        required: false,
        default: 'longroot'  // long root,reti,shortroot
    },
    drivereFree: {
        type: String,
        required: false,
        default: 'yes'  // yes, no
    },
    drivereOutstandingPayment: {
        type: Number,
        required: false,
        default: 0  // payment for pay
    },
    startingdatepayment: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    },
    endingdatepayment: {
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
    lasttruck: {
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
    drivereId: {
        type: String,
        required: false,
        default: '' //payment sedule
    },
    driverPassword: {
        type: String,
        required: false,
        default: '' //payment sedule
    },
    driverVeryfyed: {
        type: String,
        required: false,
        default: '' //payment sedule
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
    fixedSalery: {
        type: Number,
        required: false,
        default: 0
    },
    tripSalary: {
        type: Number,
        required: false,
        default: 0
    },
    maintainenseAvg: {
        type: Number,
        required: false,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now  // Automatically sets to current date
    }
});

// Model creation
const driver = mongoose.model('Driver', DriverSchema);

export default driver;
