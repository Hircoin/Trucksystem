import React, { useState, useContext} from 'react';


import {TextField, Box, Button ,styled,Typography} from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Wrappert = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 10px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`
const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 16px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
    mobileno: '',
    email: '',
    numoftruck:'',
};


const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);


    const imageURL = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzJ3QAIT6ZVbAh8cAWbovbvvwlEAkHNRMORw2a0FkA7sc91tB_kB-f_8yYPuHa9-XBe1fGKUIFql5jtUez7yNtWX9HVsEfsACWHUWpzWluubY6fGKM5NPGj5NCHX7QKcDVtZJudoXOvHQ/s1600/Free-shipping-1pcs-lot-car-font-b-logo-b-font-Powerful-Silica-Gel-Magic-Sticky-Pad.jpg_250x250.jpg';

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }


    const loginUser = async () => {
        try {
            // Wait for the API call to complete and get the response
            let response = await API.userLogin(login);
    
            // Check if the login was successful
            if (response.isSuccess) {
                // Reset error message
                showError('');
    
                // Store access and refresh tokens in session storage
                    sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                    sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
    
                // Set account details and user authentication status
                    setAccount({ name: response.data.name, username: response.data.username });
                    isUserAuthenticated(true);
    
                // // Reset login form and navigate to home page
                    setLogin(loginInitialValues);
                    navigate('/');
            } else {
                // Display error message
                showError('Something went wrong! Please try again later.');
            }
        } catch (error) {
            // Handle any errors that occur during the API call
            showError('An error occurred. Please try again later.');
            console.error('Error during login:', error);
        }
    }


    // const signupUser = async () => {
    //     let response = await API.userSignup(signup);
    //     if (response.isSuccess) {
    //         showError('');
    //         setSignup(signupInitialValues);
    //         toggleAccount('login');
    //     } else {
    //         showError('Something went wrong! please try again later');
    //     }
    // }
    const signupUser = async () => {
        try {
            // Wait for the API call to complete and get the response
            let response = await API.userSignup(signup);
    
            // Check if the signup was successful
            if (response.isSuccess) {
                // Reset error message, signup form, and toggle to login view
                showError('');
                setSignup(signupInitialValues);
                toggleAccount('login');
            } else {
                // Display error message
                showError('Something went wrong! Please try again later.');
            }
        } catch (error) {
            // Handle any errors that occur during the API call
            showError('An error occurred. Please try again later.');
            console.error('Error during signup:', error);
        }
    }




    return (
        <Component> 
            <Box>  
                <Image src= {imageURL} alt="login" />
                {
                    account === 'login' ?
                <Wrapper>      
                    <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username'/>
                    <TextField variant="standard" type="password" autoComplete="current-password" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password'/>
                    {(error !== "") && <Error>{error}</Error>}
                    <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                    <Text style={{ textAlign: 'center' }}>OR</Text>
                    <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
                </Wrapper> 
                :
                <Wrapper>      
                    <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='name' label='Enter Name*' />
                    <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='username' label='Enter Username*' />
                    <TextField variant="outlined" type="password" onChange={(e) => onInputChange(e)} name='password' label='Enter Password*' />
                    <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='mobileno' label='Enter Mobile No*' />
                    <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='email' label='Enter Email ID*' />
                    <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='numoftruck' label='Num Of Truck*' />
                    {error  && <Error>{error}</Error>}
                    <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
                    <Text style={{ textAlign: 'center' }}>OR</Text>
                    <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                </Wrapper>  
                }
                
            </Box>      
        </Component>
    )
}


export default Login;

