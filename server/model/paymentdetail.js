import mongoose from 'mongoose';


const PaymentDetailSchema = mongoose.Schema({
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
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const PaymentDetail = mongoose.model('PaymentDetail', PaymentDetailSchema);

export default PaymentDetail;
