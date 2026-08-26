
import React, { useState } from "react";
import { styled, Box, Typography, Autocomplete, TextField } from '@mui/material';

import { Link } from "react-router-dom";
import "./banner.css";
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

    const [stock, setStock] = useState("GAIL");
    
    

    const handleInputChange = (event, value) => {
        // setStockName(event.target.value);
        setStock(value ? value.label : ""); // Assuming value is an object with a 'label' property
        
    };
    
    
    
    
    
    return (
        <Image>
            {/* <Heading>R</Heading> */}
            {/* <SubHeading>Search Stock</SubHeading> */}
            <div>
                {/* Additional Buttons for Routing */}
                <Link to={`/add/newShipment`}>
                    <div className="home-subscribe" >
                    <span className="home-text116">   NEW Start Shipment</span>
                    </div>
                </Link> 
                <Link to={`/closeShipment`}>
                    <div className="home-subscribe" >
                    <span className="home-text116">   Edit/Close Shipment </span>
                    </div>
                </Link> 
            </div>
            
        </Image>
    );
};

export default Banner;
