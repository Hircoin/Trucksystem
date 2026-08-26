import mongoose from 'mongoose';

// BURNING COSTS SCHEMA

const BurningSchema = new mongoose.Schema({
    textMessage: {
        type: String,
        required: false,
        trim: true
    },
    propertyId: {
        type: String,
        required: false,
        trim: true
    },
    propertyName: {
        type: String,
        required: false,
        trim: true
    },
    flourId: {
        type: String,
        required: false,
        trim: true
    },
    flourName: {
        type: String,
        required: false,
        trim: true
    },
    ownerName: {
        type: String,
        required: true,
        trim: true
    },
    selfCosts: {
        type: String,
        required: false,
        default: 'yes',
        enum: ['yes', 'no']  // Restrict possible values to 'yes' or 'no'
    },
    createdDate: {
        type: Date,
        default: Date.now  // Automatically set to the current date
    },
    amountValue: {
        type: Number,
        required: false,
        default: 0
    }
});

// Model creation
const burning = mongoose.model('burning', BurningSchema);

export default burning;
