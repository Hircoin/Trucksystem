import { useEffect, useState, useContext } from 'react';

import { Grid, Box } from '@mui/material';
import { Link,  useSearchParams ,useNavigate} from 'react-router-dom';

// import { getAllPosts } from '../../../service/api';
import { API } from '../../service/api';

//components
import Position from './Position';
import { DataContext } from "../../context/DataProvider";


const Positions = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const market = searchParams.get('market');
    const Truckid = searchParams.get('Truckid');
    const Driverid = searchParams.get('Driverid');
    const Siteid = searchParams.get('Siteid');
    const navigate = useNavigate();
    const { account } = useContext(DataContext);

// useEffect(() => {
//     const fetchData = async () => { 
//         try {
//             // Check if category is not null or undefined before making the API call
//             let response;
//             const params = { userid: account.username };

//             // Add category and market to params if they are defined
//             if (category) {
//                 params.category = category;
//             }
//             if (market) {
//                 params.market = market;
//             }

//             response = await API.getAllPosition(params);

//             if (response.isSuccess) {
//                 // getPosts(response.data);
//                 const reversedPosts = response.data.reverse();
//                 getPosts(reversedPosts);
//             }
//         } catch (error) {
//             console.error("Error fetching posts:", error);
            
//             if (error.response && error.response.status === 403) {
//             // If error status is 403, navigate to the /login route
//             navigate("/login");
//             }
//         }
//     }
//     fetchData();
// }, [category,navigate,market]);


useEffect(() => {
    const fetchData = async () => { 
        try {
            // Check if category is not null or undefined before making the API call
            let response;
            if (category && market && Truckid) {
                response = await API.getAllPosts({ ownerName: account.username,market: market,truckId:Truckid });
            
            } else if (category && market && Driverid) {
                response = await API.getAllPosts({ ownerName: account.username,market: market,drivereId:Driverid });
            
            }else if (category && market && Siteid) {
                response = await API.getAllPosts({ ownerName: account.username,market: market ,siteId:Siteid});
            
            }else if (category && market) {
                response = await API.getAllPosts({ ownerName: account.username,market: market });
            
            }  else if (market) {
                response = await API.getAllPosts({ ownerName: account.username,market: market });
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
}, [category,navigate,market,Truckid,Driverid,Siteid]);

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item xl={6} lg={6} sm={6} xs={12}>
                        <Link to={`/shipment/details/${post._id}`} style={{textDecoration: 'none', color: 'inherit'}} >
                            <Position post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default Positions;