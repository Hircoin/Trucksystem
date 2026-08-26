
import React, { useState, useEffect , useContext} from "react";
import { useSpring, animated } from "react-spring";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate,Link , useParams } from "react-router-dom";
import "./AddProperty.css"; // Import CSS file for custom styling
import { API } from '../../../service/api';
import { DataContext } from '../../../context/DataProvider';

const Flourinproperty = () => {
const navigate = useNavigate();
const [floreid, setFloreid] = useState("");
const [circles, setCircles] = useState([]);
const { account } = useContext(DataContext);
const [flore, setFlore] = useState({});
const { propertyid } = useParams(); // Get propertyId from URL

useEffect(() => {
    // Initialize circles
    const initialCircles = Array.from({ length: 25 }, (_, index) => ({
    id: index,
    size: Math.random() * 50 + 150, // Random size between 50 and 100
    color: getRandomColor(), // Random color
    position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
    },
    }));
    setCircles(initialCircles);

    // Set interval to update circles every 10 seconds
    const intervalId = setInterval(updateCircles, 100000);
    return () => clearInterval(intervalId);
}, []);

useEffect(() => {
    const fetchData = async () => {
        try {
            let response = await API.getFlorebypropID(propertyid);
            if (response.isSuccess) {
                setFlore(response.data);
            }
        } catch (error) {
            console.error("Error fetching property data:", error);
            if (error.response?.status === 403) {
                navigate("/login");
            }
        }
    };
    fetchData();
}, [propertyid, navigate]);

const updateCircles = () => {
    setCircles((prevCircles) => {
    return prevCircles.map((circle) => ({
        ...circle,
        position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        },
    }));
    });
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
    setFloreid(value ? value.propertyid : ""); // Assuming value is an object with a 'label' property
};



// Define top100Films by mapping over the property object
const top100Films = Object.values(flore).map(item => ({
label: `${item.flourName}`,
propertyid: `${item._id}`
}));



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
            left: `${circle.position.x}px`,
            top: `${circle.position.y}px`,
        }}
        />
    ))}

    <div className="stock-market-background">
        <animated.div style={slideIn}>
        
        <div className="home-left4">
            <span className="home-text115">"Select the Perfect Property Flore for Your Need"</span>
            
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
                    <TextField {...params} label="Select Flore Here" />
                )}
                />
            </div>
            <div>
                <Link to={`/AllRenterDetail?flore=${floreid}&market=${propertyid}`}>
                    <div className="home-subscribe"  >
                    <span className="home-text116">Select Flore</span>
                    </div>
                </Link>
                <Link to={`/propertyview/${floreid}`}>
                    <div className="home-subscribe"  >
                    <span className="home-text116">View Flore</span>
                    </div>
                </Link>
            </div>
            {/* Add Property Button */}
            <Link to={`/addflour/${propertyid}`}>
                            <div className="home-subscribe">
                                <span className="home-text116">Add Flore</span>
                            </div>
            </Link>
            </div>
            <span className="home-text117">
            "Choose Your Desired Flore In Property"
            </span>
        </div>
        </animated.div>
    </div>
    </div>
);
};

export default Flourinproperty;
