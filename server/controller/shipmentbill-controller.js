
import Shipment from '../model/shipment.js';
import Truck from '../model/truck.js';
import Driver from '../model/driver.js';
import Sitebill from '../model/sitebill.js';
import Driverbill from '../model/driverbill.js';

export const createShipmentBill = async (req, res) => {
    try {
        const {
            whereLoad,
            tonesLoad,
            ratePerTone,
            disel,
            product,
            createdDate,
            truckOwner,
            truckId,
            drivereId,
            // other fields
        } = req.body;

        // Find the truck details by truckId and truckOwner
        const truck = await Truck.findOne({ _id:truckId, truckOwner});

        if (!truck) {
            return res.status(404).json({
                message: 'Truck not found with the given truckId and truckOwner'
            });
        }

        // Find the driver details by drivereId and truckOwner
        const driver = await Driver.findOne({ _id:drivereId, truckOwner });

        if (!driver) {
            return res.status(404).json({
                message: 'Driver not found with the given drivereId and truckOwner'
            });
        }

        // Create a new rent bill document with data from the Truck and Driver collections
        const newRentBill = new Shipment({
            trucknumber: truck.plateno, // Make sure 'plateno' exists in the Truck model
            driverename: driver.driverName, // Make sure 'driverName' exists in the Driver model
            whereLoad,
            tonesLoad,
            ratePerTone,
            drivereId,
            truckId,
            // siteId,
            disel,
            // // Include other fields that you need (tripSalary, tole, etc.)
            // tital,
            product,
            truckOwner,
            // shipmentStatus,
            // siteKato,
            // siteCharge,
            // siteRate,
            // paymentOutstending,
            // totalBill,
            // dryverOutstendingPayment,
            // unloadDate,
            // warning,
            createdDate,
        });

        // Save the rent bill document to the database
        const savedRentBill = await newRentBill.save();

        // Respond with success message and saved document
        res.status(201).json({
            message: 'Shipmentbill created successfully',
            data: savedRentBill
        });

    } catch (error) {
        console.error('Error saving shipment bill:', error.message);
        res.status(500).json({
            message: 'Failed to create Shipment bill',
            error: error.message
        });
    }
};

    
export const getShipmentbyowner = async (req, res) => {
    try {
        const { truckOwner } = req.params;

        const shipments = await Shipment.find({ truckOwner, shipmentStatus: "start" });

        if (!shipments.length) {
            return res.status(404).json({ message: "No shipments found for this owner with status 'start'." });
        }

        res.status(200).json(shipments);
    } catch (error) {
        console.error("Error fetching shipments:", error);
        res.status(500).json({ message: "Server error while fetching shipments." });
    }
};


export const getShipmentbyid = async (request, response) => {
    try {
        // Fetch all properties with the given ownerName
        const properties = await Shipment.find({ _id: request.params._id });
        
        // Return the found properties in the response
        response.status(200).json(properties);
    } catch (error) {
        response.status(500).json({ message: "Error fetching Trucks", error });
    }
};



// export const updateShipment = async (request, response) => {
//     try {
//         const shipment = await Shipment.findById(request.params.id);

//         if (!shipment) {
//             response.status(404).json({ msg: 'Post not found' })
//         }
        
//         await Shipment.findByIdAndUpdate( request.params.id, { $set: request.body })

