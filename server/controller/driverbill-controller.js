import Shipment from '../model/shipment.js';
import Driverbill from '../model/driverbill.js';




export const DriverTosendBill = async (request, response) => {
    try {
        // Step 1: Find the shipment by ID from request.body._id
        const shipment = await Shipment.findById(request.body._id);

        if (!shipment) {
            return response.status(404).json('Shipment not found');
        }

        // Step 2: Update sitetoSendBill to "yes"
        shipment.drivertoSendBill = "yes";
        await shipment.save();

        // Step 3: Prepare Driverbill data using only allowed keys
        const allowedKeys = Object.keys(Driverbill.schema.obj);
        const driverbillData = {};

        for (const key of allowedKeys) {
            if (shipment[key] !== undefined) {
                driverbillData[key] = shipment[key];
            }
        }

        // Step 4: Also include shipment._id as shipmentId in Driverbill
        driverbillData.shipmentId = shipment._id;

        // Step 5: Save Driverbill
        const driverbill = new Driverbill(driverbillData);
        await driverbill.save();

        return response.status(200).json('Driver bill saved successfully and shipment updated');
    } catch (error) {
        return response.status(500).json(error.message);
    }
};



export const getAllDriverbills = async (request, response) => {
    const { ownerName, market,truckId,drivereId,siteId } = request.query;
    let posts;

    try {
        if (market === "Active" && truckId ) {
            posts = await Driverbill.find({ truckOwner:ownerName, DriverBillStatus: "notPaid",truckId:truckId });
        }else if  (market === "Active" && drivereId) {
            posts = await Driverbill.find({ truckOwner:ownerName, DriverBillStatus: "notPaid" ,drivereId:drivereId});
        }else if  (market === "Active" && siteId) {
            posts = await Driverbill.find({ truckOwner:ownerName, DriverBillStatus: "notPaid" ,siteId:siteId});
        }else if  (market === "Complete" && truckId) {
            posts = await Driverbill.find({ truckOwner:ownerName, DriverBillStatus: { $ne: "notPaid" } ,truckId:truckId});
        }else if  (market === "Complete" && drivereId) {
            posts = await Driverbill.find({ truckOwner:ownerName, DriverBillStatus: { $ne: "notPaid" } ,drivereId:drivereId });
        }else if  (market === "Complete" && siteId) {
            posts = await Driverbill.find({ truckOwner:ownerName, DriverBillStatus: { $ne: "notPaid" } ,siteId:siteId});
        }   else if  (market === "Active") {
            posts = await Driverbill.find({ truckOwner:ownerName, DriverBillStatus: "notPaid" });
        } else if (market === "Complete") {
            posts = await Driverbill.find({ truckOwner:ownerName, DriverBillStatus: { $ne: "notPaid" } });
        } else if (ownerName) {
            posts = await Driverbill.find({ truckOwner:ownerName });
        } else {
            posts = await Driverbill.find({ truckOwner:ownerName });
        }

        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};


// export const updatedriverbill = async (request, response) => {
//     try {
//         const { selectedIds, deposit } = request.body;

//         if (!selectedIds || !Array.isArray(selectedIds) || selectedIds.length === 0) {
//             return response.status(400).json({ message: "selectedIds are required and must be a non-empty array." });
//         }

//         // Case 1: If deposit is NOT provided — bulk update
//         if (!deposit) {
//             const updated = await Driverbill.updateMany(
//                 { _id: { $in: selectedIds } },
//                 {
//                     $set: {
//                         dryverOutstendingPayment: 0,
//                         paymentDate: new Date(),
//                         DriverBillStatus: "paid"
//                     }
//                 }
//             );

//             return response.status(200).json({
//                 message: "Driver bills updated successfully (bulk).",
//                 modifiedCount: updated.modifiedCount,
//                 isSuccess: true
//             });
//         }

//         // Case 2: Deposit is provided — single update only if exactly one ID
//         if (deposit && selectedIds.length === 1) {
//             const id = selectedIds[0];

//             const updated = await Driverbill.findByIdAndUpdate(
//                 id,
//                 { $set: { dryverDeposit: deposit } },
//                 { new: true }
//             );

//             if (!updated) {
//                 return response.status(404).json({ message: "Driver bill not found." });
//             }

//             return response.status(200).json({
//                 message: "Driver deposit updated successfully.",
//                 updated,
//                 isSuccess: true
//             });
//         }

//         // If deposit is provided but more than one ID is selected
//         return response.status(400).json({
//             message: "Deposit can only be applied when one ID is selected.",
//             isSuccess: false
//         });

//     } catch (error) {
//         console.error("Error in updateShipment:", error);
//         response.status(500).json({ message: "Internal Server Error", error });
//     }
// };



export const updatedriverbill = async (request, response) => {
    try {
        const { selectedIds, selectedShipmentIds, deposit } = request.body;

        if (!selectedIds || !Array.isArray(selectedIds) || selectedIds.length === 0) {
            return response.status(400).json({ message: "selectedIds are required and must be a non-empty array." });
        }

        // Case 1: Bulk update – no deposit
        if (!deposit) {
            // Update Driverbill
            const updatedDriverBills = await Driverbill.updateMany(
                { _id: { $in: selectedIds } },
                {
                    $set: {
                        dryverOutstendingPayment: 0,
                        paymentDate: new Date(),
                        DriverBillStatus: "paid"
                    }
                }
            );

            // Update Shipment
            if (selectedShipmentIds && Array.isArray(selectedShipmentIds) && selectedShipmentIds.length > 0) {
                const updatedShipments = await Shipment.updateMany(
                    {
                        _id: { $in: selectedShipmentIds },
                        DriverBillStatus: "notPaid"
                    },
                    {
                        $set: {
                            dryverOutstendingPayment: 0,
                            DriverBillStatus: "paid",
                            driverPaymentDate: new Date()
                        }
                    }
                );
                return response.status(200).json({
                    message: "Driver bills and shipments updated successfully (bulk).",
                    modifiedDriverBills: updatedDriverBills.modifiedCount,
                    modifiedShipments: updatedShipments.modifiedCount,
                    isSuccess: true
                });
            }

            return response.status(200).json({
                message: "Driver bills updated successfully (bulk). No matching shipments found.",
                modifiedCount: updatedDriverBills.modifiedCount,
                isSuccess: true
            });
        }

        // Case 2: Single update with deposit
        if (deposit && selectedIds.length === 1) {
            const id = selectedIds[0];

            const updated = await Driverbill.findByIdAndUpdate(
                id,
                { $set: { dryverDeposit: deposit } },
                { new: true }
            );

            if (!updated) {
                return response.status(404).json({ message: "Driver bill not found." });
            }

            return response.status(200).json({
                message: "Driver deposit updated successfully.",
                updated,
                isSuccess: true
            });
        }

        // Invalid case
        return response.status(400).json({
            message: "Deposit can only be applied when one ID is selected.",
            isSuccess: false
        });

    } catch (error) {
        console.error("Error in updateDriverbill:", error);
        response.status(500).json({ message: "Internal Server Error", error });
    }
};
