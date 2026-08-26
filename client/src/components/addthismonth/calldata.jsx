
import { styled, Button, Box, Typography } from '@mui/material';
import { Link,  useSearchParams ,useNavigate} from 'react-router-dom';
import { API } from "../../service/api";


const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const StyledButton = styled(Button)`
    display: flex;
    margin: 6px;
    align-items: center; 
    justify-content: center;
    width: 85%;
    background:rgb(195, 237, 98);
    text-decoration: none;
    color: inherit;

    &:hover {
        background: #4169e1; /* Slightly darker shade on hover */
    }
`;

const RentbillButton = styled(Button)`
    display: flex;
    margin: 6px;
    align-items: center; 
    justify-content: center;
    width: 85%;
    background:rgb(5, 170, 33);
    text-decoration: none;
    color: inherit;

    &:hover {
        background: #4169e1; /* Slightly darker shade on hover */
    }
`;

const PaybillButton = styled(Button)`
    display: flex;
    margin: 6px;
    align-items: center; 
    justify-content: center;
    width: 85%;
    background:rgb(170, 5, 134);
    text-decoration: none;
    color: inherit;

    &:hover {
        background: #4169e1; /* Slightly darker shade on hover */
    }
`;

const Divbox = styled(Box)`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    `;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;

const Calldata = ({ post }) => {
    const navigate = useNavigate();
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    


    const sendToSiteBill = async (postData) => {
        try {
            const response = await API.sendToSiteBill(postData); // Ensure API call completes
            console.log("Update Response:", response); // Debugging
    
            if (response?.isSuccess) {
                navigate(`/Mysite`); // Navigate only if success
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
                navigate(`/Mydriver`); // Navigate only if success
            } else {
                console.error("Failed to update shipment:", response);
                alert("Failed to update. Please try again.");
            }
        } catch (error) {
            console.error("Error updating shipment:", error);
            alert("Something went wrong. Please try again.");
        }
    };


    // Helper function to format date
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
        return `${day}-${month}-${year}`;
    }
    // const addEllipsis = (str, mul) => {
    //     const screenWidth = window.innerWidth;
    //     let limit;
    
    //     // Determine limit based on screen size and percentile
    //     if (screenWidth < 600) {
    //         // Adjust limit for small screens
    //         limit = 7*mul; // Example: Increase limit based on percentile
    //     } else if (screenWidth < 800) {
    //         // Adjust limit for medium screens
    //         limit = 10 *mul; // Example: Increase limit based on percentile
    //     } else {
    //         // Adjust limit for large screens
    //         limit = 15*mul; // Example: Increase limit based on percentile
    //     }
    
    //     // Truncate string if necessary
    //     return str.length > limit ? str.substring(0, limit) + '...' : str;
    // }
    return (
        // <Container>
        //     <Image src={url} alt="post" />
        //     <Text>{post.renterName}</Text>
        //     <Heading>{addEllipsis(post.propertyName, 7)}</Heading>
        //     <Divbox>
        //     <Text>{post.flourName}</Text>
        //     <Text>{post.rentPayTotalMonth}</Text>
        //     </Divbox>
        //     <Details>{addEllipsis(post.deposit,90)}</Details>
        // </Container>
        <div>
                
    
                <table border="1">
                    <thead>
                        <tr>
                            <th>Truck Number</th>
                            <th>Created Date</th>
                            <th>Site Name</th>
                            <th>Driver Name</th>
                            <th>Where To Load</th>
                            <th>How Much Load</th>
                            <th>Rate Per Tone</th>
                            <th>Disel</th>
                            <th>Driver TripSalary</th>
                            <th>Tole</th>
                            <th>Shipment Status</th>
                            <th>Shipment Ending Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                                                    <td>{post.trucknumber || "-"}</td>
                                                    
                                                    <td>{post.createdDate && post.shipmentStatus !== "start" ? formatDate(post.createdDate) : "Running"}</td>
                                                    <td>{post.siteName || "-"}</td>
                                                    <td>{post.driverename || "-"}</td>
                                                    <td>{post.whereLoad || "-"}</td>
                                                    <td>{post.tonesLoad || "-"}</td>
                                                    <td>{post.ratePerTone || "-"}</td>
                                                    <td>{post.disel || "-"}</td>
                                                    <td>{post.tripSalary || "-"}</td>
                                                    <td>{post.tole || "-"}</td>
                                                    <td>{post.shipmentStatus || "-"}</td>
                                                    <td>{post.shipmentEndingDate ? formatDate(post.shipmentEndingDate) : "-"}</td>
                                                    <td colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                                        {post.siteBillStatus === "notPaid" && post.paymentOutstending !== null && (
                                                            <div>Site Payment: {post.paymentOutstending}</div>
                                                        )}
                                                    </td>
                                                    <td colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                                        {post.DriverBillStatus === "notPaid" && post.dryverOutstendingPayment !== null && (
                                                            <div>Driver Payment: {post.dryverOutstendingPayment}</div>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div>Total expense: {(
                                                        (post.tonesLoad * post.ratePerTone) +
                                                        post.disel +
                                                        post.tripSalary +
                                                        post.tole +
                                                        post.siteCharge
                                                        ).toFixed(2)}</div>
                                                    </td>

                                                    <td>
                                                        <div>Total bill: {(
                                                        post.siteKato * post.siteRate
                                                        ).toFixed(2)}</div>
                                                    </td>

                                                    <td>
                                                        <div>Earning: {(
                                                        (post.siteKato * post.siteRate) -
                                                        (
                                                            (post.tonesLoad * post.ratePerTone) +
                                                            post.disel +
                                                            post.tripSalary +
                                                            post.tole +
                                                            post.siteCharge
                                                        )
                                                        ).toFixed(2)}</div>
                                                    </td>
                                                    {/* <td colSpan={9} style={{ backgroundColor: '#d0f0c0' }}>
                                                        {post.sitetoSendBill === "no" && post.siteManager && post.siteKato && post.siteRate &&  (
                                                        <button style={{ backgroundColor: '#dceeff' }} onClick={() => sendToSiteBill(post)}>
                                                            Send to Site
                                                        </button>
                                                        )}
                                                    </td>
                                                    <td colSpan={9} style={{ backgroundColor: '#dceeff' }}>
                                                        {post.drivertoSendBill === "no" && post.dryverOutstendingPayment &&   (
                                                        <button style={{ backgroundColor: '#d0f0c0' }} onClick={() => sendToDriverBill(post)}>
                                                            Send to Driver
                                                        </button>
                                                        )}
                                                    </td> */}
                                                </tr>
                    </tbody>
                </table>
            </div>
    )
}

export default Calldata;
