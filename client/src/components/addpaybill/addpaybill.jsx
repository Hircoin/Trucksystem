// import React, { useState, useEffect} from 'react';
// //import { useSpring, animated } from "react-spring";
// //import { Link} from "react-router-dom";
// import { styled,Button,Box, FormControl,InputBase  } from '@mui/material';
// import { AddCircle as Add } from "@mui/icons-material";
// import { useNavigate , useSearchParams} from 'react-router-dom'; // Import useNavigate
// import { API } from '../../service/api';
// import './Watch.css'; // Import CSS file



// const Container = styled(Box)(({ theme }) => ({
//     margin: "50px 100px",
//     [theme.breakpoints.down("md")]: {
//         margin: 0,
//     },
//     }));

//     const InputTextField = styled(InputBase)`
//     flex: 1;
//     margin: 0 30px;
//     font-size: 25px;
// `;

// const StyledFormControl = styled(FormControl)`
//     margin-top: 10px;
//     display: flex;
//     flex-direction: row;
// `;
//     const Image = styled("img")({
//     width: "100%",
//     height: "50vh",
//     objectFit: "cover",
//     });

    
// const initialPost = {
//     propertyId: '',
//     propertyName: '',
//     flourId: '',
//     flourName: '',
//     ownerName: '',
//     statusProp: '',
//     rentStatus: '',
//     renterName: '',
//     renterRoomNum: '',
//     renterEmail: '',
//     rent: '',
//     waterFixedChargeUnit: '',
//     rentPayTotalMonth: '',
//     renterMoNum: '',
//     lightFixedChargeUnit: '',
//     rentUserId: '',
//     password: '',
//     joiningDate: '',
//     deposit: '',
//     warning: '',
//     business: '',
//     place: '',
//     village: '',
//     behaviour: '',
//     notificationDate: '',
//     lastUpdatedMonth: '',
//     totalOutstandingAmount: '',
//     endingDate: '',
//     nextBooking: '',
//     nextDetailUpdateDate: '',
//     lastIncreaseRentDate: '',
//     lastRent: '',
    
//     createdDate: new Date()
// }


// const initialRentbill = {
//     propertyId: '',
//     propertyName: '',
//     flourId: '',
//     flourName: '',
//     ownerName: '',
//     rentId: '',
//     rentStatus: '',
//     rentStartingDate: '',
//     rentEndingDate: '',
//     deposit: '',
//     rentAmount: '',
//     waterBill: '',
//     lightBill: '',
//     lightFixedChargeUnit: '',
//     paymentBeforeDate: '',
//     totalAmount: '',
//     billStatus: '',
//     textMessage: '',
//     notificationDate: '',
//     billUpdateDate: '',
//     renterName: '',
//     lastWatchDate: '',
//     renterNum: '',
//     renterRoomNum: '',
//     rentUserId: '',
//     warning: '',
//     totalOutstandingAmount: '',
//     paymentMethod: '',
//     payBillDate: '',
//     payAmount: '',
//     createdDate: '',
    
// }


//     const Addrentbill = () => {
//         const [searchParams] = useSearchParams();
//         const navigate = useNavigate();
//         const [post, setRenter] = useState(initialPost);
//         const [rentbill, setRentbill] = useState(initialRentbill);//initialRentbill
//         const renterId = searchParams.get("renter");
        
//         useEffect(() => {
//             const fetchData = async () => {
//             try {
//                 let response = await API.getPostById(renterId);
//                 if (response.isSuccess) {
//                     setRenter(response.data);
//                     setRentbill(response.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching post data:", error);
//                 if (error.response && error.response.status === 403) {
//                 // If error status is 403, navigate to the /login route
//                 navigate("/login");
//                 }
//             }
//             };
//             fetchData();
//         }, [renterId,navigate]);
    
//     const url =
//         "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

//         const handleChange = (e) => {
//             setRentbill({ ...post, [e.target.name]: e.target.value });
            
//         }

