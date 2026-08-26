

    // import React, { useEffect,useState, useContext } from "react";
    // import { Link, useSearchParams, useNavigate } from "react-router-dom";
    // import {
    // Button,
    // Table,
    // TableHead,
    // TableRow,
    // TableCell,
    // TableBody,
    // styled,
    // } from "@mui/material"; // Import your styled components
    // import { API } from '../../service/api';
    // import { DataContext } from "../../context/DataProvider";
    

    // const StyledTable = styled(Table)`
    // border: 1px solid rgba(224, 224, 224, 1);
    // `;

    // const StyledButton = styled(Button)`
    // margin: 20px;
    // width: 85%;
    // background: #6495ed;
    // color: #fff;
    // text-decoration: none;
    // `;

    // const StyledLink = styled(Link)`
    // text-decoration: none;
    // color: inherit;
    // `;
    // const Categories = () => {
    // const [selectedCountry, setSelectedCountry] = useState(""); // State to track selected country
    // const [names, setNames] = useState([]);
    // const [searchParams] = useSearchParams();
    // const category = searchParams.get("category");
    // const market = searchParams.get("market");
    // const navigate = useNavigate();
    // const { account } = useContext(DataContext);
    // // Dummy data for categories
    // const categoriest = [
    //     { id: 1, type: "Truck", country: "Complete" },
    //     { id: 2, type: "Truck", country: "Active" },
    //     { id: 3, type: "Driver", country: "Complete" },
    //     { id: 4, type: "Driver", country: "Active" },
    //     { id: 5, type: "Site", country: "Complete" },
    //     { id: 6, type: "Site", country: "Active" },
    // ];


    // useEffect(() => {
    //     const fetchData = async () => { 
    //         try {
    //             // Log category and market for debugging
    //             console.log('Category:', category, 'Market:', market);
                
    //             let response;
    //             const truckOwnerParam = `${encodeURIComponent(account.username)}`;

    //             if (category === "Truck") {
    //                 response = await API.getTruckbyowner(`${truckOwnerParam}`);
    //             } else if (category === "Driver") {
    //                 response = await API.getDriverbyowner(`${truckOwnerParam}`);
    //             } else if (category === "Site") {
    //                 response = await API.getSitebyowner(`${truckOwnerParam}`);
    //             } else {
    //                 console.log('No matching market found');
    //             }

    
    //             // Log the response for debugging
    //             console.log('API Response:', response);
                
    //             if (response && response.isSuccess) {
    //                 const reversedPosts = response.data.reverse();
    //                 setNames(reversedPosts);
    //             } else {
    //                 console.error('API Response error:', response);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching posts:", error);
    
    //             if (error.response && error.response.status === 403) {
    //                 navigate("/login");
    //             }
    //         }
    //     };
    
    //     fetchData();
    // }, [ navigate, category, account.username]); 

    // return (
    //     <>
        

    //     <StyledTable>
    //         <TableHead>
    //         <TableRow style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
    //             <TableCell>
    //             <StyledLink to={""} onClick={() => setSelectedCountry("")}>All Position</StyledLink>
    //             </TableCell>
    //             <div style={{ marginRight: "10px" }}>

                
    //             {selectedCountry !== "Active" && (
    //             <StyledButton
    //                 variant="contained"
    //                 onClick={() => {
    //                     setSelectedCountry("Active");
    //                     navigate(`?market=Active`);
    //                 }}
    //             >
    //                 Active
    //             </StyledButton>
    //             )}

    //             {/* {selectedCountry !== "Notification" && (
    //             <StyledButton
    //                 variant="contained"
    //                 onClick={() => {
    //                     setSelectedCountry("Notification");
    //                     navigate(`?market=Notification`);
    //                 }}

    //             >
    //                 Notifications
    //             </StyledButton>
    //             )} */}
                
    //             {selectedCountry !== "Complete" && (
    //             <StyledButton
    //                 variant="contained"
    //                 onClick={() => {
    //                     setSelectedCountry("Complete");
    //                     navigate(`?market=Complete`);
    //                 }}

    //             >
    //                 Complete
    //             </StyledButton>
    //             )}
    //             </div>
    //         </TableRow>
    //         </TableHead>
    //         <TableBody>
    //         {categoriest
    //             .filter((category) => category.country === selectedCountry) // Filter categories based on selected country
    //             .map((category) => (
    //             <TableRow key={category.id}>
    //                 <TableCell>
    //                 <StyledLink
    //                     to={`?category=${category.type}&market=${category.country}`}
    //                 >
    //                     {category.type}
    //                 </StyledLink>
    //                 </TableCell>
    //             </TableRow>
    //             ))}
    //         </TableBody>
    //     </StyledTable>
    //     </>
    // );
    // };

    // export default Categories;


    import React, { useEffect, useState, useContext } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from "@mui/material";
