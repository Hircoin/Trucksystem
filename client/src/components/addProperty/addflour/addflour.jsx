import React, { useState, useEffect, useContext, useRef } from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { API } from '../../../service/api';
import { DataContext } from '../../../context/DataProvider';

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
    font-size: 18px;
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

const Addflour = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { propertyid } = useParams(); // Get propertyId from URL
    const { account } = useContext(DataContext);

    // Define initial state with propertyId
    const [post, setPost] = useState({
        title: '',
        propertyId: propertyid || '', // Include propertyId here
        flourName: '',
        ownerName: account?.username || '',
        lightFixedChargeUnitFlour: '',
        createdDate: new Date()
    });

    const [file, setFile] = useState(null);
    const postRef = useRef(post);

    const url = post.picture || 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

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
                    setPost(prevPost => ({ ...prevPost, picture: response.data }));
                } catch (error) {
                    console.error("Error uploading file:", error);
                }
            }
        };
        getImage();
    }, [file]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const categoryParam = params.get('category') || 'All';
        const marketParam = params.get('market') || 'All';
        setPost(prevPost => ({
            ...prevPost,
            categories: categoryParam,
            market: marketParam
        }));
    }, [location.search]);

    useEffect(() => {
        setPost(prevPost => ({
            ...prevPost,
            username: account.username
        }));
    }, [account.username]);

    const savePost = async () => {
        try {
            let response = await API.addFlore(post);
            if (response.isSuccess) {
                navigate(`/addProperty/${propertyid}`);
            }
        } catch (error) {
            console.error("Error saving post:", error);
        }
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

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
                <InputTextField onChange={handleChange} name='title' placeholder="Title" />
                <Button onClick={savePost} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>
            
            <InputTextField onChange={handleChange} name="flourName" placeholder="Flore Name*" />
            <InputTextField onChange={handleChange} name="lightFixedChargeUnitFlour" placeholder="Light Charge per Unit Property" />
        </Container>
    );
};

export default Addflour;