//         const updateBlogPost = async () => {
//             await API.createRenterbill(rentbill);
//             navigate(`/AllRenterDetail/details/${renterId}`);
//         }
    

//     return (
//         <Container>
//             <Image src={post.picture || url} alt="post" />

//             <StyledFormControl>
//                 <label htmlFor="fileInput">
//                     <Add fontSize="large" color="action" />
//                 </label>
//                 <input
//                     type="file"
//                     id="fileInput"
//                     style={{ display: "none" }}
                    
//                 />
//                 <InputTextField onChange={(e) => handleChange(e)} value={post.title} name='title' placeholder="Title" />
//                 <Button onClick={() => updateBlogPost()} variant="contained" color="primary">Update</Button>
//             </StyledFormControl>

            
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.propertyName || ""}
//                 name="propertyName"
//                 placeholder="Property Name"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.flourName || ""}
//                 name="flourName"
//                 placeholder="Flore Name"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.joiningDate || ""}
//                 name="joiningDate"
//                 placeholder="Joining Date"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.renterMoNum || ""}
//                 name="renterMoNum"
//                 placeholder="Mobile Number"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.renterEmail || ""}
//                 name="renterEmail"
//                 placeholder="Email"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.rent || ""}
//                 name="rent"
//                 placeholder="User Rent"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.rentPayTotalMonth || ""}
//                 name="rentPayTotalMonth"
//                 placeholder="Total Rent Bill"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.lightFixedChargeUnit || ""}
//                 name="lightFixedChargeUnit"
//                 placeholder="Light Charge per Unit"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.renterRoomNum || ""}
//                 name="renterRoomNum"
//                 placeholder="Renter Room Num"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.waterFixedChargeUnit || ""}
//                 name="waterFixedChargeUnit"
//                 placeholder="Water Fixed Charge"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.deposit || ""}
//                 name="deposit"
//                 placeholder="Deposit"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.business || ""}
//                 name="business"
//                 placeholder="Business"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.place || ""}
//                 name="place"
//                 placeholder="Place"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.village || ""}
//                 name="village"
//                 placeholder="Village"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.behaviour || ""}
//                 name="behaviour"
//                 placeholder="Behaviour"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.lastUpdatedMonth || ""}
//                 name="lastUpdatedMonth"
//                 placeholder="Last Updated Month Bill"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.totalOutstandingAmount || ""}
//                 name="totalOutstandingAmount"
//                 placeholder="Total Outstanding Amount"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.lastRent || ""}
//                 name="lastRent"
//                 placeholder="Last Rent"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.lastIncreaseRentDate || ""}
//                 name="lastIncreaseRentDate"
//                 placeholder="Last Increase Rent Date"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.statusProp || ""}
//                 name="statusProp"
//                 placeholder="Your Property Status"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.rentStatus || ""}
//                 name="rentStatus"
//                 placeholder="Renter Status"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.rentUserId || ""}
//                 name="rentUserId"
//                 placeholder="Rent Id"
//             />
//         </Container>
//     )
//     };

// export default Addrentbill ;

// import React, { useState, useEffect} from 'react';
// //import { useSpring, animated } from "react-spring";
// //import { Link} from "react-router-dom";
// import { styled,Button,Box, FormControl,InputBase  } from '@mui/material';
// import { AddCircle as Add } from "@mui/icons-material";
// import { useNavigate , useSearchParams} from 'react-router-dom'; // Import useNavigate
// import { API } from '../../service/api';
// import './Watch.css'; // Import CSS file



// const Container = styled(Box)(({ theme }) => ({
//     margin: "50px 100px",
//     [theme.breakpoints.down("md")]: {
//         margin: 0,
//     },
//     }));

//     const InputTextField = styled(InputBase)`
//     flex: 1;
//     margin: 0 30px;
//     font-size: 25px;
// `;