import { API } from '../../service/api';
import { DataContext } from "../../context/DataProvider";


const StyledTable = styled(Table)`
border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledheaderButton = styled(Button)`
margin: 20px;
width: 85%;
background:rgb(43, 148, 87);
color: #fff;
text-decoration: none;
`;

const StyledButton = styled(Button)`
margin: 20px;
width: 85%;
background:rgb(248, 235, 48);
color: #f44;
text-decoration: none;
`;

const StyledsubButton = styled(Button)`
margin: 20px;
width: 85%;
background:rgb(116, 31, 108);
color: #fff;
text-decoration: none;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`;
const Categories = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [names, setNames] = useState([]);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const market = searchParams.get("market");
    const idname = searchParams.get("idname");
    
    const navigate = useNavigate();
    const { account } = useContext(DataContext);

    const categoriesList = [
        { id: 1, type: "Truck", country: "Complete" },
        { id: 2, type: "Truck", country: "Active" },
        { id: 3, type: "Driver", country: "Complete" },
        { id: 4, type: "Driver", country: "Active" },
        { id: 5, type: "Site", country: "Complete" },
        { id: 6, type: "Site", country: "Active" },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                const truckOwnerParam = encodeURIComponent(account.username);
                if (category === "Truck") {
                    response = await API.getTruckbyowner(truckOwnerParam);
                } else if (category === "Driver") {
                    response = await API.getDriverbyowner(truckOwnerParam);
                } else if (category === "Site") {
                    response = await API.getSitebyowner(truckOwnerParam);
                }
                if (response && response.isSuccess) {
                    setNames(response.data.reverse());
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                if (error.response?.status === 403) {
                    navigate("/login");
                }
            }
        };
        fetchData();
    }, [navigate, category, account.username]);

    return (
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <StyledLink to={""} onClick={() => setSelectedCountry("")}>All Sitebill {market}  {idname}</StyledLink>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        {selectedCountry !== "Active" && (
                            <StyledheaderButton variant="contained" onClick={() => { setSelectedCountry("Active"); navigate("?market=Active"); }}>Not-Paid</StyledheaderButton>
                        )}
                        {selectedCountry !== "Complete" && (
                            <StyledheaderButton variant="contained" onClick={() => { setSelectedCountry("Complete"); navigate("?market=Complete"); }}>Clear-Payment</StyledheaderButton>
                        )}
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {categoriesList.filter(cat => cat.country === selectedCountry).map(cat => (
                    <TableRow key={cat.id}>
                        <TableCell>
                            <StyledButton variant="contained" onClick={() => {
                                navigate(`?category=${cat.type}&market=${cat.country}`);
                                setExpandedCategory(cat.type === expandedCategory ? null : cat.type);
                            }}>
                                {cat.type}
                            </StyledButton>
                            {expandedCategory === cat.type && names.length > 0 && (
                                <div style={{ marginLeft: "20px" }}>
                                    {names.map(name => (
                                        <StyledsubButton key={name._id} variant="contained" onClick={() => 
                                            navigate(`?category=${cat.type}&market=${cat.country}&${cat.type}id=${name._id}&idname=${cat.type === "Truck" ? name.truckName : cat.type === "Driver" ? name.driverName : name.siteName}`)}>
                                            {cat.type === "Truck" ? name.truckName : cat.type === "Driver" ? name.driverName : name.siteName}
                                        </StyledsubButton>
                                    ))}
                                </div>
                            )}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </StyledTable>
    );
};
export default Categories;
