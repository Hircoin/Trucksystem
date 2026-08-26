import React, { useState, useContext, useEffect  } from 'react';
import { TextField, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, InputLabel, FormControl  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataContext } from "../../context/DataProvider";
import { API } from '../../service/api';
import Calldata from './calldata'; // Import the new component

const DateSearchPage = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [nameId, setNameid] = useState('');
    const [truckId, setTruckid] = useState('');
    const [driverId, setDriverid] = useState('');
    const [siteId, setSiteid] = useState('');
    const [entity, setEntity] = useState('Truck');
    const { account } = useContext(DataContext);
    const [responseData, setResponseData] = useState([]); // State to store API response
    const [trucks, setTrucks] = useState([]); // State to store truck data

    useEffect(() => {
            const fetchData = async () => {
                if (!entity || !account?.username) {
                    console.log("Entity or account is missing, skipping API call.");
                    return; // Prevent API call if entity or username is missing
                }
        
                console.log(`Fetching data for entity: ${entity} and username: ${account.username}`);
        
                try {
                    let response;
        
                    switch (entity) {
                        case "Truck":
                            response = await API.getTruckbyowner(account.username);
                            break;
                        case "Driver":
                            response = await API.getDriverbyowner(account.username);
                            break;
                        case "Site":
                            response = await API.getSitebyowner(account.username);
                            break;
                        default:
                            return;
                    }
                    
                    // Check if the response is successful and update the state
                    if (response?.isSuccess) {
                        setTrucks(response.data);
                    } else {
                        console.log("API response was not successful.");
                    }
                } catch (error) {
                    console.error("Error fetching property data:", error);
        
                    if (error.response?.status === 403) {
                        navigate("/login");
                    }
                }
            };
        
            // Call fetchData whenever the entity or account.username changes
            fetchData();
        }, [entity, account.username]); // Dependency on entity and account.username

    // const handleSearch = async () => {
    //     // Check if both start and end dates are selected
    //     if (startDate && endDate) {
    //         try {
    //             // Construct the query string using the account username and date range
    //             const queryString = `?id=${account.username}&startingdate=${startDate}&endingdate=${endDate}&nameId=${nameId}`;
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
    

    const handleSearch = async () => {
        if (startDate && endDate) {
            try {
                let queryString = `?id=${account.username}&startingdate=${startDate}&endingdate=${endDate}`;
    
                // Append only the relevant ID based on the selected entity
                if (entity === "Truck") {
                    queryString += `&truckid=${truckId}`;
                } else if (entity === "Driver") {
                    queryString += `&driverid=${driverId}`;
                } else if (entity === "Site") {
                    queryString += `&siteid=${siteId}`;
                }
    
                console.log("Generated Query String:", queryString); // Debugging
    
                // API call
                const response = await API.dateReport(queryString);
                console.log("API Response:", response);
    
                // Check if response is valid
                if (response.isSuccess && Array.isArray(response.data.data)) {
                    setResponseData(response.data.data);
                } else {
                    console.error("Fetched data is not valid:", response);
                    setResponseData([]); // Reset to empty array if no valid data
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                alert(`Error fetching data: ${error.message}`);
            }
        } else {
            alert("Please select both start and end dates.");
        }
    };
    

    return (
        <Box sx={{ padding: '20px' }}>
            <h2>Date Range Search</h2>

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

            {/* <Box sx={{ marginBottom: '15px' }}>
                <TextField
                    label="Truckname"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={startDate}
                    onChange={(e) => setTruckname(e.target.value)}
                    fullWidth
                />
            </Box> */}
<div className="flex space-x-4">
            <button
            onClick={() => setEntity('Truck')}
            className={`px-4 py-2 rounded-xl border ${
                entity === 'Truck' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            >
            Truck
            </button>
            <button
            onClick={() => setEntity('Driver')}
            className={`px-4 py-2 rounded-xl border ${
                entity === 'Driver' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            >
            Driver
            </button>
            <button
            onClick={() => setEntity('Site')}
            className={`px-4 py-2 rounded-xl border ${
                entity === 'Site' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            >
            Site
            </button>
        </div>
            <Box sx={{ marginBottom: '15px' }}>
                {/* Dropdown to select truck */}
                {/* <FormControl fullWidth>
                    <InputLabel>Truck Name</InputLabel>
                    <Select
                        value={truckName}
                        onChange={(e) => setTruckname(e.target.value)}
                        label={`${entity} Name`} // Dynamically update label
                    >
                        {/* Map over the trucks array to generate options 
                        {trucks.map((truck) => (
                            <MenuItem key={truck._id} value={truck.Truckname}>
                                {truck.truckName} 
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> */}
                
                {/* <FormControl fullWidth>
                    <InputLabel>{entity} Name</InputLabel>
                    <Select
                        value={nameId}
                        onChange={(e) => setNameid(e.target.value)} // Store _id instead of name
                        label={`${entity} Name`}
                    >
                        {Array.isArray(trucks) && trucks.length > 0 ? (
                            trucks.map((item) => (
                                <MenuItem key={item._id} value={item._id}> 
                                    {entity === "Truck" ? item.truckName : 
                                    entity === "Driver" ? item.driverName : 
                                    entity === "Site" ? item.siteName : "Unknown"}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>No {entity}s Available</MenuItem>
                        )}
                    </Select>
                </FormControl> */}

                <FormControl fullWidth>
                    <InputLabel>{entity} Name</InputLabel>
                    <Select
                        value={entity === "Truck" ? truckId : entity === "Driver" ? driverId : siteId}
                        onChange={(e) => {
                            const selectedId = e.target.value;
                            if (entity === "Truck") {
                                setTruckid(selectedId);
                            } else if (entity === "Driver") {
                                setDriverid(selectedId);
                            } else if (entity === "Site") {
                                setSiteid(selectedId);
                            }
                        }}
                        label={`${entity} Name`}
                    >
                        {Array.isArray(trucks) && trucks.length > 0 ? (
                            trucks.map((item) => (
                                <MenuItem key={item._id} value={item._id}>
                                    {entity === "Truck" ? item.truckName : 
                                    entity === "Driver" ? item.driverName : 
                                    entity === "Site" ? item.siteName : "Unknown"}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>No {entity}s Available</MenuItem>
                        )}
                    </Select>
                </FormControl>

            </Box>

            <Button variant="contained" onClick={handleSearch}>
                Search
            </Button>

            {/* Render Table only if there is response data */}
            <TableContainer  sx={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Truck Number</TableCell>
                            <TableCell>Created Date</TableCell>
                            <TableCell>Driver Name</TableCell>
                            <TableCell>Where To Load </TableCell>
                            <TableCell>How Much Load</TableCell>
                            <TableCell>Rate Per Tone</TableCell>
                            <TableCell>Disel</TableCell>
                            <TableCell>Driver TripSalary</TableCell>
                            <TableCell>Tole</TableCell>
                            <TableCell>Royalty Num</TableCell>
                            <TableCell>Shipment Status</TableCell>
                            <TableCell>Site Kato</TableCell>
                            <TableCell>Site Rate</TableCell>
                            <TableCell>Product</TableCell>
                            
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* <p>{JSON.stringify(responseData)}</p> */}
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