// const StyledFormControl = styled(FormControl)`
//     margin-top: 10px;
//     display: flex;
//     flex-direction: row;
// `;
//     const Image = styled("img")({
//     width: "100%",
//     height: "50vh",
//     objectFit: "cover",
//     });

    
// const initialPost = {
//     propertyId: '',
//     propertyName: '',
//     flourId: '',
//     flourName: '',
//     ownerName: '',
//     statusProp: '',
//     rentStatus: '',
//     renterName: '',
//     renterRoomNum: '',
//     renterEmail: '',
//     rent: '',
//     waterFixedChargeUnit: '',
//     rentPayTotalMonth: '',
//     renterMoNum: '',
//     lightFixedChargeUnit: '',
//     rentUserId: '',
//     password: '',
//     joiningDate: '',
//     deposit: '',
//     warning: '',
//     business: '',
//     place: '',
//     village: '',
//     behaviour: '',
//     notificationDate: '',
//     lastUpdatedMonth: '',
//     totalOutstandingAmount: '',
//     endingDate: '',
//     nextBooking: '',
//     nextDetailUpdateDate: '',
//     lastIncreaseRentDate: '',
//     lastRent: '',
    
//     createdDate: new Date()
// }


// const initialRentbill = {
//     propertyId: '',
//     propertyName: '',
//     flourId: '',
//     flourName: '',
//     ownerName: '',
//     rentId: '',
//     rentStatus: '',
//     rentStartingDate: '',
//     rentEndingDate: '',
//     deposit: '',
//     rentAmount: '',
//     waterBill: '',
//     lightBill: '',
//     lightFixedChargeUnit: '',
//     paymentBeforeDate: '',
//     totalAmount: '',
//     billStatus: '',
//     textMessage: '',
//     notificationDate: '',
//     billUpdateDate: '',
//     renterName: '',
//     lastWatchDate: '',
//     renterNum: '',
//     renterRoomNum: '',
//     rentUserId: '',
//     warning: '',
//     totalOutstandingAmount: '',
//     paymentMethod: '',
//     payBillDate: '',
//     payAmount: '',
//     createdDate: '',
    
// }


//     const Addrentbill = () => {
//         const [searchParams] = useSearchParams();
//         const navigate = useNavigate();
//         const [post, setRenter] = useState(initialPost);
//         const [rentbill, setRentbill] = useState(initialRentbill);//initialRentbill
//         const renterId = searchParams.get("renter");
        
//         useEffect(() => {
//             const fetchData = async () => {
//             try {
//                 let response = await API.getPostById(renterId);
//                 if (response.isSuccess) {
//                     setRenter(response.data);
//                     setRentbill(response.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching post data:", error);
//                 if (error.response && error.response.status === 403) {
//                 // If error status is 403, navigate to the /login route
//                 navigate("/login");
//                 }
//             }
//             };
//             fetchData();
//         }, [renterId,navigate]);
    
//     const url =
//         "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

//         const handleChange = (e) => {
//             setRentbill({ ...post, [e.target.name]: e.target.value });
            
//         }

//         const updateBlogPost = async () => {
//             await API.createRenterbill(rentbill);
//             navigate(`/AllRenterDetail/details/${renterId}`);
//         }
    

//     return (
//         <Container>
//             <Image src={post.picture || url} alt="post" />

//             <StyledFormControl>
//                 <label htmlFor="fileInput">
//                     <Add fontSize="large" color="action" />
//                 </label>
//                 <input
//                     type="file"
//                     id="fileInput"
//                     style={{ display: "none" }}
                    
