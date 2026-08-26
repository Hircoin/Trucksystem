import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../model/token.js';

dotenv.config();

export const authenticateToken = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) {
        return response.status(401).json({ msg: 'token is missing' });
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
        if (error) {
            return response.status(403).json({ msg: 'invalid token' })
        }

        request.user = user;
        next();
    })
}

export const createNewToken = async (request, response) => {
    const refreshToken = request.body.token.split(' ')[1];

    if (!refreshToken) {
        return response.status(401).json({ msg: 'Refresh token is missing' })
    }

    const token = await Token.findOne({ token: refreshToken });

    if (!token) {
        return response.status(404).json({ msg: 'Refresh token is not valid'});
    }

    jwt.verify(token.token, process.env.REFRESH_SECRET_KEY, (error, user) => {
        if (error) {
            response.status(500).json({ msg: 'invalid refresh token'});
        }
        const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_KEY, { expiresIn: '480 m'});

        return response.status(200).json({ accessToken: accessToken })
    })


}


// export const authenticateToken = (request, response, next) => {
//     const authHeader = request.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
    
//     if (!token) {
//         // If the access token is missing, attempt to create a new one using the refresh token
//         return createNewToken(request, response);
//     }

//     // Verify the access token
//     jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
//         if (error) {
//             // If token is invalid, attempt to create a new one using the refresh token
//             return createNewToken(request, response);
//         }

//         // Attach the user object to the request
//         request.user = user;
//         next();
//     });
// };
// export const createNewToken = async (request, response) => {
//     const refreshToken = request.body.token?.split(' ')[1];  // Extract refresh token from the body

//     if (!refreshToken) {
//         return response.status(401).json({ msg: 'Refresh token is missing' });
//     }

//     try {
//         // Find the refresh token in the database
//         const tokenDoc = await Token.findOne({ refreshToken });

//         if (!tokenDoc) {
//             return response.status(404).json({ msg: 'Refresh token is not valid' });
//         }

//         // Verify the refresh token
//         jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY, async (error, user) => {
//             if (error) {
//                 return response.status(403).json({ msg: 'Invalid refresh token' });
//             }

//             // Generate a new access token valid for 60 minutes
//             const newAccessToken = jwt.sign({ id: user.id }, process.env.ACCESS_SECRET_KEY, { expiresIn: '60m' });

//             // Update the access token in the database (optional, depends on your schema)
//             await Token.findByIdAndUpdate(tokenDoc._id, { token: newAccessToken });

//             // Return the new access token in response
//             request.user = user;
//             request.newAccessToken = newAccessToken;  // Pass new access token to the next middleware if needed
//             next();
//         });
//     } catch (err) {
//         return response.status(500).json({ msg: 'Server error', error: err.message });
//     }
// };