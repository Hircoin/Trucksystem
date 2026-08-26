
import React, { useState, useEffect, useContext, useRef } from 'react';
import { styled, Box, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 18px;
`;

const initialShipmentdetail = {
    whereLoad: '',
    tonesLoad: '',
    ratePerTone: '',
    disel: '',
    product: '',
    createdDate: new Date()
};

const Addshipmentdetail = () => {
    const navigate = useNavigate();
    const { account } = useContext(DataContext);
    const [shipmentdetali, setShipmentdetail] = useState({
        ...initialShipmentdetail,
        truckOwner: account?.username || ''
    });
    const [file, setFile] = useState(null);
    


  // Extract truckId and driverId from the URL query string using URLSearchParams
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const truck = queryParams.get('Truck');
        const driver = queryParams.get('Driver');

    // Update state with truckId and driverId values
    if (truck) {
        setShipmentdetail(prevState => ({
            ...prevState,
            truckId: truck // Set the truckId in state
        }));
        }

        if (driver) {
        setShipmentdetail(prevState => ({
            ...prevState,
            drivereId: driver // Set the driverId in state
        }));
        }
    }, []); // Only run once on component mount\
    
    const url = shipmentdetali.picture || 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        setShipmentdetail((prev) => ({ ...prev }));
    }, []);

    // const saveShipmentbill = async () => {
    //     try {
    //         let response = await API.addShipmentbill(shipmentdetali);
    //         if (response.status === 201 && response.data && response.data.isSuccess) {
    //             navigate('/');
    //         }
    //     } catch (error) {
    //         console.error("Error saving shipment details:", error);
    //     }
    // };

    const saveShipmentbill = async () => {
        try {
            let response = await API.addShipmentbill(shipmentdetali);
            console.log("Response received:", response);
            
            if (response.status === 201) {
                console.log("Navigating to home...");
                navigate('/');  // This should now work
            }
        } catch (error) {
            console.error("Error saving shipment details:", error);
        }
    };

    const handleChange = (e) => {
        setShipmentdetail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <Container>
            <Image src={url} alt="shipment" />
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <Button onClick={saveShipmentbill} variant="contained" color="primary">
                    Publish
                </Button>
            </StyledFormControl>
            <InputTextField onChange={handleChange} name="whereLoad" placeholder="Lease Name" />
            <InputTextField onChange={handleChange} name="tonesLoad" placeholder="How Much Tone Load?" />
            <InputTextField onChange={handleChange} name="ratePerTone" placeholder="Rate Per Tone" />
            <InputTextField onChange={handleChange} name="disel" placeholder="Disel (rs)" />
            <InputTextField onChange={handleChange} name="product" placeholder="Product Name" />
            {/* <InputTextField onChange={handleChange} name="plateno" placeholder="Truck Num" />
            <InputTextField onChange={handleChange} name="royalty" placeholder="Royalty" />
            <InputTextField onChange={handleChange} name="tyersNumbers" placeholder="Tyers Numbers" />
            <InputTextField onChange={handleChange} name="engineNum" placeholder="Engine Num" />
            <InputTextField onChange={handleChange} name="secisNum" placeholder="Secis Num" />
            <InputTextField onChange={handleChange} name="insurenceNum" placeholder="Insurence Num" />
            <InputTextField onChange={handleChange} name="registerNum" placeholder="Register Num" /> */}
        </Container>
    );
};

export default Addshipmentdetail;
