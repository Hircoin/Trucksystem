
import React, { useState,  useEffect, useContext } from 'react';
import {
    TextField,
    Button,
    Box,
    Grid,
    Typography,
    Paper,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
import Calldata from './calldata'; // Import the new component

const AddThisMonth = () => {
    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');
    const { account } = useContext(DataContext);
    const [responseData, setResponseData] = useState([]); // State to store API response
    const [rawResponse, setRawResponse] = useState([]); // State to store raw response
    const [renter, setRenter] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
            const fetchData = async () => {
                try {
                    let response = await API.getShipmentbyOwner(account.username);
                    if (response.isSuccess) {
                        setRawResponse(response.data.slice().reverse());
                    }
                } catch (error) {
                    console.error("Error fetching property data:", error);
                    if (error.response?.status === 403) {
                        navigate("/login");
                    }
                }
            };
            fetchData();
        }, [account, navigate]);


    // const handleSearch = async () => {
    //     if (startDate && endDate) {
    //         try {
    //             const queryString = `?id=${account.username}&startingdate=${startDate}&endingdate=${endDate}`;
    //             const response = await API.dateReport(queryString);

    //             setRawResponse(response.data.data); // Store raw response for display
    //             if (response.success && Array.isArray(response.data.data)) {
    //                 setResponseData(response.data.data);
    //             } else {
    //                 setResponseData([]);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             alert('Error fetching data. Please try again later.');
    //         }
    //     } else {
    //         alert('Please select both start and end dates.');
    //     }
    // };

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Last Update Data
            </Typography>


            {/* Display Response Data */}
            {rawResponse.length > 0 ? (
                <>
                    
                    <div>
                        {
                            rawResponse?.length ? rawResponse.map(post => (
                                <Grid item lg={3} sm={4} xs={12}>
                                
                                
                                    {/* <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/viewrenter/${post.rentId}`}> */}
                                        <Calldata post={post} />
                                    {/* </Link> */}
                                
                                </Grid>
                            )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                                    No data is available for selected category
                                </Box>
                        }
                    </div>
                </>
            ) : (
                <>
                    <Typography
                        sx={{
                            color: '#878787',
                            margin: '20px 0',
                            fontSize: 18,
                            textAlign: 'center',
                        }}
                    >
                        No data is available for the selected date range.
                    </Typography>
                    
                </>
            )}
        </Box>
    );
};

export default AddThisMonth;
