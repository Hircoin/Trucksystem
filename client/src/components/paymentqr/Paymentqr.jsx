
import React, { useState } from "react";
import { styled, Box, Typography, Autocomplete, TextField } from '@mui/material';

import { Link } from "react-router-dom";
import "./Paymentqr.css";
const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
`;





const Banner = () => {

    const [plane, setPlane] = useState("");
    const [price, setPrice] = useState("");
    
    

    const handleInputChange = (event, value) => {
        // setStockName(event.target.value);
        setPlane(value ? value.label : ""); // Assuming value is an object with a 'label' property
        setPrice(value ? value.price : "");
    };
    
    
    
    const top100Films = [
    
        
        { label: "7-Days", price: 99 },
        { label: "1-Month", price: 299 },
        { label: "6-Month", price: 699 },
        { label: "1-Year", price: 1299 },
        
  
  
  
    
    ];
    
    return (
        <Image>
            <Heading>Process of Payment</Heading>
            {/* <SubHeading>Search Stock</SubHeading> */}
            <div>
            <div >
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    className="home-textinput input"
                    options={top100Films}
                    // filterOptions={filterOptions}
                    // getOptionLabel={(option) => option.label}
                    sx={{ width: 300 }}
                    onChange={handleInputChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Select Time-period" />
                    )}
                    />
                </div>
                {/* <Link to={`/stock/?stock=${stock}`}>
                    <div className="home-subscribes" >
                    <span className="home-text114">app planes</span>
                    </div>
                </Link>   */}
                <Link to={`plane/${price}`}>
                    <div className="home-subscribe" >
                    <span className="home-text116">Click For Payment</span>
                    </div>
                </Link>  
            </div>
            
        </Image>
        
    );
};

export default Banner;
