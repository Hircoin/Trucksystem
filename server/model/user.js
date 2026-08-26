// import mongoose from 'mongoose';

// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });


// const user = mongoose.model('user', userSchema);

// export default user;

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobileno: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    singupDate: {
        type: Date,
        default: Date.now
    },
    paidServices: {
        type: String,
        enum: ['paid', 'unpaid'],
        default: 'unpaid'
    },
    verifyedServices: {
        type: String,
        enum: ['yes', 'none'],
        default: 'none'
    },
    freeTrialEndDate: {
        type: Date,
        default: function() {
            let trialEndDate = new Date();
            trialEndDate.setDate(trialEndDate.getDate() + 7); // Assuming 7-day trial
            return trialEndDate;
        }
    },
    serviceEndDate: {
        type: Date,
        default: Date.now
    },
    loginCount: {
        type: Number,
        required: false,
        default: 0 // Default value is 0
    },
    numoftruck: {
        type: Number,
        required: false,
        default: 0 // Default value is 0
    },
    totalShipmentdelaypayment: {
        type: Number,
        required: false,
        default: 0 // Default value is 0
    },
    numofshipmentdelay: {
        type: Number,
        required: false,
        default: 0 // Default value is 0
    },
    TotalBalence: {
        type: Number,
        required: false,
        default: 0 // Default value is 0
    },
});


const user = mongoose.model('user', userSchema);

export default user;
