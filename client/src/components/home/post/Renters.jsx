import { useEffect, useState , useContext} from 'react';

import { Grid, Button, styled, Box } from '@mui/material';
import { Link,  useSearchParams ,useNavigate} from 'react-router-dom';

// import { getAllPosts } from '../../../service/api';
import { API } from '../../../service/api';

//components
import Renter from './Renter';
import { DataContext } from '../../../context/DataProvider';



const StyledButton = styled(Button)`
    display: flex;
    margin: 20px;
    align-items: center; 
    justify-content: center;
    width: 85%;
    background: #6495ed;
    text-decoration: none;
    color: inherit;

    &:hover {
        background: #4169e1; /* Slightly darker shade on hover */
    }
`;





const Renters = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('flore');
    const market = searchParams.get('market');
    const navigate = useNavigate();
    const { account } = useContext(DataContext);

useEffect(() => {
    const fetchData = async () => { 
        try {
            // Check if category is not null or undefined before making the API call
            let response;
            if (category && market) {
                response = await API.getAllPosts({ flourId: category,propertyId: market });
            } else if (category) {
                response = await API.getAllPosts({ flourId: category });
            } else if (market) {
                response = await API.getAllPosts({ propertyId: market });
            }else {
                response = await API.getAllPosts({ ownerName: account.username });
            }

            if (response.isSuccess) {
                // getPosts(response.data);
                const reversedPosts = response.data.reverse();
                getPosts(reversedPosts);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
            
            if (error.response && error.response.status === 403) {
            // If error status is 403, navigate to the /login route
            navigate("/login");
            }
        }
    }
    fetchData();
}, [category,navigate,market]);

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/viewrenter/${post._id}`}>
                            <Renter post={post} />
                        </Link>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`Details/${post._id}`}>
                            <StyledButton> Update Renter </StyledButton>
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default Renters;