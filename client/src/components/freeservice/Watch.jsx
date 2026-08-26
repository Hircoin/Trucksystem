
    // import * as React from 'react';
    // import { DataGridPremium, useGridApiRef, useKeepGroupedColumnsHidden } from '@mui/x-data-grid-premium';
    // // Importing useMovieData is not necessary if you're not using it anymore
    // // import { useMovieData } from '@mui/x-data-grid-generator';
    
    // const AiPortfolio = () => {
    //     // Assuming your data object looks something like this
    //     const rows = [
    //         { id: 1, company: 'Company A', revenue: 1000 },
    //         { id: 2, company: 'Company B', revenue: 1500 },
    //         { id: 3, company: 'Company A', revenue: 100 },
    //         // Add more rows as needed
    //     ];
    
    //     // Define your columns
    //     const columns = [
    //         { field: 'id', headerName: 'ID', width: 100 },
    //         { field: 'company', headerName: 'Company', width: 200 },
    //         { field: 'revenue', headerName: 'Revenue', width: 150 },
    //         // Add more columns as needed
    //     ];
    
    //     const apiRef = useGridApiRef();
    
    //     const initialState = useKeepGroupedColumnsHidden({
    //         apiRef,
    //         initialState: {
    //             rowGrouping: {
    //                 model: ['company'],
    //             },
    //         },
    //     });
    
    //     const onRowClick = React.useCallback(
    //         (params) => {
    //             const rowNode = apiRef.current.getRowNode(params.id);
    //             if (rowNode && rowNode.type === 'group') {
    //                 apiRef.current.setRowChildrenExpansion(params.id, !rowNode.childrenExpanded);
    //             }
    //         },
    //         [apiRef],
    //     );
    
    //     return (
    //         <div style={{ height: 400, width: '100%' }}>
    //             <DataGridPremium
    //                 rows={rows} // Pass your data to the rows prop
    //                 columns={columns} // Pass your columns definition to the columns prop
    //                 apiRef={apiRef}
    //                 initialState={initialState}
    //                 onRowClick={onRowClick}
    //             />
    //         </div>
    //     );
    // }
    
    // export default AiPortfolio;
    // Import React libraries
    // Import React libraries
    // Import React libraries
    // Import React libraries
    // Import React libraries
    // Import React libraries
    // Import React libraries




    import React, { useState, useCallback, useEffect} from 'react';
    import { useSpring, animated } from "react-spring";
    import { Link} from "react-router-dom";
    import { styled,Button } from '@mui/material';
    import { useNavigate } from 'react-router-dom'; // Import useNavigate

    import './Watch.css'; // Import CSS file

