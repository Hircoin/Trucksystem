import React, { useState, useEffect, useContext, useRef } from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
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

// const initialPost = {
//     title: '',
//     propertyName: '',
//     description: '',
//     state: '',
//     ownerName: '',
//     waterFixCharge: '',
//     lightFixedChargeUnitProp: '',
//     picture: '',
//     propertyFloure: '',
//     createdDate: new Date()
// };
const initialTruck = {
    truckName: '',
    modelname: '',
    discription: '',
    modelYear: '',
    modelCapacity: '',
    licensedriver: '',
    plateno: '',
    royalty: '',
    picture: '',
    tyersNumbers: '',
    engineNum: '',
    secisNum: '',
    insurenceNum: '',
    registerNum: '',
    createdDate: new Date()
};
const initialDriver = {
    driverNumber: '',
    driverNumberLicence: '',
    driverExperience: '',
    picture: '',
    driverAge: '',
    driverName: '',
    driverAdharcard: '',
    massage: '',
    drivereStatus: '',
    dryvereProfesion: '',
    drivereId: '',
    driverPassword: '',
    fixedSalery: '',
    tripSalary: '',
    createdDate: new Date()
};
const initialSite = {
    siteName: '',
    massage: '',
    structureMassage: '',
    address: '',
    siteManager: '',
    sitePerson: '',
    siteOwner: '',
    katoSite: '',
    siteManagerNum: '',
    ratePerTone: '',
    distencekm: '',
    runningTrucks: '',
    runningStatus: '',
    siteId: '',
    sitePassword: '',
    createdDate: new Date()
};

const Addassets = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { entity } = useParams();
    const { account } = useContext(DataContext);
    // const [post, setPost] = useState({
    //     ...initialPost,
    //     ownerName: account?.username || ''
    // });
    const [truck, setTruck] = useState({
        ...initialTruck,
        truckOwner: account?.username || ''
    });
    const [driver, setDriver] = useState({
        ...initialDriver,
        truckOwner: account?.username || ''
    });
    const [site, setSite] = useState({
        ...initialSite,
        truckOwner: account?.username || ''
    });
    
    const [file, setFile] = useState(null);
    // const postRef = useRef(post);
    const truckRef = useRef(truck);
    const driverRef = useRef(driver);
    const siteRef = useRef(site);

    const url = truck.picture || driver.picture || site.picture || 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    // useEffect(() => {
    //     postRef.current = post;
    // }, [post]);
    useEffect(() => {
        truckRef.current = truck;
    }, [truck]);
    useEffect(() => {
        driverRef.current = driver;
    }, [driver]);
    useEffect(() => {
        siteRef.current = site;
    }, [site]);

    //imp
    // useEffect(() => {
    //     const getImage = async () => {
    //         if (file) {
    //             try {
    //                 const data = new FormData();
    //                 data.append("name", file.name);
    //                 data.append("file", file);
    //                 const response = await API.uploadFile(data);
    //                 setPost(prevPost => ({ ...prevPost, picture: response.data }));
    //             } catch (error) {
    //                 console.error("Error uploading file:", error);
    //             }
    //         }
    //     };
    //     getImage();
    // }, [file]);

    