//                 />
//                 <InputTextField onChange={(e) => handleChange(e)} value={post.title} name='title' placeholder="Title" />
//                 <Button onClick={() => updateBlogPost()} variant="contained" color="primary">Update</Button>
//             </StyledFormControl>

            
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.propertyName || ""}
//                 name="propertyName"
//                 placeholder="Property Name"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.flourName || ""}
//                 name="flourName"
//                 placeholder="Flore Name"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.joiningDate || ""}
//                 name="joiningDate"
//                 placeholder="Joining Date"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.renterMoNum || ""}
//                 name="renterMoNum"
//                 placeholder="Mobile Number"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.renterEmail || ""}
//                 name="renterEmail"
//                 placeholder="Email"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.rent || ""}
//                 name="rent"
//                 placeholder="User Rent"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.rentPayTotalMonth || ""}
//                 name="rentPayTotalMonth"
//                 placeholder="Total Rent Bill"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.lightFixedChargeUnit || ""}
//                 name="lightFixedChargeUnit"
//                 placeholder="Light Charge per Unit"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.renterRoomNum || ""}
//                 name="renterRoomNum"
//                 placeholder="Renter Room Num"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.waterFixedChargeUnit || ""}
//                 name="waterFixedChargeUnit"
//                 placeholder="Water Fixed Charge"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.deposit || ""}
//                 name="deposit"
//                 placeholder="Deposit"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.business || ""}
//                 name="business"
//                 placeholder="Business"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.place || ""}
//                 name="place"
//                 placeholder="Place"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.village || ""}
//                 name="village"
//                 placeholder="Village"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.behaviour || ""}
//                 name="behaviour"
//                 placeholder="Behaviour"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.lastUpdatedMonth || ""}
//                 name="lastUpdatedMonth"
//                 placeholder="Last Updated Month Bill"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.totalOutstandingAmount || ""}
//                 name="totalOutstandingAmount"
//                 placeholder="Total Outstanding Amount"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.lastRent || ""}
//                 name="lastRent"
//                 placeholder="Last Rent"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.lastIncreaseRentDate || ""}
//                 name="lastIncreaseRentDate"
//                 placeholder="Last Increase Rent Date"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.statusProp || ""}
//                 name="statusProp"
//                 placeholder="Your Property Status"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.rentStatus || ""}
//                 name="rentStatus"
//                 placeholder="Renter Status"
//             />
//             <InputTextField
//                 onChange={(e) => handleChange(e)} 
//                 value={post.rentUserId || ""}
//                 name="rentUserId"
//                 placeholder="Rent Id"
//             />
//         </Container>
//     )
//     };

// export default Addrentbill ;
import React, { useState, useEffect } from 'react';
import { styled, Button, Box, FormControl, InputBase } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API } from '../../service/api';
import './Watch.css';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0,
    },
}));

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Selectbox = styled(Box)`
    flex: 1;
    margin: 0 35px;
    font-size: 30px;
`;

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
});

const initialRentbill = {
    propertyId: '',
    propertyName: '',
    flourId: '',
    flourName: '',
    ownerName: '',
    rentId: '',
    rentStatus: '',
    rentStartingDate: '',
    rentEndingDate: '',
    deposit: '',
    rentAmount: '',
    waterBill: '',
    lightBill: '',
    lightFixedChargeUnit: '',
    paymentBeforeDate: '',
    totalAmount: '',
    billStatus: '',
    textMessage: '',
    notificationDate: '',
    billUpdateDate: '',
    renterName: '',
    lastWatchDate: '',
    renterNum: '',
    renterRoomNum: '',
    rentUserId: '',
    warning: '',
    totalOutstandingAmount: '',
    paymentMethod: '',
    payBillDate: '',
    payAmount: '',
    createdDate: '',
};