//     const EditButton = styled(Button)`
//     display: flex;
//     align-items: center;
//     border-radius: 15px;
//     background-color: none; 
// `;

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
                                            <td>{`Details for ${row.company}: Revenue - ${row.revenue}, ID - ${row.id}`}</td>
                                            
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
    const Watch = () => {
        // const [circles, setCircles] = useState([]);
    
        // useEffect(() => {
        //     // Initialize circles
        //     const initialCircles = Array.from({ length: 7 }, (_, index) => ({
        //     id: index,
        //     size: Math.random() * 300 + 150, // Random size between 50 and 100
        //     color: getRandomColor(), // Random color
        //     position: {
        //         x: Math.random() * window.innerWidth,
        //         y: Math.random() * window.innerHeight,
        //     },
        //     }));
        //     setCircles(initialCircles);
        
        //     // Set interval to update circles every 10 seconds
        //     const intervalId = setInterval(updateCircles, 100000);
        //     return () => clearInterval(intervalId);
        // }, []);
    
        // const updateCircles = () => {
        //     setCircles((prevCircles) => {
        //     return prevCircles.map((circle) => ({
        //         ...circle,
        //         position: {
        //         x: Math.random() * window.innerWidth,
        //         y: Math.random() * window.innerHeight,
        //         },
        //     }));
        //     });
        // };
        
        // const getRandomColor = () => {
        //     const letters = "0123456789ABCDEF";
        //     let color = "#";
        //     for (let i = 0; i < 6; i++) {
        //     color += letters[Math.floor(Math.random() * 16)];
        //     }
        //     return color;
        // };
    
        const [circles, setCircles] = useState([]);
    
    useEffect(() => {
        // Initialize circles
        // const initialCircles = Array.from({ length: 7 }, (_, index) => ({
        //     id: index,
        //     size: Math.random() * 300 + 150, // Random size between 150 and 450
        //     color: getRandomColor(), // Random color
        //     angle: Math.random() * Math.PI * 2, // Random initial angle
        //     speed: Math.random() * 0.01 + 0.005, // Random speed between 0.005 and 0.015
        // }));
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
    
    // const updateCircles = () => {
    //     setCircles(prevCircles => 
    //         prevCircles.map(circle => {
    //             const newAngle = circle.angle + circle.speed;
    //             const centerX = window.innerWidth / 2;
    //             const centerY = window.innerHeight / 2;
    //             const radius = Math.min(centerX, centerY) * 0.8;
    
    //             const newX = centerX + radius * Math.cos(newAngle);
    //             const newY = centerY + radius * Math.sin(newAngle);
    
    //             const newPosition = {
    //                 x: newX,
    //                 y: newY
    //             };
    
    //             return {
    //                 ...circle,
    //                 angle: newAngle,
    //                 position: newPosition
    //             };
    //         })
    //     );
    // };
    
    // const updateCircles = () => {
    //     const currentTime = Date.now();
    //     setCircles(prevCircles => 
    //         prevCircles.map(circle => {
    //             // Check if it's time to change direction
    //             if (currentTime - circle.lastDirectionChange > 1000) {
    //                 // Determine the direction (clockwise or counterclockwise) for circular motion
    //                 circle.directionFactor = Math.random() < 0.5 ? 1 : -1;
    //                 circle.lastDirectionChange = currentTime;
    //             }
    
    //             // Update position based on motion type
    //             if (circle.motionType === 'circular') {
    //                 // Update angle based on direction
    //                 const newAngle = circle.angle + circle.directionFactor * circle.speed;
                    
    //                 // Calculate new position using polar coordinates
    //                 const centerX = window.innerWidth / 2;
    //                 const centerY = window.innerHeight / 2;
    //                 const radius = Math.min(centerX, centerY) * 0.8;
    
    //                 const newX = centerX + radius * Math.cos(newAngle);
    //                 const newY = centerY + radius * Math.sin(newAngle);
    
    //                 const newPosition = {
    //                     x: newX,
    //                     y: newY
    //                 };
    
    //                 return {
    //                     ...circle,
    //                     angle: newAngle,
    //                     position: newPosition
    //                 };
    //             } else if (circle.motionType === 'linear') {
    //                 // Update position linearly
    //                 const newX = circle.position.x + circle.speed * circle.direction.x;
    //                 const newY = circle.position.y + circle.speed * circle.direction.y;
    
    //                 const newPosition = {
    //                     x: newX,
    //                     y: newY
    //                 };
    
    //                 return {
    //                     ...circle,
    //                     position: newPosition
    //                 };
    //             } else {
    //                 return circle; // No motion type specified, return unchanged
    //             }
    //         })
    //     );
    // };
    
    
    
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
            { id: 1, company: 'Market', revenue:'Market' },
            { id: 2, company: 'Commodities', revenue: 'Commodities' },
            { id: 3, company: 'Mutual-Funds', revenue:'Mutual-Funds'},
            { id: 4, company: 'Personal-Finance', revenue: 'Personal-Finance' },
            { id: 5, company: 'Forum', revenue: 'Forum' },
            { id: 6, company: 'Video', revenue: 'Video' },
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
    
    export default Watch;
    
    