//         response.status(200).json('Shipment updated successfully');
//     } catch (error) {
//         response.status(500).json(error);
//     }
// }
export const updateShipment = async (request, response) => {
    try {
        const shipment = await Shipment.findById(request.params.id);

        if (!shipment) {
            return response.status(404).json({ msg: 'Shipment not found' });
        }

        // Update shipment document with incoming request body
        await Shipment.findByIdAndUpdate(request.params.id, { $set: request.body });

        // Apply new values to local shipment object
        Object.assign(shipment, request.body);

        let siteBillCreated = false;
        let driverBillCreated = false;

        // Check if site bill needs to be created or updated
        if (
            request.body.shipmentStatus !== 'start' &&
            request.body.sitePending === 'Jama'
        ) {
            shipment.sitetoSendBill = 'yes';
            await shipment.save();

            const allowedKeys = Object.keys(Sitebill.schema.obj);
            const sitebillData = {};

            for (const key of allowedKeys) {
                if (shipment[key] !== undefined) {
                    sitebillData[key] = shipment[key];
                }
            }

            sitebillData.shipmentId = shipment._id;

            // Check if a Sitebill already exists
            const existingSiteBill = await Sitebill.findOne({ shipmentId: shipment._id });

            if (existingSiteBill) {
                // Update the existing site bill
                await Sitebill.findByIdAndUpdate(existingSiteBill._id, { $set: sitebillData });
            } else {
                // Create a new site bill
                const sitebill = new Sitebill(sitebillData);
                await sitebill.save();
            }

            siteBillCreated = true;
        }

        // Check if driver bill needs to be created or updated
        if (
            request.body.shipmentStatus !== 'start' &&
            request.body.driverPending === 'Jama'
        ) {
            shipment.drivertoSendBill = 'yes';
            await shipment.save();

            const allowedKeys = Object.keys(Driverbill.schema.obj);
            const driverbillData = {};

            for (const key of allowedKeys) {
                if (shipment[key] !== undefined) {
                    driverbillData[key] = shipment[key];
                }
            }

            driverbillData.shipmentId = shipment._id;

            // Check if a Driverbill already exists
            const existingDriverBill = await Driverbill.findOne({ shipmentId: shipment._id });

            if (existingDriverBill) {
                // Update the existing driver bill
                await Driverbill.findByIdAndUpdate(existingDriverBill._id, { $set: driverbillData });
            } else {
                // Create a new driver bill
                const driverbill = new Driverbill(driverbillData);
                await driverbill.save();
            }

            driverBillCreated = true;
        }

        // Final response
        if (siteBillCreated && driverBillCreated) {
            return response.status(200).json('Site and Driver bills saved/updated successfully and shipment updated');
        } else if (siteBillCreated) {
            return response.status(200).json('Site bill saved/updated successfully and shipment updated');
        } else if (driverBillCreated) {
            return response.status(200).json('Driver bill saved/updated successfully and shipment updated');
        } else {
            return response.status(200).json('Shipment updated successfully');
        }

    } catch (error) {
        console.error(error);
        response.status(500).json({ msg: 'Server error', error });
    }
};



