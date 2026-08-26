import React, { useState, useEffect , useContext} from 'react';

import { Box, styled, TextareaAutosize, Button, FormControl, InputBase,TextField  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const StyledTextArea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;


const initialPost = {
    massage: '',
    tital: '',
    trucknumber: '',
    driverename: '',
    whereLoad: '',
    tonesLoad: '',
    ratePerTone: '',
    drivereId: '',
    truckId: '',
    siteId: '',
    siteName: '',
    siteManagerNum: '',
    siteOwner: '',
    siteManager: '',
    disel: '',
    tripSalary: '',
    tole: '',
    royaltyNum: '',
    washProduct: '',
    product: '',
    truckOwner: '',
    shipmentStatus: '',
    siteKato: '',
    siteCharge: '',
    siteRate: '',
    paymentOutstending: '',
    totalBill: '',
    dryverOutstendingPayment: '',
    warning: '',
    sitePending: '',
    driverPending: '',
    
    
    createdDate: new Date()
}

const Update = () => {
    const navigate = useNavigate();

    const [post, setPost] = useState(initialPost);
    const [site, setSite] = useState([]);
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState('');
    const { account } = useContext(DataContext);

    const { id } = useParams();

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getShipmentbyid(id);
            if (response.isSuccess) {
                setPost(response.data[0]);
            }
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         let response = await API.getSitebyowner(account.username);
    //         if (response.isSuccess) {
    //             setSite(response.data);
    //         }
    //     }
    //     fetchData();
    // }, [account.username]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await API.getSitebyowner(account.username);
                console.log("API Response for Sites:", response);
    
                if (response?.isSuccess && Array.isArray(response.data)) {
                    setSite(response.data); // ✅ Only set if it's an array
                } else {
                    console.error("Expected an array, but got:", response.data);
                    setSite([]); // Fallback to an empty array
                }
            } catch (error) {
                console.error("Error fetching site data:", error);
                setSite([]); // Fallback to an empty array
            }
        };
    
        fetchData();
    }, [account.username]);

    
    // useEffect(() => {
    //     const getImage = async () => { 
    //         if(file) {
    //             const data = new FormData();
    //             data.append("name", file.name);
    //             data.append("file", file);
                
    //             const response = await API.uploadFile(data);
    //             if (response.isSuccess) {
    //                 post.picture = response.data;
    //                 setImageURL(response.data);    
    //             }
    //         }
    //     }
    //     getImage();
    // }, [file])

    useEffect(() => {
        const getImage = async () => { 
            if (file) {
                try {
                    const data = new FormData();
                    data.append("name", file.name);
                    data.append("file", file);
                    
                    const response = await API.uploadFile(data);
                    if (response.isSuccess) {
                        post.picture = response.data;
                        setImageURL(response.data);    
                    }
                } catch (error) {
                    console.error("Error uploading file:", error);
                }
            }
        }
        getImage();
    }, [file]);
    
    
    

    


    // const updateBlogPost = async () => {
    //     await API.updateShipment(post);
    //     navigate(`/AllRenterDetail/details/${id}`);
    // }
    const updateBlogPost = async () => {
        try {
            const response = await API.updateShipment(post); // Ensure API call completes
            console.log("Update Response:", response); // Debugging
    
            if (response?.isSuccess) {
                navigate(`/shipment/details/${id}`); // Navigate only if success
            } else {
                console.error("Failed to update shipment:", response);
                alert("Failed to update. Please try again.");
            }
        } catch (error) {
            console.error("Error updating shipment:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    // const handleChange = (e) => {
    //     setPost({ ...post, [e.target.name]: e.target.value });
    // }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    
    //     // If the 'siteId' is changed, find the selected site and update the related fields
    //     if (name === 'siteId') {
    //         const selectedSite = site.find((siteObj) => siteObj._id === value);
    
    //         // Update the post state with all the required fields when site is selected
    //         setPost({
    //             ...post,
    //             siteId: value,
    //             siteName: selectedSite ? selectedSite.siteName : '',
    //             siteManagerNum: selectedSite ? selectedSite.siteManagerNum : '',
    //             siteOwner: selectedSite ? selectedSite.siteOwner : '',
    //             siteManager: selectedSite ? selectedSite.siteManager : ''
    //         });
    //     } else {
    //         // For all other fields, update normally
    //         setPost({
    //             ...post,
    //             [name]: value
    //         });
    //     }
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // If the 'siteId' is changed, find the selected site and update the related fields
        if (name === 'siteId') {
            const selectedSite = site.find((siteObj) => siteObj._id === value);
    
            // Update the post state with all the required fields when site is selected
            setPost({
                ...post,
                siteId: value,
                siteName: selectedSite ? selectedSite.siteName : '',
                siteManagerNum: selectedSite ? selectedSite.siteManagerNum : '',
                siteOwner: selectedSite ? selectedSite.siteOwner : '',
                siteManager: selectedSite ? selectedSite.siteManager : ''
            });
        } else {
            // For fields other than 'siteId', handle normally
            setPost((prevPost) => {
                const updatedPost = {
                    ...prevPost,
                    [name]: value
                };
    
                // If siteKato and siteRate are provided, calculate paymentOutstanding
                if (updatedPost.siteKato && updatedPost.siteRate) {
                    updatedPost.paymentOutstending = updatedPost.siteKato * updatedPost.siteRate;
                }
    
                // If tripSalary is provided, set driverOutstandingPayment
                if (updatedPost.tripSalary) {
                    updatedPost.dryverOutstendingPayment = updatedPost.tripSalary;
                }
    
                return updatedPost;
            });
        }
    };
    
    return (
        <Container>
            <Image src={post.picture || url} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <TextField variant="standard" onChange={(e) => handleChange(e)} value={post.tital} name='tital' placeholder="Title" />
                <Button onClick={() => updateBlogPost()} variant="contained" color="primary">Update</Button>
                
            </StyledFormControl>

            
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.massage || ""}
                name="massage"
                label='Enter Message'
            />
            {/* <InputTextField
                onChange={(e) => handleChange(e)} 
                value={post.tital || ""}
                name="tital"
                placeholder="tital"
            /> */}
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.trucknumber || ""}
                name="trucknumber"
                label='Enter Truck Number*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.driverename || ""}
                name="driverename"
                label='Enter driverename*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.whereLoad || ""}
                name="whereLoad"
                label='Enter WhereLoad*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.tonesLoad || ""}
                name="tonesLoad"
                label='Enter Tones Load*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.ratePerTone || ""}
                name="ratePerTone"
                label='Enter Rate Per Tone*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.disel || ""}
                name="disel"
                label='Enter Disel*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.tripSalary || ""}
                name="tripSalary"
                label='Enter Trip Salary*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.tole || ""}
                name="tole"
                label='Enter Tole*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.royaltyNum || ""}
                name="royaltyNum"
                label='Enter Royalty Num*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.washProduct || ""}
                name="washProduct"
                label='Enter Wash Product'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.product || ""}
                name="product"
                label='Enter Product*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.truckOwner || ""}
                name="truckOwner"
                label='Enter Truck Owner'
            />
            
            <div>
                <label>Select Site:</label>
                <select name="siteId" value={post.siteId} onChange={handleChange}>
                    <option value="">Select a site*</option>
                    {site.map((object) => (
                        <option key={object._id} value={object._id}>
                            {object.siteName}
                        </option>
                    ))}
                </select>
            </div>
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteKato || ""}
                name="siteKato"
                label='Enter Site Kato*'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteCharge || ""}
                name="siteCharge"
                label='Enter Other Charge'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteRate || ""}
                name="siteRate"
                label='Enter Site Rate*'
            />
            
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.warning || ""}
                name="warning"
                label='Enter Warning'
            />

            {post.siteRate && post.siteKato && post.siteId &&(
                <label>
                    <input
                        type="checkbox"
                        checked={post.sitePending === "Jama"}
                        onChange={(e) =>
                        setPost((prev) => ({
                            ...prev,
                            sitePending: e.target.checked ? "Jama" : ""
                        }))
                        }
                    />
                    Site Jama
                </label>
            )}
            {post.tripSalary && (
                <label>
                    <input
                        type="checkbox"
                        checked={post.driverPending === "Jama"}
                        onChange={(e) =>
                        setPost((prev) => ({
                            ...prev,
                            driverPending: e.target.checked ? "Jama" : ""
                        }))
                        }
                    />
                    Driver Trip Jama
                </label>
            )}
            {((post.sitePending && post.siteId) || (post.tripSalary && post.driverPending) || (post.siteRate && post.siteKato)) && (
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.shipmentStatus || ""}
                name="shipmentStatus"
                label='Enter Shipment Status**'
            />
            )}
        </Container>
    )
}

export default Update;