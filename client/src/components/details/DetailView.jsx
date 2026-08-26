    import { useState, useEffect, useContext } from "react";

    import { Box, Typography, styled } from "@mui/material";
    import { Delete, Edit } from "@mui/icons-material";
    import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

    import { API } from "../../service/api";

    import { DataContext } from "../../context/DataProvider";

    // components
    import Comments from "./comments/Comments";

    const Container = styled(Box)(({ theme }) => ({
    margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
        margin: 0,
    },
    }));

    const Image = styled("img")({
    width: "100%",
    height: "50vh",
    objectFit: "cover",
    });

    const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
    `;

    const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
    `;

    const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
    word-break: break-word;
    `;

    const Author = styled(Box)(({ theme }) => ({
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
        display: "block",
    },
    }));

    const Description = styled(Typography)`
    word-break: break-word;
    `;

    const DetailView = () => {
    const url =
        "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);
    const [searchParams] = useSearchParams();
    const entity = searchParams.get("entity"); // Get 'entity' from query params

    const navigate = useNavigate();
    const { id } = useParams();

    // useEffect(() => {
    //     const fetchData = async () => {
    //     try {
    //         let response = await API.getPostById(_id);
    //         if (response.isSuccess) {
    //         setPost(response.data);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching post data:", error);
    //         if (error.response && error.response.status === 403) {
    //         // If error status is 403, navigate to the /login route
    //         navigate("/login");
    //         }
    //     }
    //     };
    //     fetchData();
    // }, [navigate]);

    useEffect(() => {
        const fetchData = async () => {
            if (!entity || !id) {
                console.log("Entity or account is missing, skipping API call.");
                return; // Prevent API call if entity or username is missing
            }
    
            console.log(`Fetching data for entity: ${entity} and id: ${id}`);
    
            try {
                let response;
    
                switch (entity) {
                    case "Truck":
                        response = await API.getTruckbyid(id);
                        break;
                    case "Driver":
                        response = await API.getDriverbyid(id);
                        break;
                    case "Site":
                        response = await API.getSitebyid(id);
                        break;
                    default:
                        return;
                }
                
                // Check if the response is successful and update the state
                if (response?.isSuccess) {
                    setPost(response.data[0]);
                } else {
                    console.log("API response was not successful.");
                }
            } catch (error) {
                console.error("Error fetching property data:", error);
    
                if (error.response?.status === 403) {
                    navigate("/login");
                }
            }
        };
    
        // Call fetchData whenever the entity or account.username changes
        fetchData();
    }, [entity, id]); // Dependency on entity and account.username

    const deleteBlog = async () => {
        await API.deleteProperty({ id: post._id, entity:entity });
        navigate("/AllRenterDetail");
    };

    const formattedDate = (dateString) => {
        if (!dateString) return ""; // Return empty string if date is missing
        return new Date(dateString).toLocaleDateString("en-GB", {  
            day: "numeric",  
            month: "short",  
            year: "numeric"  
        });
    };

    return (
        <Container>
        <Image src={post.picture || url} alt="post" />
        <Box style={{ float: "right" }}>
            {account.username === post.truckOwner && (
            <>
                <Link to={`/update/${entity}/${post._id}`}>
                <EditIcon color="primary" />
                </Link>
                <DeleteIcon onClick={() => deleteBlog()} color="error" />
            </>
            )}
        </Box>
        <Heading>{post.title}</Heading>

        <Author>
            <Link
            to={`/?username=${post.username}`}
            style={{ textDecoration: "none", color: "inherit" }}
            >
            {/* add symbol edit,delet */}
            </Link>
            <Typography style={{ marginLeft: "auto" }}>
            {new Date(post.createdDate).toDateString()}
            </Typography>
        </Author>
            <p>entity : {entity} </p>
            <p>id : {id} </p>
            {post.truckName && <Description>Truck Name : {post.truckName}</Description>}
            {post.modelname && <Description>modelname Name : {post.modelname}</Description>}
            {post.discription && <Description>About Truck : {post.discription}</Description>}
            {post.modelYear && <Description>modelYear : {post.modelYear}</Description>}
            {post.modelCapacity && <Description>modelCapacity : {post.modelCapacity}</Description>}
            {post.licensedriver && <Description>licensedriver: {post.licensedriver}</Description>}
            {post.plateno && <Description>plateno : {post.plateno}</Description>}
            {post.royalty && <Description>royalty : {post.royalty}</Description>}
            {post.truckOwner && <Description>truckOwner : {post.truckOwner}</Description>}
            {post.tyersNumbers && <Description>tyersNumbers: {post.tyersNumbers}</Description>}
            {post.engineNum && <Description>engineNum: {post.engineNum}</Description>}
            {post.permite && <Description>permite : {post.permite}</Description>}
            {post.secisNum && <Description>secisNum: {post.secisNum}</Description>}
            {post.insurenceNum && <Description>insurenceNum : {post.insurenceNum}</Description>}
            {post.registerNum && <Description>registerNum : {post.registerNum}</Description>}
            {post.lastdriver && <Description>lastdriver : {post.lastdriver}</Description>}
            {/* {post.lastRent && post.lastIncreaseRentDate && (
                <Description>Last Rent : {post.lastRent} before {post.lastIncreaseRentDate} date</Description>
            )} */}
            {post.lastsite && <Description>lastsite: {post.lastsite}</Description>}
            {post.performanceShipment && <Description>performanceShipment : {post.performanceShipment}</Description>}
            {post.fuelAvg && <Description>fuelAvg : {post.fuelAvg}</Description>}
            {post.profitAvg && <Description>profitAvg: {post.profitAvg}</Description>}
            {post.maintainenseAvg && <Description>maintainenseAvg : {post.maintainenseAvg}</Description>}
            {post.maintainenseStatus && <Description>maintainenseStatus : {post.maintainenseStatus}</Description>}
            {post.tyersDate && new Date(post.createdDate).toDateString() !== new Date(post.tyersDate).toDateString() && (<Description>tyersDate Date: {formattedDate(post.tyersDate)}</Description>)}
            {post.insuranceDate && new Date(post.createdDate).toDateString() !== new Date(post.insuranceDate).toDateString() &&  (<Description>insuranceDate Date: {formattedDate(post.insuranceDate)}</Description>)}
            {post.insurancelastDate && new Date(post.createdDate).toDateString() !== new Date(post.insurancelastDate).toDateString() && (<Description>insurancelastDate Date: {formattedDate(post.insurancelastDate)}</Description>)}
            {post.enginelastdate && new Date(post.createdDate).toDateString() !== new Date(post.enginelastdate).toDateString() && (<Description>enginelastdate Date: {formattedDate(post.enginelastdate)}</Description>)}
            {post.permitelastDate && new Date(post.createdDate).toDateString() !== new Date(post.permitelastDate).toDateString() && (<Description>permitelastDate Date: {formattedDate(post.permitelastDate)}</Description>)}
            {post.tyerlastDate && new Date(post.createdDate).toDateString() !== new Date(post.tyerlastDate).toDateString() && (<Description>tyerlastDate Date: {formattedDate(post.tyerlastDate)}</Description>)}
            {post.puclastDate && new Date(post.createdDate).toDateString() !== new Date(post.puclastDate).toDateString() && (<Description>puclastDate Date: {formattedDate(post.puclastDate)}</Description>)}
            {post.greecelastDate && new Date(post.createdDate).toDateString() !== new Date(post.greecelastDate).toDateString() && (<Description>greecelastDate Date: {formattedDate(post.greecelastDate)}</Description>)}
            {post.serviceDate && new Date(post.createdDate).toDateString() !== new Date(post.serviceDate).toDateString() && (<Description>serviceDate Date: {formattedDate(post.serviceDate)}</Description>)}
            {post.GPSlastDate && new Date(post.createdDate).toDateString() !== new Date(post.GPSlastDate).toDateString() && (<Description>GPSlastDate Date: {formattedDate(post.GPSlastDate)}</Description>)}
            {post.batterywaterlastDate && new Date(post.createdDate).toDateString() !== new Date(post.batterywaterlastDate).toDateString() && (<Description>batterywaterlastDate Date: {formattedDate(post.batterywaterlastDate)}</Description>)}
            {post.lasttripDate && new Date(post.createdDate).toDateString() !== new Date(post.lasttripDate).toDateString() && (<Description>lasttripDate Date: {formattedDate(post.lasttripDate)}</Description>)}
            
            {post.driverNumber && <Description>driverNumber : {post.driverNumber}</Description>}
            {post.driverNumberLicence && <Description>driverNumberLicence : {post.driverNumberLicence}</Description>}
            {post.driverExperience && <Description>driverExperience: {post.driverExperience}</Description>}
            {post.driverAge && <Description>driverAge : {post.driverAge}</Description>}
            {post.driverName && <Description>driverName : {post.driverName}</Description>}
            {post.driverAdharcard && <Description>driverAdharcard : {post.driverAdharcard}</Description>}
            {post.massage && <Description>massage : {post.massage}</Description>}
            {post.drivereStatus && <Description>drivereStatus: {post.drivereStatus}</Description>}
            {post.dryvereProfesion && <Description>dryvereProfesion : {post.dryvereProfesion}</Description>}
            {post.drivereFree && <Description>drivereFree : {post.drivereFree}</Description>}
            {post.drivereOutstandingPayment && <Description>drivereOutstandingPayment : {post.drivereOutstandingPayment}</Description>}
            {post.paymentAmount && <Description>paymentAmount: {post.paymentAmount}</Description>}
            {post.lasttruck && <Description>lasttruck: {post.lasttruck}</Description>}
            {post.drivereId && <Description>drivereId : {post.drivereId}</Description>}
            {post.driverPassword && <Description>driverPassword: {post.driverPassword}</Description>}
            {post.driverVeryfyed && <Description>driverVeryfyed : {post.driverVeryfyed}</Description>}
            {post.performanceShipment && <Description>performanceShipment : {post.performanceShipment}</Description>}
            {post.fuelAvg && <Description>fuelAvg : {post.fuelAvg}</Description>}
            {post.profitAvg && <Description>profitAvg: {post.profitAvg}</Description>}
            {post.fixedSalery && <Description>fixedSalery : {post.fixedSalery}</Description>}
            {post.tripSalary && <Description>tripSalary : {post.tripSalary}</Description>}
            {post.maintainenseAvg && <Description>maintainenseAvg: {post.maintainenseAvg}</Description>}
            {post.startingdatepayment && new Date(post.createdDate).toDateString() !== new Date(post.startingdatepayment).toDateString() && (<Description>startingdatepayment Date: {formattedDate(post.startingdatepayment)}</Description>)}
            {post.endingdatepayment && new Date(post.createdDate).toDateString() !== new Date(post.endingdatepayment).toDateString() &&  (<Description>endingdatepayment Date: {formattedDate(post.endingdatepayment)}</Description>)}
            
            {post.siteName && <Description>siteName : {post.siteName}</Description>}
            {post.massage && <Description>massage : {post.massage}</Description>}
            {post.structureMassage && <Description>structureMassage: {post.structureMassage}</Description>}
            {post.address && <Description>address : {post.address}</Description>}
            {post.siteManager && <Description>siteManager : {post.siteManager}</Description>}
            {post.sitePerson && <Description>sitePerson : {post.sitePerson}</Description>}
            {post.siteOwner && <Description>siteOwner : {post.siteOwner}</Description>}
            {post.katoSite && <Description>katoSite: {post.katoSite}</Description>}
            {post.siteManagerNum && <Description>siteManagerNum : {post.siteManagerNum}</Description>}
            {post.ratePerTone && <Description>ratePerTone : {post.ratePerTone}</Description>}
            {post.distencekm && <Description>distencekm : {post.distencekm}</Description>}
            {post.runningTrucks && <Description>runningTrucks: {post.runningTrucks}</Description>}
            {post.runningStatus && <Description>runningStatus: {post.runningStatus}</Description>}
            {post.paymentOutstending && <Description>paymentOutstending : {post.paymentOutstending}</Description>}
            {post.paymentAmount && <Description>paymentAmount: {post.paymentAmount}</Description>}
            {post.siteId && <Description>siteId : {post.siteId}</Description>}
            {post.sitePassword && <Description>sitePassword : {post.sitePassword}</Description>}
            {post.siteverifyes && <Description>siteverifyes : {post.siteverifyes}</Description>}
            {post.siteProduct && <Description>siteProduct: {post.siteProduct}</Description>}
            {post.siteStatus && <Description>siteStatus : {post.siteStatus}</Description>}
            {post.workingStatus && <Description>workingStatus : {post.workingStatus}</Description>}
            {post.lastdriver && <Description>lastdriver: {post.lastdriver}</Description>}
            {post.lasttruck && <Description>lasttruck : {post.lasttruck}</Description>}
            {post.paymentstartingDate && new Date(post.createdDate).toDateString() !== new Date(post.paymentstartingDate).toDateString() && (<Description>paymentstartingDate Date: {formattedDate(post.paymentstartingDate)}</Description>)}
            {post.paymentendingDate && new Date(post.createdDate).toDateString() !== new Date(post.paymentendingDate).toDateString() &&  (<Description>paymentendingDate Date: {formattedDate(post.paymentendingDate)}</Description>)}
            {post.paymentDate && new Date(post.createdDate).toDateString() !== new Date(post.paymentDate).toDateString() && (<Description>paymentDate Date: {formattedDate(post.paymentDate)}</Description>)}
            {post.lasttripDate && new Date(post.createdDate).toDateString() !== new Date(post.lasttripDate).toDateString() && (<Description>lasttripDate Date: {formattedDate(post.lasttripDate)}</Description>)}
            
            {/* {post.performanceShipment && <Description>performanceShipment : {post.performanceShipment}</Description>}
            {post.fuelAvg && <Description>fuelAvg : {post.fuelAvg}</Description>}
            {post.lastsite && <Description>lastsite: {post.lastsite}</Description>}
            {post.fuelAvg && <Description>fuelAvg : {post.fuelAvg}</Description>}
            {post.lastsite && <Description>lastsite: {post.lastsite}</Description>}
            {post.performanceShipment && <Description>performanceShipment : {post.performanceShipment}</Description>}
            {post.fuelAvg && <Description>fuelAvg : {post.fuelAvg}</Description>} */}
        <Comments post={post} />
        </Container>
    );
    };

    export default DetailView;
