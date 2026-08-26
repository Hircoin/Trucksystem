
    import React, { useState, useEffect, useContext } from "react";
    import { Link, useSearchParams, useNavigate } from "react-router-dom";
    import {
    Button,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    styled,
    } from "@mui/material"; // Import your styled components
    import { API } from '../../service/api';
    import { DataContext } from '../../context/DataProvider';

    const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
    `;

    const StyledButton = styled(Button)`
    margin: 2px;
    width: 80%;
    background: #6495ed;
    text-decoration: none;
    color: inherit;
    `;
    

    const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    `;
    const Categories = () => {
    const [selectedCountry, setSelectedCountry] = useState(""); // State to track selected country
    const [searchParams] = useSearchParams();
    const [propertyid, setPropertyid] = useState("");
    const [property, setProperty] = useState([]);
    const [flores, setFlore] = useState([]);
    const flore = searchParams.get("flore");
    const market = searchParams.get("market");
    const navigate = useNavigate();
    const { account } = useContext(DataContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await API.getAssatsbyowner(account.username);
                if (response.isSuccess) {
                    setProperty(response.data);
                }
            } catch (error) {
                console.error("Error fetching property data:", error);
                if (error.response?.status === 403) {
                    navigate("/login");
                }
            }
        };
        fetchData();
    }, [account, navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await API.getFlorebypropID(market);
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
    }, [market]);
    // // Dummy data for categories
    // const categoriest = [
    //     { id: 1, type: "Large-cap", country: "India" },
    //     { id: 2, type: "Mid-cap", country: "India" },
    //     { id: 3, type: "Small-cap", country: "India" },
    //     { id: 4, type: "Start-up", country: "India" },
    //     { id: 5, type: "Tranding", country: "India" },
    //     { id: 6, type: "Large-cap", country: "USA" },
    //     { id: 7, type: "Mid-cap", country: "USA" },
    //     { id: 8, type: "Small-cap", country: "USA" },
    //     { id: 9, type: "Start-up", country: "USA" },
    //     { id: 10, type: "Tranding", country: "USA" },
    // ];

    return (
        <>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell  style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <StyledLink
                            to={`/create?flore=${flore}&market=${market}`}
                            style={{ textDecoration: "none" }}
                        >
                            <StyledButton variant="contained">Create Blog</StyledButton>
                        </StyledLink>
                    </TableCell>
                </TableRow>
            </TableHead>
        </Table>
        <Table >
            <TableHead>
            <TableRow style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <TableCell>
                <StyledLink to={"/AllRenterDetail"} onClick={() => setSelectedCountry("")}>All Categories</StyledLink>
                </TableCell>
                {/* Property Selection Buttons */}
                <TableCell>
                        {property.map((value) => (
                            <StyledButton
                                key={value._id}
                                variant="contained"
                                onClick={() => {
                                    setSelectedCountry(value._id);
                                    navigate(`?market=${value._id}`);
                                }}
                            >
                                {value.propertyName}
                            </StyledButton>
                        ))}
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {/* {categoriest
                .filter((category) => category.country === selectedCountry) // Filter categories based on selected country
                .map((category) => (
                <TableRow key={category.id}>
                    <TableCell>
                    <StyledLink
                        to={`?flore=${category.type}&market=${category.country}`}
                    >
                        {category.type}
                    </StyledLink>
                    </TableCell>
                </TableRow>
                ))} */}


                {flores.map((floor) => (
                        <TableRow key={floor._id}>
                            <TableCell>
                                <StyledLink to={`?flore=${floor._id}&market=${floor.propertyId}`}>
                                    {floor.flourName}
                                </StyledLink>
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
        </>
    );
    };

    export default Categories;
