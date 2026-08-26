
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./AddProperty.css"; // Import CSS file for custom styling

const AiService = () => {
const [stockService, setStockService] = useState("");
const [circles, setCircles] = useState([]);


useEffect(() => {
    // Initialize circles
    const initialCircles = Array.from({ length: 15 }, (_, index) => ({
        id: index,
        size: Math.random() * 300 + 150, // Random size between 150 and 450
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
    setStockService(value ? value.label : ""); // Assuming value is an object with a 'label' property
};



const top100Films = [
    { label: "AI-Vision", year: 1994 },
    { label: "AI-Think", year: 1972 },
    { label: "AI-Week", year: 1972 },
    { label: "AI-Portfolio", year: 1972 },
    { label: "AI-Friend", year: 1972 },
    { label: "AI-World", year: 1972 },
    // { label: "Paper-Trading", year: 1972 },
    { label: "AI-Resource", year: 1972 },
    { label: "AI-Shortterm", year: 1972 },
    { label: "AI-Longterm", year: 1972 },
    { label: "AI-Risklover", year: 1972 },
    { label: "AI-Riskever", year: 1972 },
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
            <span className="home-text115">AI Solutions Hub: Explore a World of Intelligent Services</span>
            
            <div>
            <div>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                className="home-textinput "
                options={top100Films}
                // filterOptions={filterOptions}
                // getOptionLabel={(option) => option.label}
                sx={{ width: 300 }}
                onChange={handleInputChange}
                renderInput={(params) => (
                    <TextField {...params} label="Select Services" />
                )}
                />
            </div>
            <Link to={`${stockService}`}>
                <div className="home-subscribe" >
                <span className="home-text116">Select Service</span>
                </div>
            </Link>
            </div>
            <span className="home-text117">
            Explore Our AI Portfolio: Tailored Services for Every Industry.
            </span>
        </div>
        </animated.div>
    </div>
    </div>
);
};

export default AiService;