const AddRentBill = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(initialRentbill);
    const [rentbill, setRentbill] = useState(initialRentbill);
    const rentbillId = searchParams.get('rentbillId');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.getrentbillbyid(rentbillId);
                if (response.isSuccess) {
                    setPost(response.data); // Store fetched data
                    setRentbill({ ...initialRentbill, ...response.data }); // Map to rentbill structure
                }
            } catch (error) {
                console.error('Error fetching post data:', error);
                if (error.response && error.response.status === 403) {
                    navigate('/login');
                }
            }
        };
        fetchData();
    }, [rentbillId, navigate]);

    const handleChange = (e) => {
        setRentbill({ ...rentbill, [e.target.name]: e.target.value });
    };

    ///add/Paybills/rentbill?renter=${rentbill._id}  add/Paybills/rentbill?renter=673ad5d04cae324e3e5c1a06 rentId

    const updateRentBill = async () => {
        try {
            await API.updateRenterbill(rentbill);
            navigate(`/add/Paybills/rentbill?renter=${rentbill.rentId}`);
        } catch (error) {
            console.error('Error updating rent bill:', error);
        }
    };

    // const inputFields = Object.keys(initialRentbill).map((field) => ({
    //     name: field,
    //     placeholder: field
    //         .replace(/([A-Z])/g, ' $1') // Split camelCase
    //         .replace(/^./, (str) => str.toUpperCase()), // Capitalize first letter
    // }));

    const formatDate = (date) => {
        if (!date) return 'N/A';
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        <Container>
            <Image
                src={
                    post.picture ||
                    'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
                }
                alt="Post"
            />

            <StyledFormControl>
                <InputTextField
                    onChange={handleChange}
                    value={rentbill.propertyName || ''}
                    name="propertyName"
                    placeholder="Property Name"
                />
                <Button onClick={updateRentBill} variant="contained" color="primary">
                    Update
                </Button>
            </StyledFormControl>

            
            <div>
            <p>
                {formatDate(rentbill.rentStartingDate)} to {formatDate(rentbill.rentEndingDate)}
            </p>
            <p>
                Renter Name: {rentbill.renterName|| 'N/A'}
            </p>
            <p>
                Total Bill:  {rentbill.totalAmount || 'N/A'}  ( {rentbill.rentAmount || 'N/A'} + {rentbill.waterBill || 'N/A'} + {rentbill.lightBill || 'N/A'}({rentbill.lightFixedChargeUnit || 'N/A'}))
            </p>
            <p>
                massage: {rentbill.textMessage|| 'N/A'}
            </p>
            <p>
                Payment Last Date: {formatDate(rentbill.paymentBeforeDate) || 'N/A'} 
            </p>
            {/* <p>
                Total Payment Outstending: {rentbill.totalOutstandingAmount || 'N/A'}
            </p> 
            <p>
            Total Payment Outstending: {rentbill.totalOutstandingAmount || 'N/A'}
            </p>
            <p>
            Total Payment Outstending: {rentbill.totalOutstandingAmount || 'N/A'}
            </p> */}
            
            </div>
            
            
            
            <InputTextField
                onChange={handleChange}
                value={rentbill.textMessage || ''}
                name="textMessage"
                placeholder="Text Message"
            />
            
            {/* <div> Renter Mobile Num
            <InputTextField
                onChange={handleChange}
                value={rentbill.renterMoNum || ''}
                name="renterNum"
                placeholder="Renter Number"
            />
            </div> */}
{/*             
            <InputTextField
                onChange={handleChange}
                value={rentbill.warning || ''}
                name="warning"
                placeholder="Warning"
            />
            <InputTextField
                onChange={handleChange}
                value={rentbill.totalOutstandingAmount || ''}
                name="totalOutstandingAmount"
                placeholder="Total Outstanding Amount"
            />*/}
            <Selectbox>
                <select
                    onChange={handleChange}
                    value={rentbill.paymentMethod || ''}
                    name="paymentMethod"
                >
                    <option value="" disabled>
                        Select Payment Method
                    </option>
                    <option value="cash">Cash</option>
                    <option value="online">Online</option>
                    <option value="check">Check</option>
                </select>
            </Selectbox>
            {/* <InputTextField
                onChange={handleChange}
                value={rentbill.payBillDate || ''}
                name="payBillDate"
                placeholder="Pay Bill Date"
            /> */}
            <InputTextField
                onChange={handleChange}
                value={rentbill.payAmount || ''}
                name="payAmount"
                placeholder="Pay Amount"
            /> 
            <InputTextField
                onChange={handleChange}
                value={rentbill.billStatus || ''}
                name="billStatus"
                placeholder="Bill Status"
            />
            <InputTextField
                onChange={handleChange}
                value={rentbill.totalAmount || ''}
                name="totalAmount"
                placeholder="Bill Not Pay"
            />
            
        </Container>
    );
};

export default AddRentBill;
