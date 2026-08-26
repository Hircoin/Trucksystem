import React, { useState, useCallback, useEffect} from 'react';
import { useSpring, animated } from "react-spring";
import { Link} from "react-router-dom";
import { styled,Button } from '@mui/material';
import { useNavigate , useParams } from 'react-router-dom'; // Import useNavigate

import './Watch.css'; // Import CSS file

const EditButton = styled(Button)`
display: flex;
align-items: center;
border-radius: 15px;
background-color: none; /* This line is causing the issue */
color: inherit; /* Ensuring the text color is inherited */
border: 1px solid transparent; /* Adding a border to maintain button appearance */
&:hover {
border: 1px solid #000; /* Changing border color on hover */
}
`;


// Define the DataGridPremium component
function DataGridPremium({ rows, columns }) {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [portfoliosize, setportfoliosize] = useState(null);
    // Function to handle row click event
    const onRowClick = useCallback(
        (company, revenue) => {
            setSelectedCompany(selectedCompany === company ? null : company);
            setportfoliosize(selectedCompany === company ? null : revenue);
        },
        [selectedCompany]
    );

    // Extract unique company names
    const uniqueCompanies = [...new Set(rows.map(row => row.company))];
    
    const navigate = useNavigate(); // Get the navigate function from useNavigate hook
    // Function to render the DataGridPremium component
    return (
        
        <div className="data-grid-container">
            <table className="data-grid-table">
                <tbody>
                    {uniqueCompanies.map(company => (
                        <React.Fragment key={company}>
                            <tr className="data-grid-row" onClick={() => onRowClick(company, rows.find(row => row.company === company).revenue)}>
                                <td>{company}</td>
                            </tr>
                            {selectedCompany === company && rows.map(row => (
                                row.company === company && (
                                    <tr key={row.id} className="data-grid-details-row">
                                        <>
                                        <td>{`Details for ${row.company} `}</td>
                                        
                                        {/* Pass the company to the onClick handler */}
                                        <td className="home-subscribe"><Link to={`${portfoliosize}`}><EditButton >View</EditButton></Link> </td>
                                        
                                        </>
                                    </tr>
                                )
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Define your AiPortfolio component
const RenterRentbill = () => {
    const { id } = useParams();
    const [circles, setCircles] = useState([]);

useEffect(() => {

    const initialCircles = Array.from({ length: 7 }, (_, index) => ({
        id: index,
        size: Math.random() * 450 + 150, // Random size between 150 and 450
        color: getRandomColor(), // Random color
        angle: Math.random() * Math.PI * 2, // Random initial angle
        speed: Math.random() * 0.01 + 0.005, // Random speed between 0.005 and 0.015
        position: { x: 0, y: 0 } // Initialize position
    }));
    setCircles(initialCircles);

    // Set interval to update circles every 10 milliseconds
    const intervalId = setInterval(updateCircles, 10);
    return () => clearInterval(intervalId);
}, []);



const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


const updateCircles = () => {
    const currentTime = Date.now();
    setCircles(prevCircles => 
        prevCircles.map(circle => {
            // Initialize direction if not already set
            if (!circle.direction) {
                circle.direction = getRandomDirection();
                circle.lastDirectionChange = currentTime;
            }

            // Update position linearly based on direction
            let newX = circle.position.x + circle.speed * circle.direction.x;
            let newY = circle.position.y + circle.speed * circle.direction.y;

            // Check if the circle hits the screen edges, and bounce it back
            if (newX < 0 || newX > window.innerWidth) {
                circle.direction.x *= -1;
                newX = Math.min(window.innerWidth, Math.max(0, newX)); // Limit newX to screen width
            }
            if (newY < 0 || newY > window.innerHeight) {
                circle.direction.y *= -1;
                newY = Math.min(window.innerHeight, Math.max(0, newY)); // Limit newY to screen height
            }

            return {
                ...circle,
                position: {
                    x: newX,
                    y: newY
                }
            };
        })
    );
};

// Function to get a random direction
const getRandomDirection = () => {
    const directionX = Math.random() < 0.5 ? -1 : 1; // Randomly choose left or right direction
    const directionY = Math.random() < 0.5 ? -1 : 1; // Randomly choose up or down direction
    return { x: directionX, y: directionY };
};



    const slideIn = useSpring({
        from: { transform: "translateY(100px)" },
        to: { transform: "translateY(0)" },
        config: { duration: 500 },
    });
    // Sample data
    const rows = [
        { id: 1, company: 'View This Month Rentbill', revenue:`/Rentbill/Month?renter=${id}` },
        { id: 2, company: 'View Last Month Rentbill', revenue: `/Rentbill/LastMonth?renter=${id}` },
        { id: 3, company: 'View This Year Rentbill', revenue:`/Rentbill/Year?renter=${id}`},
        { id: 4, company: 'View Last Year Rentbill', revenue: `/Rentbill/LastYear?renter=${id}` },
        { id: 5, company: 'View Select Period For Rentbill', revenue: `/Rentbill/Period?renter=${id}` },
        { id: 6, company: 'Add Rentbill', revenue: `/add/Rentbill?renter=${id}` },
        // Add more rows as needed
    ];
    // Define columns
    const columns = [
        { field: 'company', headerName: 'Company' },
    ];

    // Render the DataGridPremium component
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
            // left: `${circle.position ? circle.position.x : 0}px`,
            // top: `${circle.position ? circle.position.y : 0}px`,
        }}
        />
    ))}

    <div className="stock-market-background">
        <div>
            <animated.div style={slideIn}>
        <DataGridPremium rows={rows} columns={columns} />
        </animated.div>
        </div>
        </div>
        </div>
    );
};

// Export the AiPortfolio component

export default RenterRentbill;

