// import { useEffect, useState, useContext } from 'react';

// import {TableContainer,Table,TableHead,TableRow,TableCell,TableBody, Paper, Grid, Box } from '@mui/material';
// import { Link,  useSearchParams ,useNavigate} from 'react-router-dom';

// // import { getAllPosts } from '../../../service/api';
// import { API } from '../../service/api';

// //components
// import Position from './Position';
// import { DataContext } from "../../context/DataProvider";


// const Positions = () => {
//     const [posts, getPosts] = useState([]);
    
//     const [searchParams] = useSearchParams();
//     const category = searchParams.get('category');
//     const market = searchParams.get('market');
//     const Truckid = searchParams.get('Truckid');
//     const Driverid = searchParams.get('Driverid');
//     const Siteid = searchParams.get('Siteid');
//     const navigate = useNavigate();
//     const { account } = useContext(DataContext);



// useEffect(() => {
//     const fetchData = async () => { 
//         try {
//             // Check if category is not null or undefined before making the API call
//             let response;
//             if (category && market && Truckid) {
//                 response = await API.getalldriverbills({ ownerName: account.username,market: market,truckId:Truckid });
            
//             } else if (category && market && Driverid) {
//                 response = await API.getalldriverbills({ ownerName: account.username,market: market,drivereId:Driverid });
            
//             }else if (category && market && Siteid) {
//                 response = await API.getalldriverbills({ ownerName: account.username,market: market ,siteId:Siteid});
            
//             }else if (category && market) {
//                 response = await API.getalldriverbills({ ownerName: account.username,market: market });
            
//             }  else if (market) {
//                 response = await API.getalldriverbills({ ownerName: account.username,market: market });
//             }else {
//                 response = await API.getalldriverbills({ ownerName: account.username });
//             }

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
// }, [category,navigate,market,Truckid,Driverid,Siteid]);

//     return (
        
//         <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Truck Number</TableCell>
//                         <TableCell>Created Date</TableCell>
//                         <TableCell>Driver Name</TableCell>
//                         <TableCell>Product</TableCell>
//                         <TableCell>How Much Load</TableCell>
//                         <TableCell>Rate Per Tone</TableCell>
//                         <TableCell>Driver Bill</TableCell>
//                         <TableCell>Payment Date</TableCell>
                        
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {Array.isArray(posts) && posts.length > 0 ? (
//                         posts.map((post) => (
//                             <TableRow key={post._id} hover>
//                                 <Position post={post} />
//                             </TableRow>
//                         ))
//                     ) : (
//                         <TableRow>
//                             <TableCell colSpan={14} style={{ textAlign: 'center', color: '#878787', fontSize: 18 }}>
//                                 No data is available for selected category
//                             </TableCell>
//                         </TableRow>
//                     )}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     )
// }

// export default Positions;

import { useEffect, useState, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Position from './Position'; // This should be your reusable table wrapper

const Positions = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const market = searchParams.get('market');
    const Truckid = searchParams.get('Truckid');
    const Driverid = searchParams.get('Driverid');
    const Siteid = searchParams.get('Siteid');
    const navigate = useNavigate();
    const { account } = useContext(DataContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                const query = { ownerName: account.username };

                if (market) query.market = market;
                if (Truckid) query.truckId = Truckid;
                if (Driverid) query.drivereId = Driverid;
                if (Siteid) query.siteId = Siteid;

                response = await API.getalldriverbills(query);

                if (response.isSuccess) {
                    const reversedPosts = response.data.reverse();
                    setPosts(reversedPosts);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
                if (error.response?.status === 403) navigate("/login");
            }
        };

        fetchData();
    }, [category, market, Truckid, Driverid, Siteid, navigate, account.username]);

    return (
        <Paper sx={{ marginTop: '20px' }}>
            <Position posts={posts} />
        </Paper>
    );
};

export default Positions;
