
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

                response = await API.getallsitebills(query);

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