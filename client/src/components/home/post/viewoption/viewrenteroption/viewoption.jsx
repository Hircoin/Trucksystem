import React, { useState,useEffect, useContext } from 'react';
import { TextField, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { DataContext } from "../../../../../context/DataProvider";
import { API } from '../../../../../service/api';
import Calldata from './calldata'; // Import the new component

const DateSearchPage = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const { account } = useContext(DataContext);
    const [responseData, setResponseData] = useState([]); // State to store API response
    const [loading, setLoading] = useState(false);
    // Using useLocation to extract the pathname and search parameters
    const location = useLocation();

    // Extracting the specific segment from the pathname
    const pathSegments = location.pathname.split('/'); // Split the path by '/'
    const period = pathSegments[2]; // Extract the second segment (e.g., Month, Year, LastYear)
    const billtype = pathSegments[1]; // Extract the second segment (e.g., Month, Year, LastYear)

    // Using URLSearchParams to parse the query string and get the "renter" value
    const queryParams = new URLSearchParams(location.search);
    const rentId = queryParams.get("renter");

// useEffect to call the API on route or query change
useEffect(() => {
    const fetchData = async () => {
        if (!rentId || !period) {
            alert("Invalid route parameters. Please check your URL.");
            return;
        }

        setLoading(true); // Set loading to true while fetching
        try {
            // Construct query string
            const queryString = `?renterId=${rentId}&period=${period}&billtype=${billtype}`;
            const response = await API.rentbillReport(queryString);
            console.log("API Response:", response); // Log the API response

            // Check if the response is valid and contains data
            if (response.isSuccess && Array.isArray(response.data)) {
            setResponseData(response.data);
            } else {
            console.error("Invalid response data:", response);
            setResponseData([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            alert(`Error fetching data: ${error.message}`);
        } finally {
            setLoading(false); // Stop loading
        }
        };

        fetchData();
    }, [rentId, period,billtype]); // Dependency array to trigger API call on changes

    // const handleSearch = async () => {
    //     // Check if both start and end dates are selected
    //     if (startDate && endDate) {
    //         try {
    //             // Construct the query string using the account username and date range ?id=${account.username}&startingdate=${startDate}&endingdate=${endDate}
    //             const queryString = `?id=${account.username}`;
    //             const response = await API.dateReport(queryString);
    //             console.log('API Response:', response); // Log the entire response
    
    //             // Check if the response is successful and contains data
    //             if (response.isSuccess && Array.isArray(response.data)) {
    //                 console.log('Setting responseData:', response.data); // Log the data being set
    //                 setResponseData(response.data); // Set the state with the array from data
    //             } else {
    //                 console.error('Fetched data is not valid:', response);
    //                 setResponseData([]); // Set to an empty array if not valid
    //             }
    //         } catch (error) {
    //             // Catch any errors during the fetch and alert the user
    //             console.error('Error fetching data:', error);
    //             alert(`Error fetching data: ${error.message}`); // Display the error message
    //         }
    //     } else {
    //         // Alert the user if start and end dates are not selected
    //         alert('Please select both start and end dates.');
    //     }
    // };
    

    return (
        <Box sx={{ padding: '20px' }}>
            {/* <h2>Date Range Search</h2>

            <Box sx={{ marginBottom: '15px' }}>
                <TextField
                    label="Starting Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    fullWidth
                />
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <TextField
                    label="Ending Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    fullWidth
                />
            </Box>

            <Button variant="contained" onClick={handleSearch}>
                Search
            </Button> */}

            {/* Render Table only if there is response data */}
            <TableContainer  sx={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Stock Ticker</TableCell>
                            <TableCell>Stock Name</TableCell>
                            <TableCell>Live Price</TableCell>
                            <TableCell>User Buy Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(responseData) ? (
                            responseData.map((row) => (
                                <TableRow key={row._id}>
                                <Calldata  post={row} /> 
                                </TableRow>
                                // <TableRow key={row._id}>
                                //     <TableCell>{row.stockticker}</TableCell>
                                //     <TableCell>{row.stockname}</TableCell>
                                //     <TableCell>{row.userstockBuyprice}</TableCell>
                                //     <TableCell>{row.target?.toFixed(2)}</TableCell>
                                //     <TableCell>{row.stoploss?.toFixed(2)}</TableCell>
                                //     <TableCell>{new Date(row.userbuydate).toLocaleDateString()}</TableCell> {/* Corrected field */}
                                //     <TableCell>{row.portfolioname}</TableCell>
                                //     <TableCell>{row.usersellprice ? row.usersellprice : "N/A"}</TableCell>
                                //     <TableCell>{row.userselldate ? new Date(row.userselldate).toLocaleDateString() : "N/A"}</TableCell>
                                //     <TableCell>{row.expectedExitDate ? new Date(row.expectedExitDate).toLocaleDateString() : "N/A"}</TableCell>
                                // </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={10} style={{ textAlign: 'center' }}>
                                    No data available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default DateSearchPage;
