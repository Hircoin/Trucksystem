import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../model/token.js'
import User from '../model/user.js';
import PaymentDetail from '../model/paymentdetail.js'; // Import your PaymentDetail model

dotenv.config();
export const singupUser = async (request, response) => {
    try {
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(request.body.password, salt);
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const user = { username: request.body.username, name: request.body.name, password: hashedPassword, mobileno: request.body.mobileno, email: request.body.email, numoftruck: request.body.numoftruck}
        // const user = request.body;

        const newUser = new User(user);
        await newUser.save();
        

        return response.status(200).json({ msg: 'Signup successfull' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}

// export const loginUser = async (request, response) => {
//     let user = await User.findOne({ username: request.body.username });
//     if (!user) {
//         return response.status(400).json({ msg: 'Username does not match' });
//     }

//     try {
//         let match = await bcrypt.compare(request.body.password, user.password);
//         if (match) {
//             // require('crypto').randomBytes(64).toString('hex') in node
//             const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});
//             const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            
//             const newToken = new Token({ token: refreshToken });
//             await newToken.save();
        
//             response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken,name: user.name, username: user.username });
        
//         } else {
//             response.status(400).json({ msg: 'Password does not match' })
//         }
//     } catch (error) {
//         response.status(500).json({ msg: 'error while login the user' })
//     }
// } 
export const loginUser = async (request, response) => {
    let user = await User.findOne({ username: request.body.username });
    if (!user) {
        return response.status(400).json({ msg: 'Username does not match' });
    }

    // Check if the user's trial or service is still active
    const currentDate = new Date();
    if ((user.freeTrialEndDate && user.freeTrialEndDate > currentDate) || (user.serviceEndDate && user.serviceEndDate > currentDate)) {
        if (user.loginCount < 100) {
        try {
            let match = await bcrypt.compare(request.body.password, user.password);
            if (match) {
                if (user.verifyedServices === 'yes') {
                // require('crypto').randomBytes(64).toString('hex') in node
                const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '480m'});
                const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
                
                const newToken = new Token({ token: accessToken,refreshToken:refreshToken });
                await newToken.save();
                user.loginCount += 1;
                await user.save();
                response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken,name: user.name, username: user.username });
                } else {
                    response.status(400).json({ msg: 'You are not a verified user' });
                }
            } else {
                response.status(400).json({ msg: 'Password does not match' });
            }
            } catch (error) {
                response.status(500).json({ msg: 'Error while logging in the user' });
            }
        } else {
            response.status(400).json({ msg: 'Maximum number of active devices reached' });
        }
    } else {
        response.status(400).json({ msg: 'Trial or service period has expired' });
    }
}


export const logoutUser = async (request, response) => {
    const token = request.body.token;
    await Token.deleteOne({ token: token });

    response.status(204).json({ msg: 'logout successfull' });
}



export const paymentDetail = async (request, response) => {
    try {
        // Check if user exists
        let user = await User.findOne({ username: request.body.username });

        if (user) {
            // If user exists, save data into PaymentDetail model
            const formData = {
                transactionId: request.body.transactionId,
                username: request.body.username,
                name: request.body.name,
                phoneNumber: request.body.phoneNumber
            };

            // Create a new PaymentDetail instance
            const paymentDetail = new PaymentDetail(formData);

            // Save paymentDetail to the database
            await paymentDetail.save();

            // Respond with success message
            return response.status(204).json({ msg: 'Payment detail saved successfully' });
        } else {
            // If user does not exist, respond with an error message
            return response.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error in paymentDetail controller:', error);
        return response.status(500).json({ error: 'Internal server error' });
    }
};
