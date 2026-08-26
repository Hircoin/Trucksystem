import React, { useState, useEffect, useContext, useRef } from 'react';

import { TextField, styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

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

const EditTextField = styled(TextField)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;



const CreateShipment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    
    const [file, setFile] = useState(null);
    const { account } = useContext(DataContext);
    const flourId = searchParams.get("flore");
    const propertyId = searchParams.get("market");
    const [post, setPost] = useState({
        renterName: '',
        propertyId: propertyId || '', // Include propertyId here
        flourId: flourId || '', // Include flourId here
        ownerName: account?.username || '',
        renterRoomNum: '',
        renterEmail: '',
        rent: '',
        waterFixedChargeUnit: '',
        rentPayTotalMonth: '',
        renterMoNum: '',
        lightFixedChargeUnit: '',
        rentUserId: '',
        password: '',
        joiningDate: '',
        deposit: '',
        business: '',
        place: '',
        village: '',
        behaviour: '',
        createdDate: new Date()
    });

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    const postRef = useRef(post);

    useEffect(() => {
        postRef.current = post;
    }, [post]);

    useEffect(() => {
        const getImage = async () => { 
            if (file) {
                try {
                    const data = new FormData();
                    data.append("name", file.name);
                    data.append("file", file);
                    
                    const response = await API.uploadFile(data);
                    postRef.current.picture = response.data;
                } catch (error) {
                    console.error("Error uploading file:", error);
                }
            }
        }
        getImage();
    }, [file]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const categoryParam = params.get('category') || 'All';
        const marketParam = params.get('market') || 'All';

        postRef.current.categories = categoryParam;
        postRef.current.market = marketParam;
        // postRef.current.categories = location.search?.split('=')[1] || 'All';
        // postRef.current.market = location.search?.split('=')[2] || 'All';
    }, [location.search]);
    
    // useEffect(() => {
    //     postRef.current.username = account.username;
    // }, [account.username]);

    const savePost = async () => {
        let response = await API.createPost(post);
        if (response.isSuccess){
            navigate('/AllRenterDetail');
        }
        
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image src={url} alt="post" />

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
                <InputTextField onChange={(e) => handleChange(e)} name='renterName' placeholder="Renter Name*" />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>

            <InputTextField onChange={handleChange} name="renterRoomNum" placeholder="Renter Room Num*" />
            <InputTextField onChange={handleChange} name="renterEmail" placeholder="Renter Email*" />
            <InputTextField onChange={handleChange} name="rent" placeholder="rent*" />
            <InputTextField onChange={handleChange} name="waterFixedChargeUnit" placeholder="Water Fixed Charge" />
            <InputTextField onChange={handleChange} name="rentPayTotalMonth" placeholder="Rent Pay Total Month" />
            <InputTextField onChange={handleChange} name="renterMoNum" placeholder="Renter Mobile Num*" />
            <InputTextField onChange={handleChange} name="lightFixedChargeUnit" placeholder="Light Fixed Charge Per Unit" />
            <InputTextField onChange={handleChange} name="rentUserId" placeholder="Rent UserId*" />
            <InputTextField onChange={handleChange} name="password" placeholder="Password*" />
            <EditTextField type="date" onChange={handleChange} name="joiningDate" placeholder="Joining Date*" />
            <InputTextField onChange={handleChange} name="deposit" placeholder="Deposit*" />
            <InputTextField onChange={handleChange} name="business" placeholder="Business" />
            <InputTextField onChange={handleChange} name="place" placeholder="Place" />
            <InputTextField onChange={handleChange} name="village" placeholder="Village" />
            <InputTextField onChange={handleChange} name="behaviour" placeholder="Behaviour" />
            
        </Container>
    )
}

export default CreateShipment;





