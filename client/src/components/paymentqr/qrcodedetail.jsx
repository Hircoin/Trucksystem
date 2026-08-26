
        import React, { useState } from 'react';
        import { API } from '../../service/api';
        import { useParams, useNavigate } from 'react-router-dom';
        import { styled, Typography, Box, TextField, Button } from '@mui/material';
        
        const Error = styled(Typography)`
        font-size: 10px;
        color: #ff6161;
        line-height: 0;
        margin-top: 10px;
        font-weight: 600;
        `;
        
        const FormContainer = styled(Box)`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f9f9f9;
        padding: 20px;
        margin: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        `;
        
        const InputContainer = styled(Box)`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 15px;
        
        & > label {
            margin-bottom: 5px;
            font-weight: bold;
        }
        `;
        
        const SubmitButton = styled(Button)`
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        
        &:hover {
            background-color: #0056b3;
        }
        `;
        
        const UserDetailsForm = () => {
        const { prices } = useParams();
        const [error, showError] = useState('');
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
            transactionId: '',
            username: '',
            name: '',
            phoneNumber: ''
        });
        
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({
            ...formData,
            [name]: value
            });
        };
        
        const handleSubmit = async (e) => {
            e.preventDefault(); // Prevent default form submission
            try {
            let response = await API.userPaymentdetail(formData);
            if (response.isSuccess) {
                showError('');
                navigate('/');
            } else {
                showError('Something went wrong! Please check your username. Please try again later.');
            }
            } catch (error) {
            showError('An error occurred. Please try again later.');
            console.error('Error during submission:', error);
            }
        };
        
        return (
            <FormContainer>
            <h2>Scan and Pay {prices} for</h2>
            <img src="/hiregpyqrcode.png" alt="QR Code" style={{ margin: '20px 0' }} />
            {error && <Error>Error: {error}</Error>}
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <InputContainer>
                <label>UPI Transaction ID*:</label>
                <TextField
                    variant="outlined"
                    name="transactionId"
                    value={formData.transactionId}
                    onChange={handleInputChange}
                    required
                    fullWidth
                />
                </InputContainer>
                <InputContainer>
                <label>Username*:</label>
                <TextField
                    variant="outlined"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    fullWidth
                />
                </InputContainer>
                <InputContainer>
                <label>Name*:</label>
                <TextField
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    fullWidth
                />
                </InputContainer>
                <InputContainer>
                <label>Phone Number*:</label>
                <TextField
                    variant="outlined"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    fullWidth
                />
                </InputContainer>
                <p>Pay Price for: <b>{prices}</b></p>
                <SubmitButton type="submit" variant="contained">Submit</SubmitButton>
            </form>
            </FormContainer>
        );
        };
        
        export default UserDetailsForm;
        