export const deleteShipment = async (request, response) => {
    try {
        const post = await Shipment.findById(request.params.id);
        
        await Shipment.findByIdAndDelete(post._id)

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

// export const updateRentbill = async (request, response) => {
//     try {
//         const post = await Rentbill.findById(request.params.id);

//         if (!post) {
//             response.status(404).json({ msg: 'Post not found' })
//         }
        
//         await Rentbill.findByIdAndUpdate( request.params.id, { $set: request.body })

//         response.status(200).json('post updated successfully');
//     } catch (error) {
//         response.status(500).json(error);
//     }

//     // try {
//     //     const post = await Rentbill.findById(request.params.id);
    
//     //     if (!post) {
//     //         return response.status(404).json({ msg: 'Post not found' });
//     //     }
    
//     //     // Check if the post contains any item where totalAmount !== 0 and billStatus !== "paid"
//     //     const hasUnpaidOrNonZeroAmount = post.items.some(item => item.totalAmount !== 0 && item.billStatus !== "paid");
    
//     //     if (!hasUnpaidOrNonZeroAmount) {
//     //         return response.status(400).json({ msg: 'No item with totalAmount !== 0 and billStatus !== "paid"' });
//     //     }
    
//     //     // Update the post if the condition is met
//     //     await Rentbill.findByIdAndUpdate(request.params.id, { $set: request.body });
    
//     //     response.status(200).json('Post updated successfully');
//     // } catch (error) {
//     //     response.status(500).json(error);
//     // }
    
// }



// export const getAllPosts = async (request, response) => {
//     let ownerName = request.query.ownerName;
//     let entity = request.query.entity;
//     let market = request.query.market;
//     let posts;
//     try {
//         if(ownerName) {
//             posts = await Shipment.find({ ownerName: ownerName });
//         }else if (entity && market) {
//             posts = await Post.find({ flourId: entity, propertyId: market });
//         }else if (entity) {
//             posts = await Post.find({ flourId: entity });
//         }else if (market) {
//             posts = await Post.find({ propertyId: market });
//         }else {
//             posts = await Post.find({ ownerName: ownerName });
//         }
        
//         response.status(200).json(posts);
//     } catch (error) {
//         response.status(500).json(error)
//     }
// }

export const getAllPosts = async (request, response) => {
    const { ownerName, market,truckId,drivereId,siteId } = request.query;
    let posts;

    try {
        if (market === "Active" && truckId ) {
            posts = await Shipment.find({ truckOwner:ownerName, shipmentStatus: "start",truckId:truckId });
        }else if  (market === "Active" && drivereId) {
            posts = await Shipment.find({ truckOwner:ownerName, shipmentStatus: "start" ,drivereId:drivereId});
        }else if  (market === "Active" && siteId) {
            posts = await Shipment.find({ truckOwner:ownerName, shipmentStatus: "start" ,siteId:siteId});
        }else if  (market === "Complete" && truckId) {
            posts = await Shipment.find({ truckOwner:ownerName, shipmentStatus: { $ne: "start" } ,truckId:truckId});
        }else if  (market === "Complete" && drivereId) {
            posts = await Shipment.find({ truckOwner:ownerName, shipmentStatus: { $ne: "start" } ,drivereId:drivereId });
        }else if  (market === "Complete" && siteId) {
            posts = await Shipment.find({ truckOwner:ownerName, shipmentStatus: { $ne: "start" } ,siteId:siteId});
        }   else if  (market === "Active") {
            posts = await Shipment.find({ truckOwner:ownerName, shipmentStatus: "start" });
        } else if (market === "Complete") {
            posts = await Shipment.find({ truckOwner:ownerName, shipmentStatus: { $ne: "start" } });
        } else if (ownerName) {
            posts = await Shipment.find({ truckOwner:ownerName });
        } else {
            posts = await Shipment.find({ truckOwner:ownerName });
        }

        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};



export const dateReport = async (req, res) => {
    try {
        const { startingdate, endingdate, truckid, driverid, siteid } = req.query;

        if (!startingdate || !endingdate) {
            return res.status(400).json({ success: false, message: "Start and end date are required" });
        }

        // Convert query parameters to Date objects
        const startDate = new Date(startingdate);
        const endDate = new Date(endingdate);
        endDate.setHours(23, 59, 59, 999); // Ensure full coverage of the end date

        // Base filter with date range
        let filter = {
            createdDate: { $gte: startDate, $lte: endDate }
        };

        // Append additional filters based on query parameters
        if (truckid) filter.truckId = truckid;
        if (driverid) filter.drivereId = driverid;
        if (siteid) filter.siteId = siteid;

        // console.log("Query Filter:", JSON.stringify(filter, null, 2)); // Debugging

        // Fetch filtered shipments
        const shipments = await Shipment.find(filter);

        res.status(200).json({
            success: true,
            count: shipments.length,
            data: shipments
        });
    } catch (error) {
        console.error("Error in dateReport:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


export const getLatestShipmentbyOwner = async (req, res) => {
        try {
        const { ownerName } = req.params;
    
        if (!ownerName) {
            return res.status(400).json({ error: 'Owner name is required in params.' });
        }
    
        // STEP 1: Get all shipments for the given owner
        const shipments = await Shipment.find({ truckOwner:ownerName });
    
        if (shipments.length === 0) {
            return res.status(404).json({ error: 'No shipments found for this owner.' });
        }
    
        // STEP 2: Pick the latest shipment for each truckId
        const latestShipmentsMap = new Map();
    
        shipments.forEach((shipment) => {
            const truckIdStr = shipment.truckId?.toString();
            const existing = latestShipmentsMap.get(truckIdStr);
    
            // Compare shipmentDate and store the latest one
            if (!existing || new Date(shipment.shipmentStartingDate) > new Date(existing.shipmentStartingDate)) {
            latestShipmentsMap.set(truckIdStr, shipment);
            }
        });
    
        // STEP 3: Convert the Map values to an array for the final result
        const latestShipments = Array.from(latestShipmentsMap.values());
    
        return res.status(200).json(latestShipments);
        } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
        }
    };
  
