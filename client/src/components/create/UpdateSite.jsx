// import React, { useState, useEffect } from 'react';

// import { Box, styled, TextareaAutosize, Button, FormControl, InputBase,TextField } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
// import { useNavigate, useParams } from 'react-router-dom';

// import { API } from '../../service/api';

// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));

// const Image = styled('img')({
//     width: '100%',
//     height: '50vh',
//     objectFit: 'cover'
// });

// const StyledFormControl = styled(FormControl)`
//     margin-top: 10px;
//     display: flex;
//     flex-direction: row;
// `;

// const InputTextField = styled(InputBase)`
//     flex: 1;
//     margin: 0 30px;
//     font-size: 25px;
// `;

// const StyledTextArea = styled(TextareaAutosize)`
//     width: 100%;
//     border: none;
//     margin-top: 50px;
//     font-size: 18px;
//     &:focus-visible {
//         outline: none;
//     }
// `;


// const initialPost = {
//     siteName: '',
//     massage: '',
//     structureMassage: '',
//     address: '',
//     siteManager: '',
//     sitePerson: '',
//     siteOwner: '',
//     truckOwner: '',
//     katoSite: '',
//     siteManagerNum: '',
//     ratePerTone: '',
//     distencekm: '',
//     runningTrucks: '',
//     runningStatus: '',
//     paymentOutstending: '',
//     paymentAmount: '',
//     siteId: '',
//     sitePassword: '',
//     siteverifyes: '',
//     siteProduct: '',
//     siteStatus: '',
//     workingStatus: '',
//     lastdriver: '',
//     lasttruck: '',
//     paymentstartingDate: '',
//     paymentendingDate: '',
//     paymentDate: '',
//     lasttripDate: '',
    
    
//     createdDate: new Date()
// }

// const UpdateSite = () => {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [post, setPost] = useState(initialPost);
//     const [file, setFile] = useState('');
//     const [imageURL, setImageURL] = useState('');

//     // const { id } = useParams();

//     const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
//     useEffect(() => {
//         const fetchData = async () => {
//             let response = await API.getSitebyid(id);
//             if (response.isSuccess) {
//                 setPost(response.data[0]);
//             }
//         }
//         fetchData();
//     }, []);

    
//     useEffect(() => {
//         const getImage = async () => { 
//             if (file) {
//                 try {
//                     const data = new FormData();
//                     data.append("name", file.name);
//                     data.append("file", file);
    
//                     const response = await API.uploadFile(data);
//                     if (response?.isSuccess) {
//                         setPost(prevPost => ({
//                             ...prevPost,
//                             picture: response.data
//                         }));
//                         setImageURL(response.data);
//                     }
//                 } catch (error) {
//                     console.error("Error uploading file:", error);
//                 }
//             }
//         };
//         getImage();
//     }, [file]);
    
    
    

    
//     const updateBlogPost = async () => {
//         try {
//             const response = await API.updateSite(post); // Ensure API call completes
//             console.log("Update Response:", response); // Debugging
    
//             if (response?.isSuccess) {
//                 navigate(`/shipment/details/${id}`); // Navigate only if success
//             } else {
//                 console.error("Failed to update shipment:", response);
//                 alert("Failed to update. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error updating shipment:", error);
//             alert("Something went wrong. Please try again.");
//         }
//     };

//     const handleChange = (e) => {
//         setPost({ ...post, [e.target.name]: e.target.value });
//     }

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
//                     onChange={(e) => setFile(e.target.files[0])}
//                 />
//                 <InputTextField onChange={(e) => handleChange(e)} value={post.siteName} name='siteName' placeholder="siteName" />
//                 <Button onClick={() => updateBlogPost()} variant="contained" color="primary">Update</Button>
//             </StyledFormControl>

            
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.massage || ""}
            //     name="massage"
            //     label='Enter massage'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.structureMassage || ""}
            //     name="structureMassage"
            //     label='Enter structureMassage'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.address || ""}
            //     name="address"
            //     label='Enter address'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.siteManager || ""}
            //     name="siteManager"
            //     label='Enter siteManager'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.sitePerson || ""}
            //     name="sitePerson"
            //     label='Enter sitePerson'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.siteOwner || ""}
            //     name="siteOwner"
            //     label='Enter siteOwner'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.truckOwner || ""}
            //     name="truckOwner"
            //     label='Enter truckOwner'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.katoSite || ""}
            //     name="katoSite"
            //     label='Enter katoSite'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.siteManagerNum || ""}
            //     name="siteManagerNum"
            //     label='Enter siteManagerNum'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.ratePerTone || ""}
            //     name="ratePerTone"
            //     label='Enter ratePerTone'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.distencekm || ""}
            //     name="distencekm"
            //     label='Enter distencekm'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.runningTrucks || ""}
            //     name="runningTrucks"
            //     label='Enter runningTrucks'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.runningStatus || ""}
            //     name="runningStatus"
            //     label='Enter runningStatus'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.paymentOutstending || ""}
            //     name="paymentOutstending"
            //     label='Enter paymentOutstending'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.paymentAmount || ""}
            //     name="paymentAmount"
            //     label='Enter paymentAmount'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.siteId || ""}
            //     name="siteId"
            //     label='Enter siteId'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.sitePassword || ""}
            //     name="sitePassword"
            //     label='Enter sitePassword'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.siteverifyes || ""}
            //     name="siteverifyes"
            //     label='Enter siteverifyes'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.siteProduct || ""}
            //     name="siteProduct"
            //     label='Enter siteProduct'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.siteStatus || ""}
            //     name="siteStatus"
            //     label='Enter siteStatus'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.workingStatus || ""}
            //     name="workingStatus"
            //     label='Enter workingStatus'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.lastdriver || ""}
            //     name="lastdriver"
            //     label='Enter lastdriver'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.lasttruck || ""}
            //     name="lasttruck"
            //     label='Enter lasttruck'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.paymentstartingDate || ""}
            //     name="paymentstartingDate"
            //     label='Enter paymentstartingDate'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.paymentendingDate || ""}
            //     name="paymentendingDate"
            //     label='Enter paymentendingDate'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.paymentDate || ""}
            //     name="paymentDate"
            //     label='Enter paymentDate'
            // />
            // <TextField variant="standard"
            //     onChange={(e) => handleChange(e)} 
            //     value={post.lasttripDate || ""}
            //     name="lasttripDate"
            //     label='Enter lasttripDate'
            // />
