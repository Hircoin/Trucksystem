    // import { styled, Box, Typography } from "@mui/material";

    //     import  { React,useState } from "react";
    //     import  './Aistock.css';
    //     const Aistock = () => {

    //     const [stockName, setStockName] = useState("");
    //     const [responseData, setResponseData] = useState([]);
    //     const [showResult, setShowResult] = useState(false);

    //     const handleInputChange = (event) => {
    //         setStockName(event.target.value);
    //     };

    //     const getStock = () => {
    //       // Simulating API call with timeout
    //         setTimeout(() => {
    //         // Mock response data
    //         const mockResponseData = [
    //             { stock: "RCL", name: "BSD", user: "Vinay", price: 32 },
    //         ];
    //         setResponseData(mockResponseData);
    //         setShowResult(true);
    //         }, 1000);
    //     };

    //     const handleOkButtonClick = () => {
    //         setStockName("");
    //         setResponseData([]);
    //         setShowResult(false);
    //     };

    //     return (
    //         <div className="stock-market-background">
    //           <div className="search-container">
    //             {showResult ? (
    //               <div>
    //                 <button className="ok-button" onClick={handleOkButtonClick}>OK</button>
    //                 <ul>
    //                   {responseData.map((item, index) => (
    //                     <li key={index}>
    //                       Stock: {item.stock}, Name: {item.name}, User: {item.user}, Price: {item.price}
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </div>
    //             ) : (
    //               <div>
    //                 <input
    //                   className="search-input"
    //                   type="text"
    //                   placeholder="Enter stock name"
    //                   value={stockName}
    //                   onChange={handleInputChange}
    //                 />
    //                 <button className="search-button" onClick={getStock}>Search</button>
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       );
    // };

    // export default Aistock;

    import React, { useState, useEffect } from "react";
    import { useSpring, animated } from "react-spring";
    import { Autocomplete, TextField } from "@mui/material";
    import { Link } from "react-router-dom";
    import "./Livesearchfilter.css"; // Import CSS file for custom styling

    const Livesearchfilter = () => {
    const [signal, setSignal] = useState("");
    const [circles, setCircles] = useState([]);
    // const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        // Initialize circles
        const initialCircles = Array.from({ length: 150 }, (_, index) => ({
            id: index,
            size: Math.random() * 30 + 15, // Random size between 150 and 450
            color: getRandomColor(), // Random color
            angle: Math.random() * Math.PI * 2, // Random initial angle
            speed: Math.random() * 0.01 + 0.005, // Random speed between 0.005 and 0.015
        }));
        setCircles(initialCircles);
    
        // Set interval to update circles every 10 milliseconds
        const intervalId = setInterval(updateCircles, 10);
        return () => clearInterval(intervalId);
    }, []);
    
    const updateCircles = () => {
        setCircles(prevCircles => 
            prevCircles.map(circle => {
                const newAngle = circle.angle + circle.speed;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const radius = Math.min(centerX, centerY) * 0.8;
    
                const newX = centerX + radius * Math.cos(newAngle);
                const newY = centerY + radius * Math.sin(newAngle);
    
                const newPosition = {
                    x: newX,
                    y: newY
                };
    
                return {
                    ...circle,
                    angle: newAngle,
                    position: newPosition
                };
            })
        );
    };
    
    
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const slideIn = useSpring({
        from: { transform: "translateY(100px)" },
        to: { transform: "translateY(0)" },
        config: { duration: 500 },
    });

    const handleInputChange = (event, value) => {
        // setStockName(event.target.value);
        setSignal(value ? value.label : ""); // Assuming value is an object with a 'label' property
    };

    

    const top100Films = [
        { label: "BUY FOR MONTH", year: 2008 },
        { label: "BUY FOR WEEK", year: 2008 },
        { label: "STRONG BUY", year: 2008 },
        { label: "BUY", year: 1957 },
        { label: "Hold", year: 1994 },
        { label: "SELL", year: 1974 },
        { label: "SELL NOW", year: 1972 },
    ];

    // const filterOptions = (options, { inputValue }) => {
    //   return options.filter(option => {
    //     // Check if the year matches the input value
    //     return option.year.toString().includes(inputValue);
    //   });
    // };

    return (
        <div className="stock-market-background">
        {circles.map((circle) => (
            <div
            key={circle.id}
            className="circle"
            style={{
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                backgroundColor: circle.color,
                left: `${circle.position ? circle.position.x : 0}px`,
            top: `${circle.position ? circle.position.y : 0}px`,
            }}
            />
        ))}

        <div className="stock-market-background">
            <animated.div style={slideIn}>
            
            <div className="home-left4">
                <span className="home-text115">Livesearchfilter Subscribe to our newsletter</span>
                
                <div>
                <div>
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
                        <TextField {...params} label="Search Signal" />
                    )}
                    />
                </div>
                <Link to={`${signal}`}>
                    <div className="home-subscribe" >
                    <span className="home-text116">Filter Stock</span>
                    </div>
                </Link>
                </div>
                <span className="home-text117">
                Livesearchfilter agree with our Terms and
                Conditions.
                </span>
            </div>
            </animated.div>
        </div>
        </div>
    );
    };

    

    export default Livesearchfilter;
