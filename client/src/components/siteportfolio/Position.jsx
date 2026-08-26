import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Checkbox } from '@mui/material';
import { API } from '../../service/api';

const Position = ({ posts }) => {
    const [selectedIds, setSelectedIds] = useState([]);
    const [showDetailsIndex, setShowDetailsIndex] = useState(null);
    const [deposit, setDeposit] = useState('');
    const [selectedShipmentIds, setSelectedShipmentIds] = useState([]);

//     const handleCheckboxChange = (post) => {
//     const alreadySelected = selectedIds.includes(post._id);

//     if (alreadySelected) {
//         // Remove both _id and shipmentId
//         setSelectedIds(prev => prev.filter(id => id !== post._id));
//         setSelectedShipmentIds(prev => prev.filter(id => id !== post.shipmentId));
//     } else {
//         // Add both _id and shipmentId
//         setSelectedIds(prev => [...prev, post._id]);
//         setSelectedShipmentIds(prev => [...prev, post.shipmentId]);
//     }
// };

const handleCheckboxChange = (post) => {
    const isSelected = selectedIds.includes(post._id);

    if (isSelected) {
        setSelectedIds(prev => prev.filter(id => id !== post._id));
        setSelectedShipmentIds(prev => prev.filter(id => id !== post.shipmentId));
    } else {
        setSelectedIds(prev => [...prev, post._id]);
        setSelectedShipmentIds(prev => [...prev, post.shipmentId]);
    }
};

const handleSelectAllChange = (event) => {
    if (event.target.checked) {
        const allIds = posts.map(post => post._id);
        const allShipmentIds = posts.map(post => post.shipmentId);
        setSelectedIds(allIds);
        setSelectedShipmentIds(allShipmentIds);
    } else {
        setSelectedIds([]);
        setSelectedShipmentIds([]);
    }
};

    

//     const payPaymentAmount = async () => {
//     try {
//         // Prepare payload
//         const payload = {
//             selectedIds,
//             selectedShipmentIds, // Include shipment IDs
//         };

//         if (selectedIds.length === 1 && deposit) {
//             payload.deposit = deposit;
//         }

//         const response = await API.updateSiteBill(payload); // Send payload

//         console.log("Update Response:", response); // Debug

//         if (response?.isSuccess) {
//             // navigate(`/shipment/details/${id}`);
//         } else {
//             console.error("Failed to update shipment:", response);
//             alert("Failed to update. Please try again.");
//         }
//     } catch (error) {
//         console.error("Error updating shipment:", error);
//         alert("Something went wrong. Please try again.");
//     }
// };


    // const totalPayment = posts
    //     .filter(post => selectedIds.includes(post._id))
    //     .reduce((acc, curr) => acc + (curr.dryverOutstendingPayment || 0), 0);

    const totalPayment = posts
    .filter(post => selectedIds.includes(post._id))
    .reduce((acc, curr) => acc + ((curr.paymentOutstending || 0) - (curr.siteDeposit || 0)), 0);


    const toggleDetails = (index) => {
        setShowDetailsIndex((prev) => (prev === index ? null : index));
    };

    const formattedDate = (dateString) => {
    if (!dateString) return ""; // Return empty string if date is missing
    return new Date(dateString).toLocaleDateString("en-GB", {  
        day: "numeric",  
        month: "short",  
        year: "numeric"  
    });
};

    // return (
    //     <>
    //         <TableContainer component={Paper}>
    //             <Table>
    //                 <TableHead>
    //                     <TableRow>
    //                         <TableCell padding="checkbox"></TableCell>
    //                         <TableCell>Truck Number</TableCell>
    //                         <TableCell>Created Date</TableCell>
    //                         <TableCell>Site Name</TableCell>
    //                         <TableCell>Site Owner</TableCell>
    //                         <TableCell>Site Manager</TableCell>
    //                         <TableCell>Manager Number</TableCell>
    //                         <TableCell>Product</TableCell>
    //                         <TableCell>How Much Load</TableCell>
    //                         <TableCell>Rate Per Tone</TableCell>
    //                         <TableCell>Site Deposit</TableCell>
    //                         <TableCell>Site Bill</TableCell>
    //                         <TableCell>Payment Date</TableCell>
    //                     </TableRow>
    //                 </TableHead>
    //                 <TableBody>
    //                     {Array.isArray(posts) && posts.length > 0 ? (
    //                         posts.map((post, index) => (
    //                             <React.Fragment key={post._id}>
    //                                 <TableRow hover>
    //                                     <TableCell padding="checkbox">
    //                                         <Checkbox
    //                                             checked={selectedIds.includes(post._id)}
    //                                             onChange={() => handleCheckboxChange(post)}
    //                                         />
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.trucknumber}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.shipmentEndingDate ? formattedDate(post.shipmentEndingDate) : "N/A"}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.siteName}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.siteOwner}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.siteManager}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.siteManagerNum}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.product}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.siteKato}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.siteRate}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.siteBillStatus === "notPaid" && post.siteDeposit}
    //                                     </TableCell>
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.siteBillStatus === "notPaid" && post.paymentOutstending}
    //                                     </TableCell>
    //                                     {/* <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.paymentDate ? new Date(post.paymentDate).toLocaleDateString() : "N/A"}
    //                                     </TableCell> */}
    //                                     <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
    //                                         {post.paymentDate ? formattedDate(post.paymentDate) : "N/A"}
    //                                     </TableCell>
    //                                 </TableRow>
    //                                 {showDetailsIndex === index && (
    //                                     <TableRow>
    //                                         <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
    //                                             {post.siteBillStatus === "notPaid" && (
    //                                                 <div>
    //                                                     Total site bill: {post.paymentOutstending-post.siteDeposit}
    //                                                 </div>
    //                                             )}
    //                                         </TableCell>
    //                                     </TableRow>
    //                                 )}
    //                             </React.Fragment>
    //                         ))
    //                     ) : (
    //                         <TableRow>
    //                             <TableCell colSpan={9} align="center">
    //                                 No data is available for selected category
    //                             </TableCell>
    //                         </TableRow>
    //                     )}
    //                 </TableBody>
    //             </Table>
    //         </TableContainer>

    //         {posts.some(post => selectedIds.includes(post._id) && post.siteBillStatus === "notPaid") && (
    //             <Box mt={2} ml={2}>
    //                 {/* {selectedIds.length === 1 && (
    //                     <div style={{ marginTop: '10px' }}>
    //                         <label htmlFor="depositAmount"><strong>Enter Deposit Amount:</strong></label><br />
    //                         <input
    //                             type="number"
    //                             id="depositAmount"
    //                             value={deposit}
    //                             onChange={(e) => setDeposit(e.target.value)}
    //                             placeholder="₹ Amount"
    //                             style={{
    //                                 padding: '8px',
    //                                 marginTop: '4px',
    //                                 borderRadius: '4px',
    //                                 border: '1px solid #ccc',
    //                                 width: '200px'
    //                             }}
    //                         />
    //                     </div>
    //                 )} */}

    //                 <div><strong>Total Site Payment:</strong> ₹{totalPayment.toFixed(2)}</div>

    //                 {/* <button
    //                     onClick={payPaymentAmount}
    //                     disabled={selectedIds.length === 0}
    //                     style={{
    //                         marginTop: '10px',
    //                         padding: '8px 16px',
    //                         backgroundColor: '#1976d2',
    //                         color: 'white',
    //                         border: 'none',
    //                         borderRadius: '4px',
    //                         cursor: selectedIds.length > 0 ? 'pointer' : 'not-allowed',
    //                         opacity: selectedIds.length > 0 ? 1 : 0.6
    //                     }}
    //                 >
    //                     get Payment Amount
    //                 </button> */}
    //             </Box>
    //         )}

    //     </>
    // );

    return (
    <>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                checked={posts.length > 0 && selectedIds.length === posts.length}
                                indeterminate={selectedIds.length > 0 && selectedIds.length < posts.length}
                                onChange={handleSelectAllChange}
                            />
                        </TableCell>
                        <TableCell>Truck Number</TableCell>
                        <TableCell>Created Date</TableCell>
                        <TableCell>Site Name</TableCell>
                        <TableCell>Site Owner</TableCell>
                        <TableCell>Site Manager</TableCell>
                        <TableCell>Manager Number</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>How Much Load</TableCell>
                        <TableCell>Rate Per Tone</TableCell>
                        <TableCell>Site Deposit</TableCell>
                        <TableCell>Site Bill</TableCell>
                        <TableCell>Payment Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(posts) && posts.length > 0 ? (
                        posts.map((post, index) => (
                            <React.Fragment key={post._id}>
                                <TableRow hover>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedIds.includes(post._id)}
                                            onChange={() => handleCheckboxChange(post)}
                                        />
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.trucknumber}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.shipmentEndingDate ? formattedDate(post.shipmentEndingDate) : "N/A"}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.siteName}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.siteOwner}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.siteManager}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.siteManagerNum}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.product}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.siteKato}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.siteRate}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.siteBillStatus === "notPaid" && post.siteDeposit}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.siteBillStatus === "notPaid" && post.paymentOutstending}
                                    </TableCell>
                                    <TableCell onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                        {post.paymentDate ? formattedDate(post.paymentDate) : "N/A"}
                                    </TableCell>
                                </TableRow>

                                {showDetailsIndex === index && (
                                    <TableRow>
                                        <TableCell colSpan={13} style={{ backgroundColor: '#f9f9f9' }}>
                                            {post.siteBillStatus === "notPaid" && (
                                                <div>
                                                    Total site bill: ₹{(post.paymentOutstending - post.siteDeposit).toFixed(2)}
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={13} align="center">
                                No data is available for selected category
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>

        {posts.some(post => selectedIds.includes(post._id) && post.siteBillStatus === "notPaid") && (
            <Box mt={2} ml={2}>
                <div><strong>Total Site Payment:</strong> ₹{totalPayment.toFixed(2)}</div>
            </Box>
        )}
    </>
);

};

export default Position;