//imp
    // useEffect(() => {
    //     const params = new URLSearchParams(location.search);
    //     const categoryParam = params.get('category') || 'All';
    //     const marketParam = params.get('market') || 'All';
    //     setPost(prevPost => ({
    //         ...prevPost,
    //         categories: categoryParam,
    //         market: marketParam
    //     }));
    // }, [location.search]);

    // useEffect(() => {
    //     setPost(prevPost => ({
    //         ...prevPost,
    //         username: account.username
    //     }));
    // }, [account.username]);

    // const savePost = async () => {
    //     try {
    //         let response = await API.addAssets(post);
    //         if (response.isSuccess) {
    //             navigate('/addProperty');
    //         }
    //     } catch (error) {
    //         console.error("Error saving post:", error);
    //     }
    // };
    const saveTruck = async () => {
        try {
            let response = await API.addTrucks(truck);
            if (response.isSuccess) {
                navigate('/addDetails');
            }
        } catch (error) {
            console.error("Error saving post:", error);
        }
    };

    const saveDriver = async () => {
        try {
            let response = await API.addDriver(driver);
            if (response.isSuccess) {
                navigate('/addDetails');
            }
        } catch (error) {
            console.error("Error saving post:", error);
        }
    };

    const saveSite = async () => {
        try {
            let response = await API.addSite(site);
            if (response.isSuccess) {
                navigate('/addDetails');
            }
        } catch (error) {
            console.error("Error saving post:", error);
        }
    };

    // const handleChange = (e) => {
    //     setPost({ ...post, [e.target.name]: e.target.value });
    // };

    const handleChange = (entity, setEntity) => (e) => {
        setEntity({ ...entity, [e.target.name]: e.target.value });
    };
    // <div>
    //         {/* Post Inputs */}
    //         <input
    //             name="title"
    //             value={post.title || ""}
    //             onChange={handleChange(post, setPost)}
    //             placeholder="Post Title"
    //         />

    //         {/* Truck Inputs */}
    //         <input
    //             name="model"
    //             value={truck.model || ""}
    //             onChange={handleChange(truck, setTruck)}
    //             placeholder="Truck Model"
    //         />

    //         {/* Driver Inputs */}
    //         <input
    //             name="name"
    //             value={driver.name || ""}
    //             onChange={handleChange(driver, setDriver)}
    //             placeholder="Driver Name"
    //         />

    //         {/* Site Inputs */}
    //         <input
    //             name="location"
    //             value={site.location || ""}
    //             onChange={handleChange(site, setSite)}
    //             placeholder="Site Location"
    //         />
    //     </div>
