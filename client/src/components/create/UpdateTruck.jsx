import React, { useState, useEffect } from 'react';

import { Box, styled, TextareaAutosize, Button, FormControl, InputBase ,TextField} from '@mui/material';
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
    truckName: '',
    modelname: '',
    discription: '',
    modelYear: '',
    modelCapacity: '',
    licensedriver: '',
    plateno: '',
    royalty: '',
    truckOwner: '',
    tyersNumbers: '',
    engineNum: '',
    permite: '',
    secisNum: '',
    insurenceNum: '',
    registerNum: '',
    lastdriver: '',
    lastsite: '',
    performanceShipment: '',
    fuelAvg: '',
    speedAvg: '',
    profitAvg: '',
    maintainenseAvg: '',
    maintainenseStatus: '',
    tyersDate: '',
    insuranceDate: '',
    insurancelastDate: '',
    enginelastdate: '',
    permitelastDate: '',
    tyerlastDate: '',
    puclastDate: '',
    greecelastDate: '',
    serviceDate: '',
    GPSlastDate: '',
    batterywaterlastDate: '',
    lasttripDate: '',
    createdDate: '',
    
}

const UpdateTruck = () => {
    const navigate = useNavigate();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState('');

    const { id } = useParams();

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getTruckbyid(id);
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
            const response = await API.updateTruck(post); // Ensure API call completes
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
                <InputTextField onChange={(e) => handleChange(e)} value={post.truckName} name='truckName' placeholder="truckName" />
                <Button onClick={() => updateBlogPost()} variant="contained" color="primary">Update</Button>
            </StyledFormControl>

            
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.modelname || ""}
                name="modelname"
                label='Enter modelname'
            />
            {/* <InputTextField
                onChange={(e) => handleChange(e)} 
                value={post.tital || ""}
                name="tital"
                placeholder="tital"
            /> */}
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.discription || ""}
                name="discription"
                label='Enter discription'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.modelYear || ""}
                name="modelYear"
                label='Enter modelYear'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.modelCapacity || ""}
                name="modelCapacity"
                label='Enter modelCapacity'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.licensedriver || ""}
                name="licensedriver"
                label='Enter licensedriver'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.plateno || ""}
                name="plateno"
                label='Enter plateno'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.royalty || ""}
                name="royalty"
                label='Enter royalty'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.truckOwner || ""}
                name="truckOwner"
                label='Enter truckOwner'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.tyersNumbers || ""}
                name="tyersNumbers"
                label='Enter tyersNumbers'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.engineNum || ""}
                name="engineNum"
                label='Enter engineNum'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.permite || ""}
                name="permite"
                label='Enter permite'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.secisNum || ""}
                name="secisNum"
                label='Enter secisNum'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.insurenceNum || ""}
                name="insurenceNum"
                label='Enter insurenceNum'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.registerNum || ""}
                name="registerNum"
                label='Enter registerNum'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.lastdriver || ""}
                name="lastdriver"
                label='Enter lastdriver'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.lastsite || ""}
                name="lastsite"
                label='Enter lastsite'
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
                value={post.maintainenseAvg || ""}
                name="maintainenseAvg"
                label='Enter maintainenseAvg'
            />
            <TextField variant="standard"
                onChange={(e) => handleChange(e)} 
                value={post.maintainenseStatus || ""}
                name="maintainenseStatus"
                label='Enter maintainenseStatus'
            />
        </Container>
    )
}

export default UpdateTruck;