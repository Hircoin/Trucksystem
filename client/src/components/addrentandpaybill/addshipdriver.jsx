
import React, { useState, useEffect , useContext} from "react";
import { useSpring, animated } from "react-spring";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./AddProperty.css"; // Import CSS file for custom styling
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Addshipdriver = () => {
const { truckID } = useParams(); // Extracts the truck ID from URL
const navigate = useNavigate();
const [propertyid, setPropertyid] = useState("");
const [circles, setCircles] = useState([]);
const [entity, setEntity] = useState('Driver');
const { account } = useContext(DataContext);
const [property, setProperty] = useState({});

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

// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             let response = await API.getAssatsbyowner(account.username);
//             if (response.isSuccess) {
//                 setProperty(response.data);
//             }
//         } catch (error) {
//             console.error("Error fetching property data:", error);
//             if (error.response?.status === 403) {
//                 navigate("/login");
//             }
//         }
//     };
//     fetchData();
// }, [account, navigate]);



// useEffect(() => {
//     const fetchData = async () => {
//         if (!entity) return; // Prevent API call if entity is null

//         try {
//             let response;

//             // Conditional API call based on entity
//             switch (entity) {
//                 case "Truck":
//                     response = await API.getTruckbyowner(account.username);
//                     break;
//                 case "Driver":
//                     response = await API.getDriverbyowner(account.username);
//                     break;
//                 case "Site":
//                     response = await API.getSitebyowner(account.username);
//                     break;
//                 default:
//                     return;
//             }

//             // Check response and update state
//             if (response?.isSuccess) {
//                 setProperty(response.data);
//             }
//         } catch (error) {
//             console.error("Error fetching property data:", error);

//             // Navigate to login if unauthorized
//             if (error.response?.status === 403) {
//                 navigate("/login");
//             }
//         }
//     };

//     fetchData();
// }, [entity]); // Dependencies: entity, username, and navigate
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
                setProperty(response.data);
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
    setPropertyid(value ? value.propertyid : ""); // Assuming value is an object with a 'label' property
};

// Define top100Films by mapping over the property object
// const top100Films = Object.values(property).map(item => ({
//     label: `${item.propertyName}`,
//     propertyid: `${item._id}`
// }));
const top100Films = Object.values(property).map(item => {
// Determine the label based on the entity type
let label = ""; // Initialize label to prevent undefined issues

if (entity === "Truck") {
    label = `${item.truckName}`;
} else if (entity === "Driver") {
    label = `${item.driverName}`;
} else if (entity === "Site") {
    label = `${item.siteName}`;
} else {
    label = `${item.propertyName}`; // Fallback in case entity doesn't match
}

return {
    label,
    propertyid: `${item._id}` // Convert _id to string explicitly
};
});


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
            {/* <div className="flex space-x-4">
                <button
                onClick={() => setEntity('Truck')}
                className={`px-4 py-2 rounded-xl border ${
                    entity === 'Truck' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                >
                Truck
                </button>
                
                
            </div> */}
            <span className="home-text115">Select {entity} for Your Need</span>
            
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
                    <TextField {...params} label={`Select ${entity} Here`} />
                )}
                />
            </div>
            <div>
                <Link to={`/add/newShipment/${entity}?Truck=${truckID}&Driver=${propertyid}`}>
                    <div className="home-subscribe"  >
                    <span className="home-text116">Select {entity}</span>
                    </div>
                </Link>
                <Link to={`/propertyview/${propertyid}?entity=${entity}`}>
                    <div className="home-subscribe"  >
                    <span className="home-text116">View {entity}</span>
                    </div>
                </Link>
            </div>
            {/* Add Property Button */}
            <div>
            <Link to={`/addassets/${entity}`}>
                            <div className="home-subscribe">
                                <span className="home-text116">Add {entity}</span>
                            </div>
            </Link>
            </div>
            </div>
            <span className="home-text117">
            Choose Your Desired {entity}
            </span>
        </div>
        </animated.div>
    </div>
    </div>
);
};

export default Addshipdriver;

// export default Addshipment ;

