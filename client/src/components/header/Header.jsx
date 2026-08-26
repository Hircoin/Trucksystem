import React, { useState } from 'react';
import { AppBar, Toolbar, styled, Button,Menu,MenuItem } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import "./Header.css";
// https://web.stockedge.com/app/learn

const Component = styled(AppBar)`
    background: none;
    color: black;
`;

const Buttonnew = styled(Button)`
    background: #FFFFFF;
    color: green;
    text-decoration: none;
    justify-content: center;
    color: inherit;
    border-radius: 25px;
    padding: 10px 20px 10px 20px;

`;

const Linknew = styled(Link)`
    background: #FFFFFF;
    color: black;
    text-decoration: none;
    justify-content: center;
    color: inherit;
`;

const Editmenuitem = styled(MenuItem)`
    background: none;
    color: black;
    text-decoration: none;
    justify-content: center;
    color: inherit;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/login');

    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // setAnchorEl(event.currentTarget);
    // };type scrept defined
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
        
    return (
        <Component>
            <Container>
            <Buttonnew variant="contained"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        Dashboard
        </Buttonnew>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        >
                <Linknew to='/'><Editmenuitem onClick={handleClose}>HOME</Editmenuitem></Linknew>
                {/* <Linknew className="home-subscribe" to='/addDetails'><Editmenuitem onClick={handleClose}>Add details</Editmenuitem></Linknew> */}
                <Linknew className="home-subscribe" to='/MyProperty'><Editmenuitem onClick={handleClose}>My Shipment</Editmenuitem></Linknew>
                <Linknew className="home-subscribe" to='/ReportGenerate'><Editmenuitem onClick={handleClose}>Report Generate</Editmenuitem></Linknew> 
                <Linknew className="home-subscribe" to='/Mytruck'><Editmenuitem onClick={handleClose}>My Truck</Editmenuitem></Linknew>
                <Linknew className="home-subscribe" to='/Mysite'><Editmenuitem onClick={handleClose}>My Sites</Editmenuitem></Linknew>           
                <Linknew className="home-subscribe" to='/Mydriver'><Editmenuitem onClick={handleClose}>My Drivers</Editmenuitem></Linknew>           
                <Linknew to='/login'><Editmenuitem onClick={handleClose}> LOGOUT</Editmenuitem></Linknew>
                
                
                </Menu>
            </Container>
        </Component>
    )
}

export default Header;