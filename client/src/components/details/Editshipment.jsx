import { useState, useEffect, useContext } from "react";

import { Box, Typography, styled } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

import { API } from "../../service/api";

import { DataContext } from "../../context/DataProvider";

// components
import Comments from "./comments/Comments";

const Container = styled(Box)(({ theme }) => ({
margin: "50px 100px",
[theme.breakpoints.down("md")]: {
    margin: 0,
},
}));

const Image = styled("img")({
width: "100%",
height: "50vh",
objectFit: "cover",
});

const EditIcon = styled(Edit)`
margin: 5px;
padding: 5px;
border: 1px solid #878787;
border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
margin: 5px;
padding: 5px;
border: 1px solid #878787;
border-radius: 10px;
`;

const Heading = styled(Typography)`
font-size: 38px;
font-weight: 600;
text-align: center;
margin: 50px 0 10px 0;
word-break: break-word;
`;

const Author = styled(Box)(({ theme }) => ({
color: "#878787",
display: "flex",
margin: "20px 0",
[theme.breakpoints.down("sm")]: {
    display: "block",
},
}));

const Description = styled(Typography)`
word-break: break-word;
`;

const Editshipment = () => {
const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

const [post, setPost] = useState({});
const { account } = useContext(DataContext);
const [searchParams] = useSearchParams();
const entity = searchParams.get("entity"); // Get 'entity' from query params

const navigate = useNavigate();
const { id } = useParams();

// useEffect(() => {
//     const fetchData = async () => {
//         // if (!entity || !id) {
//         //     console.log("Entity or account is missing, skipping API call.");
//         //     return; // Prevent API call if entity or username is missing
//         // }

//         // console.log(`Fetching data for entity: ${entity} and id: ${id}`);

//         try {
//             let response;

            
//                     response = await API.getShipmentbyid(id);
//                     return;
            
            
//             // Check if the response is successful and update the state
//             if (response?.isSuccess) {
//                 setPost(response.data[0]);
//             } else {
//                 console.log("API response was not successful.");
//             }
//         } catch (error) {
//             console.error("Error fetching property data:", error);

//             if (error.response?.status === 403) {
//                 navigate("/login");
//             }
//         }
//     };

//     // Call fetchData whenever the entity or account.username changes
//     fetchData();
// }, [ id]); // Dependency on entity and account.username

useEffect(() => {
    const fetchData = async () => {
        try {
            let response = await API.getShipmentbyid(id);

            // Check if the response is successful and update the state
            if (response?.isSuccess) {
                setPost(response.data[0]); // Assuming response.data is an array
            } else {
                console.log("API response was not successful.");
            }
        } catch (error) {
            console.error("Error fetching shipment data:", error);

            if (error.response?.status === 403) {
                navigate("/login");
            }
        }
    };

    // Call fetchData whenever id changes
    if (id) {
        fetchData();
    }
}, [id]); // Dependency on id

const deleteBlog = async () => {
    await API.deleteShipment(post._id);
    navigate("/AllRenterDetail");
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
    <Container>
    <Image src={post.picture || url} alt="post" />
    <Box style={{ float: "right" }}>
        {account.username === post.truckOwner && (
        <>
            <Link to={`/update/${post._id}`}>
            <EditIcon color="primary" />
            </Link>
            <DeleteIcon onClick={() => deleteBlog()} color="error" />
        </>
        )}
    </Box>
    <Heading>{post.title}</Heading>

    <Author>
        <Link
        to={`/?username=${post.username}`}
        style={{ textDecoration: "none", color: "inherit" }}
        >
        {/* add symbol edit,delet */}
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
        {new Date(post.createdDate).toDateString()}
        </Typography>
    </Author>
        
        <p>id : {id} </p>
        {post.massage && <Description>massage : {post.massage}</Description>}
        {post.tital && <Description>tital : {post.tital}</Description>}
        {post.trucknumber && <Description>trucknumber : {post.trucknumber}</Description>}
        {post.driverename && <Description>driverename : {post.driverename}</Description>}
        {post.whereLoad && <Description>whereLoad : {post.whereLoad}</Description>}
        {post.tonesLoad && <Description>tonesLoad: {post.tonesLoad}</Description>}
        {post.ratePerTone && <Description>ratePerTone : {post.ratePerTone}</Description>}
        {post.drivereId && <Description>drivereId : {post.drivereId}</Description>}
        {post.truckId && <Description>truckId : {post.truckId}</Description>}
        {post.siteId && <Description>siteId: {post.siteId}</Description>}
        {post.disel && <Description>disel: {post.disel}</Description>}
        {post.tripSalary && <Description>tripSalary : {post.tripSalary}</Description>}
        {post.tole && <Description>tole: {post.tole}</Description>}
        {post.royaltyNum && <Description>royaltyNum : {post.royaltyNum}</Description>}
        {post.washProduct && <Description>washProduct : {post.washProduct}</Description>}
        {post.truckOwner && <Description>truckOwner : {post.truckOwner}</Description>}
        
        {post.product && <Description>product: {post.product}</Description>}
        {post.shipmentStatus && <Description>shipmentStatus : {post.shipmentStatus}</Description>}
        {post.siteKato && <Description>siteKato : {post.siteKato}</Description>}
        {post.siteCharge && <Description>siteCharge: {post.siteCharge}</Description>}
        {post.siteRate && <Description>siteRate : {post.siteRate}</Description>}
        {post.paymentOutstending && <Description>paymentOutstending: {post.paymentOutstending}</Description>}
        {post.totalBill && <Description>totalBill : {post.totalBill}</Description>}
        {post.dryverOutstendingPayment && <Description>dryverOutstendingPayment : {post.dryverOutstendingPayment}</Description>}
        {post.warning && <Description>warning: {post.warning}</Description>}
        {post.createdDate && (<Description>createdDate Date: {formattedDate(post.createdDate)}</Description>)}
    <Comments post={post} />
    </Container>
);
};

export default Editshipment;
