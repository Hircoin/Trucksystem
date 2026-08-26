import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@trucksystem.6tbs7.mongodb.net/?retryWrites=true&w=majority&appName=Trucksystem`;
    //const URL = `mongodb+srv://${username}:${password}@trucksystem.6tbs7.mongodb.net/?retryWrites=true&w=majority&appName=Trucksystem`;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true  })
        console.log('Database connected successfully');
    } catch (error) { 
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
