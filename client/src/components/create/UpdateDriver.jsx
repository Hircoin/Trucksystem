import React, { useState, useEffect } from 'react';

import { Box, styled, TextareaAutosize, Button, FormControl, InputBase,TextField  } from '@mui/material';
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
    driverNumber: '',
    driverNumberLicence: '',
    driverExperience: '',
    driverAge: '',
    driverName: '',
    truckOwner: '',
    driverAdharcard: '',
    massage: '',
    drivereStatus: '',
    dryvereProfesion: '',
    drivereFree: '',
    drivereOutstandingPayment: '',
    paymentAmount: '',
    lasttruck: '',
    lastsite: '',
    drivereId: '',
    driverPassword: '',
    driverVeryfyed: '',
    performanceShipment: '',
    fuelAvg: '',
    speedAvg: '',
    profitAvg: '',
    fixedSalery: '',
    tripSalary: '',
    maintainenseAvg: '',
    startingdatepayment: '',
    endingdatepayment: '',
    paymentDate: '',
    lasttripDate: '',
    
    createdDate: new Date()
}

const UpdateDriver = () => {
    const navigate = useNavigate();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState('');

    const { id } = useParams();

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getDriverbyid(id);
            if (response.isSuccess) {
                setPost(response.data[0]);
            }
        }
        fetchData();
    }, []);

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
            const response = await API.updateDriver(post); // Ensure API call completes
            console.log("Update Response:", response); // Debugging
    
            if (response?.isSuccess) {
                navigate(`/addDetails`); // Navigate only if success
            } else {
                console.error("Failed to update shipment:", response);
                alert("Failed to update. Please try again.");
            }
        } catch (error) {
            console.error("Error updating shipment:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

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
                <InputTextField onChange={(e) => handleChange(e)} value={post.driverName} name='driverName' placeholder="driverName" />
                <Button onClick={() => updateBlogPost()} variant="contained" color="primary">Update</Button>
            </StyledFormControl>

            
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.driverNumberLicence || ""}
                name="driverNumberLicence"
                label='Enter driverNumberLicence'
            />
            {/* <InputTextField
                onChange={(e) => handleChange(e)} 
                value={post.tital || ""}
                name="tital"
                placeholder="tital"
            /> */}
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.driverExperience || ""}
                name="driverExperience"
                label='Enter driverExperience'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.driverAge || ""}
                name="driverAge"
                label='Enter driverAge'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.driverNumber || ""}
                name="driverNumber"
                label='Enter driverNumber'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.truckOwner || ""}
                name="truckOwner"
                label='Enter truckOwner'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.driverAdharcard || ""}
                name="driverAdharcard"
                label='Enter driverAdharcard'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.massage || ""}
                name="massage"
                label='Enter Message'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.drivereStatus || ""}
                name="drivereStatus"
                label='Enter drivereStatus'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.dryvereProfesion || ""}
                name="dryvereProfesion"
                label='Enter dryvereProfesion'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.drivereFree || ""}
                name="drivereFree"
                label='Enter drivereFree'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.drivereOutstandingPayment || ""}
                name="drivereOutstandingPayment"
                label='Enter drivereOutstandingPayment'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.paymentAmount || ""}
                name="paymentAmount"
                label='Enter paymentAmount'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.lasttruck || ""}
                name="lasttruck"
                label='Enter lasttruck'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.lastsite || ""}
                name="lastsite"
                label='Enter lastsite'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.drivereId || ""}
                name="drivereId"
                label='Enter drivereId'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.driverPassword || ""}
                name="driverPassword"
                label='Enter driverPassword'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.driverVeryfyed || ""}
                name="driverVeryfyed"
                label='Enter driverVeryfyed'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.performanceShipment || ""}
                name="performanceShipment"
                label='Enter performanceShipment'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.fuelAvg || ""}
                name="fuelAvg"
                label='Enter fuelAvg'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.speedAvg || ""}
                name="speedAvg"
                label='Enter speedAvg'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.profitAvg || ""}
                name="profitAvg"
                label='Enter profitAvg'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.fixedSalery || ""}
                name="fixedSalery"
                label='Enter fixedSalery'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.tripSalary || ""}
                name="tripSalary"
                label='Enter tripSalary'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.maintainenseAvg || ""}
                name="maintainenseAvg"
                label='Enter maintainenseAvg'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.startingdatepayment || ""}
                name="startingdatepayment"
                label='Enter startingdatepayment'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.endingdatepayment || ""}
                name="endingdatepayment"
                label='Enter endingdatepayment'
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
    )
}

export default UpdateDriver;