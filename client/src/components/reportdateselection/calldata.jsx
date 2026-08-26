import React, { useEffect , useState} from 'react';
import { TableCell, TableRow } from '@mui/material';
import { useNavigate} from "react-router-dom";
import { API } from "../../service/api";

const Calldata = ({ post }) => {
    const navigate = useNavigate();
    const [showDetailsIndex, setShowDetailsIndex] = useState(null);
    const [stocklivePrice, setStocklivePrice] = useState(null);
    // const [stockData, setStockData] = useState([]);
    const toggleDetails = (index) => {
        setShowDetailsIndex((prevIndex) => (prevIndex === "index" ? null : "index"));
    };

    const sendToSiteBill = async (postData) => {
        try {
            const response = await API.sendToSiteBill(postData); // Ensure API call completes
            console.log("Update Response:", response); // Debugging
    
            if (response?.isSuccess) {
                // navigate(`/sendtosite/${postData.truckId}`); // Navigate only if success
            } else {
                console.error("Failed to update shipment:", response);
                alert("Failed to update. Please try again.");
            }
        } catch (error) {
            console.error("Error updating shipment:", error);
            alert("Something went wrong. Please try again.");
        }
    };

        
const sendToDriverBill = async (postData) => {
    try {
        const response = await API.sendToDriverBill(postData); // Ensure API call completes
        console.log("Update Response:", response); // Debugging

        if (response?.isSuccess) {
            // navigate(`/sendtodriver/${postData.truckId}`); // Navigate only if success
        } else {
    console.error("Failed to update shipment:", response);
            alert("Failed to update. Please try again.");
        }
    } catch (error) {
        console.error("Error updating shipment:", error);
        alert("Something went wrong. Please try again.");
    }
};

    const formattedDate = (dateString) => {
    if (!dateString) return ""; // Return empty string if date is missing
    return new Date(dateString).toLocaleDateString("en-GB", {  
        day: "numeric",  
        month: "short",  
        year: "numeric"  
    });
};

    return (
    // <>
    //     <TableCell>{post.stockticker}</TableCell>
    //     <TableCell>{post.stockname}</TableCell>
    //     <TableCell>{post.userstockBuyprice}</TableCell>
    //     <TableCell>{post.target?.toFixed(2)}</TableCell>
    //     <TableCell>{post.stoploss?.toFixed(2)}</TableCell>
    //     <TableCell>{new Date(post.userbuydate).toLocaleDateString()}</TableCell>
    //     <TableCell>{post.portfolioname}</TableCell>
    //     <TableCell>{post.usersellprice ? post.usersellprice : "N/A"}</TableCell>
    //     <TableCell>{post.userselldate ? new Date(post.userselldate).toLocaleDateString() : "N/A"}</TableCell>
    //     <TableCell>{post.expectedExitDate ? new Date(post.expectedExitDate).toLocaleDateString() : "N/A"}</TableCell>
    // </>
    <>
            <>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.trucknumber}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.createdDate ? formattedDate(post.createdDate) : "N/A"}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.driverename}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.whereLoad}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.tonesLoad}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.ratePerTone}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.disel}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.tripSalary}  
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.tole}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.royaltyNum}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.shipmentStatus}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.siteKato}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.siteRate}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.product}
            </TableCell>
            

            </>
            <>
            {showDetailsIndex === "index" && (
                        
                            
                                <>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                {post.defaulttarget !== null && (
                                    <div>
                                    Total expense: {(
                                        (post.tonesLoad * post.ratePerTone) +
                                        post.disel +
                                        post.tripSalary +
                                        post.tole +
                                        post.siteCharge
                                    ).toFixed(2)}
                                    </div>
                                )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                {post.defaultstoploss !== null && (
                                    <div>
                                    Total bill: {(
                                        post.siteKato * post.siteRate
                                    ).toFixed(2)}
                                    </div>
                                )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                {post.defaultquantity !== null && (
                                    <div>
                                    Earning: {(
                                        (post.siteKato * post.siteRate) -
                                        (
                                        (post.tonesLoad * post.ratePerTone) +
                                        post.disel +
                                        post.tripSalary +
                                        post.tole +
                                        post.siteCharge
                                        )
                                    ).toFixed(2)}
                                    </div>
                                )}
                                </TableCell>
                                
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.sitetoSendBill === "no" && post.siteBillStatus === "notPaid" && post.paymentOutstending !== null && (
                                        <div>Site Payment: {post.paymentOutstending}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.drivertoSendBill === "no" && post.DriverBillStatus === "notPaid" && post.dryverOutstendingPayment !== null && (
                                        <div>Driver Payment: {post.dryverOutstendingPayment}</div>
                                    )}
                                </TableCell>
                                {/* <TableCell colSpan={9} style={{ backgroundColor: '#d0f0c0' }}>
                                    {post.sitetoSendBill === "no" && post.siteManager && post.siteKato && post.siteRate &&  (
                                    <button style={{ backgroundColor: '#dceeff' }} onClick={() => sendToSiteBill(post)}>
                                        Send to Site
                                    </button>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#dceeff' }}>
                                    {post.drivertoSendBill === "no" && post.dryverOutstendingPayment &&  (
                                    <button style={{ backgroundColor: '#d0f0c0' }} onClick={() => sendToDriverBill(post)}>
                                        Send to Driver
                                    </button>
                                    )}
                                </TableCell> */}
                                
                                </>
                            
                            
                        )}
            </>
    </>
    );
};


export default Calldata;