//         </Container>
//     )
// }

// export default UpdateSite;

import React, { useState, useEffect } from 'react';
import { Box, styled, TextareaAutosize, Button, FormControl, InputBase, TextField } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';

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

const initialPost = {
    siteName: '',
    massage: '',
    structureMassage: '',
    address: '',
    siteManager: '',
    sitePerson: '',
    siteOwner: '',
    truckOwner: '',
    katoSite: '',
    siteManagerNum: '',
    ratePerTone: '',
    distencekm: '',
    runningTrucks: '',
    runningStatus: '',
    paymentOutstending: '',
    paymentAmount: '',
    siteId: '',
    sitePassword: '',
    siteverifyes: '',
    siteProduct: '',
    siteStatus: '',
    workingStatus: '',
    lastdriver: '',
    lasttruck: '',
    paymentstartingDate: '',
    paymentendingDate: '',
    paymentDate: '',
    lasttripDate: '',
    createdDate: new Date()
}

const UpdateSite = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState('');

    const defaultImageURL = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await API.getSitebyid(id);
                if (response?.isSuccess && response?.data?.length > 0) {
                    setPost(response.data[0]);
                } else {
                    console.error("No data received or API error:", response);
                }
            } catch (error) {
                console.error("Error fetching site data:", error);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const getImage = async () => { 
            if (file) {
                try {
                    const data = new FormData();
                    data.append("name", file.name);
                    data.append("file", file);
                    
                    const response = await API.uploadFile(data);
                    if (response?.isSuccess) {
                        setPost(prevPost => ({
                            ...prevPost,
                            picture: response.data
                        }));
                        setImageURL(response.data);
                    }
                } catch (error) {
                    console.error("Error uploading file:", error);
                }
            }
        };
        getImage();
    }, [file]);

    const updateBlogPost = async () => {
        try {
            const response = await API.updateSite(post);
            if (response?.isSuccess) {
                navigate(`/addDetails`);
            } else {
                console.error("Failed to update site:", response);
                alert("Update failed. Please try again.");
            }
        } catch (error) {
            console.error("Error updating site:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <Image src={post?.picture || defaultImageURL} alt="post" />

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
                <InputTextField onChange={handleChange} value={post.siteName} name='siteName' placeholder="siteName" />
                <Button onClick={updateBlogPost} variant="contained" color="primary">Update</Button>
            </StyledFormControl>

            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.massage || ""}
                name="massage"
                label='Enter Message'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.structureMassage || ""}
                name="structureMassage"
                label='Enter structureMassage'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.address || ""}
                name="address"
                label='Enter address'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteManager || ""}
                name="siteManager"
                label='Enter siteManager'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.sitePerson || ""}
                name="sitePerson"
                label='Enter sitePerson'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteOwner || ""}
                name="siteOwner"
                label='Enter siteOwner'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.truckOwner || ""}
                name="truckOwner"
                label='Enter truckOwner'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.katoSite || ""}
                name="katoSite"
                label='Enter katoSite'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteManagerNum || ""}
                name="siteManagerNum"
                label='Enter siteManagerNum'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.ratePerTone || ""}
                name="ratePerTone"
                label='Enter ratePerTone'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.distencekm || ""}
                name="distencekm"
                label='Enter distencekm'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.runningTrucks || ""}
                name="runningTrucks"
                label='Enter runningTrucks'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.runningStatus || ""}
                name="runningStatus"
                label='Enter runningStatus'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.paymentOutstending || ""}
                name="paymentOutstending"
                label='Enter paymentOutstending'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.paymentAmount || ""}
                name="paymentAmount"
                label='Enter paymentAmount'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteId || ""}
                name="siteId"
                label='Enter siteId'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.sitePassword || ""}
                name="sitePassword"
                label='Enter sitePassword'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteverifyes || ""}
                name="siteverifyes"
                label='Enter siteverifyes'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteProduct || ""}
                name="siteProduct"
                label='Enter siteProduct'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.siteStatus || ""}
                name="siteStatus"
                label='Enter siteStatus'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.workingStatus || ""}
                name="workingStatus"
                label='Enter workingStatus'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.lastdriver || ""}
                name="lastdriver"
                label='Enter lastdriver'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.lasttruck || ""}
                name="lasttruck"
                label='Enter lasttruck'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.paymentstartingDate || ""}
                name="paymentstartingDate"
                label='Enter paymentstartingDate'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.paymentendingDate || ""}
                name="paymentendingDate"
                label='Enter paymentendingDate'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.paymentDate || ""}
                name="paymentDate"
                label='Enter paymentDate'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.lasttripDate || ""}
                name="lasttripDate"
                label='Enter lasttripDate'
            />
        </Container>
    );
}

export default UpdateSite;