return (
<>
    {entity === 'Truck' && (
        <Container>
            <Image src={url} alt="post" />
            <p>Current Entity: {entity}</p>
            {/* {entity === "truck" && <p>Current model number and schedule</p>}
            {entity === "driver" && <p>Driver license and time managed</p>}
            {entity === "site" && <p>Timing of open and close</p>} */}
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    // onChange={handleChange(truck, setTruck)}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField onChange={handleChange(truck, setTruck)} name='discription' placeholder="Title" />
                {/* <Button onClick={savePost} variant="contained" color="primary">Publish</Button> */}
                {entity === 'Truck' && (
                    <Button onClick={saveTruck} variant="contained" color="primary">
                        Publish
                    </Button>
                )}
                {/* {entity === 'Driver' && (
                    <Button onClick={saveDriver} variant="contained" color="primary">
                        Publish
                    </Button>
                )}
                {entity === 'Site' && (
                    <Button onClick={saveSite} variant="contained" color="primary">
                        Publish
                    </Button>
                )} */}
            </StyledFormControl>
            {/* <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={handleChange} 
            /> */}
            <InputTextField onChange={handleChange(truck, setTruck)} name="truckName" placeholder="Truck Name*" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="modelname" placeholder="Model Name" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="modelYear" placeholder="Model Year" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="modelCapacity" placeholder="Model Capacity" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="licensedriver" placeholder="License Driver" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="plateno" placeholder="Truck Num" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="royalty" placeholder="Royalty" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="tyersNumbers" placeholder="Tyers Numbers" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="engineNum" placeholder="Engine Num" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="secisNum" placeholder="Secis Num" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="insurenceNum" placeholder="Insurence Num" />
            <InputTextField onChange={handleChange(truck, setTruck)} name="registerNum" placeholder="Register Num" />
        </Container>
    )}
    {entity === 'Driver' && (
        <Container>
            <Image src={url} alt="post" />
            <p>Current Entity: {entity}</p>
            {/* {entity === "truck" && <p>Current model number and schedule</p>}
            {entity === "driver" && <p>Driver license and time managed</p>}
            {entity === "site" && <p>Timing of open and close</p>} */}
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
                <InputTextField onChange={handleChange(driver, setDriver)} name='massage' placeholder="Massage" />
                {/* <Button onClick={savePost} variant="contained" color="primary">Publish</Button> */}
                {entity === 'Driver' && (
                    <Button onClick={saveDriver} variant="contained" color="primary">
                        Publish
                    </Button>
                )}
                {/* {entity === 'Driver' && (
                    <Button onClick={saveDriver} variant="contained" color="primary">
                        Publish
                    </Button>
                )}
                {entity === 'Site' && (
                    <Button onClick={saveSite} variant="contained" color="primary">
                        Publish
                    </Button>
                )} */}
            </StyledFormControl>
            {/* <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={handleChange} 
            /> */}
            <InputTextField onChange={handleChange(driver, setDriver)} name="driverNumber" placeholder="Driver Number*" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="driverNumberLicence" placeholder="Driver Number Licence" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="driverExperience" placeholder="Driver Experience" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="driverAge" placeholder="Driver Age" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="driverName" placeholder="Driver Name" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="driverAdharcard" placeholder="Driver Adharcard" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="drivereStatus" placeholder="Drivere Status" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="dryvereProfesion" placeholder="Dryvere Profesion" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="drivereId" placeholder="Drivere Id" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="driverPassword" placeholder="Driver Password" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="fixedSalery" placeholder="Fixed Salery" />
            <InputTextField onChange={handleChange(driver, setDriver)} name="tripSalary" placeholder="Trip Salary" />
            
        </Container>
    )}
    {entity === 'Site' && (
        <Container>
            <Image src={url} alt="post" />
            <p>Current Entity: {entity}</p>
            {/* {entity === "truck" && <p>Current model number and schedule</p>}
            {entity === "driver" && <p>Driver license and time managed</p>}
            {entity === "site" && <p>Timing of open and close</p>} */}
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
                <InputTextField onChange={handleChange(site, setSite)} name='massage' placeholder="Massage" />
                {/* <Button onClick={savePost} variant="contained" color="primary">Publish</Button> */}
                {entity === 'Site' && (
                    <Button onClick={saveSite} variant="contained" color="primary">
                        Publish
                    </Button>
                )}
                {/* {entity === 'Driver' && (
                    <Button onClick={saveDriver} variant="contained" color="primary">
                        Publish
                    </Button>
                )}
                {entity === 'Site' && (
                    <Button onClick={saveSite} variant="contained" color="primary">
                        Publish
                    </Button>
                )} */}
            </StyledFormControl>
            {/* <Textarea
                rowsMin={5}
                placeholder="Tell your structure..."
                name='structureMassage'
                onChange={handleChange} 
            /> */}
            <InputTextField onChange={handleChange(site, setSite)} name="siteName" placeholder="Site Name*" />
            <InputTextField onChange={handleChange(site, setSite)} name="address" placeholder="Address" />
            <InputTextField onChange={handleChange(site, setSite)} name="siteManager" placeholder="Site Manager" />
            <InputTextField onChange={handleChange(site, setSite)} name="sitePerson" placeholder="Site Person" />
            <InputTextField onChange={handleChange(site, setSite)} name="siteOwner" placeholder="Site Owner" />
            <InputTextField onChange={handleChange(site, setSite)} name="katoSite" placeholder="Kato Site" />
            <InputTextField onChange={handleChange(site, setSite)} name="siteManagerNum" placeholder="Site Manager Num" />
            <InputTextField onChange={handleChange(site, setSite)} name="ratePerTone" placeholder="Rate Per Tone in Site" />
            <InputTextField onChange={handleChange(site, setSite)} name="distencekm" placeholder="Distence (km)" />
            <InputTextField onChange={handleChange(site, setSite)} name="runningTrucks" placeholder="Running Trucks" />
            <InputTextField onChange={handleChange(site, setSite)} name="runningStatus" placeholder="Running Status" />
            <InputTextField onChange={handleChange(site, setSite)} name="siteId" placeholder="Site Id" />
            <InputTextField onChange={handleChange(site, setSite)} name="sitePassword" placeholder="Site Password" />
        </Container>
    )}
</>
);
};

export default Addassets;
