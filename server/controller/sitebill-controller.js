import Shipment from '../model/shipment.js';
import Sitebill from '../model/sitebill.js';



// export const SiteTosendBill = async (request, response) => {
//     try {
//         // Step 1: Find the shipment by ID
//         const shipment = await Shipment.findById(request.body._id);

//         if (!shipment) {
//             return response.status(404).json('Shipment not found');
//         }

//         // Step 2: Update sitetoSendBill to "yes"
//         shipment.sitetoSendBill = "yes";
//         await shipment.save();

//         // Step 3: Create Sitebill object only with keys that exist in Sitebill schema
//         const allowedKeys = Object.keys(Sitebill.schema.obj); // Get schema keys
//         const sitebillData = {};

//         for (const key of allowedKeys) {
//             if (shipment[key] !== undefined) {
//                 sitebillData[key] = shipment[key];
//             }
//         }

//         const sitebill = new Sitebill(sitebillData);
//         await sitebill.save();

//         return response.status(200).json('Site bill saved successfully and shipment updated');
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// };

export const SiteTosendBill = async (request, response) => {
    try {
        // Step 1: Find the shipment by ID from request.body._id
        const shipment = await Shipment.findById(request.body._id);

        if (!shipment) {
            return response.status(404).json('Shipment not found');
        }

        // Step 2: Update sitetoSendBill to "yes"
        shipment.sitetoSendBill = "yes";
        await shipment.save();

        // Step 3: Prepare Sitebill data using only allowed keys
        const allowedKeys = Object.keys(Sitebill.schema.obj);
        const sitebillData = {};

        for (const key of allowedKeys) {
            if (shipment[key] !== undefined) {
                sitebillData[key] = shipment[key];
            }
        }

        // Step 4: Also include shipment._id as shipmentId in Sitebill
        sitebillData.shipmentId = shipment._id;

        // Step 5: Save Sitebill
        const sitebill = new Sitebill(sitebillData);
        await sitebill.save();

        return response.status(200).json('Site bill saved successfully and shipment updated');
    } catch (error) {
        return response.status(500).json(error.message);
    }
};


export const getAllSitebills = async (request, response) => {
    const { ownerName, market,truckId,drivereId,siteId } = request.query;
    let posts;

    try {
        if (market === "Active" && truckId ) {
            posts = await Sitebill.find({ truckOwner:ownerName, siteBillStatus: "notPaid",truckId:truckId });
        }else if  (market === "Active" && drivereId) {
            posts = await Sitebill.find({ truckOwner:ownerName, siteBillStatus: "notPaid" ,drivereId:drivereId});
        }else if  (market === "Active" && siteId) {
            posts = await Sitebill.find({ truckOwner:ownerName, siteBillStatus: "notPaid" ,siteId:siteId});
        }else if  (market === "Complete" && truckId) {
            posts = await Sitebill.find({ truckOwner:ownerName, siteBillStatus: { $ne: "notPaid" } ,truckId:truckId});
        }else if  (market === "Complete" && drivereId) {
            posts = await Sitebill.find({ truckOwner:ownerName, siteBillStatus: { $ne: "notPaid" } ,drivereId:drivereId });
        }else if  (market === "Complete" && siteId) {
            posts = await Sitebill.find({ truckOwner:ownerName, siteBillStatus: { $ne: "notPaid" } ,siteId:siteId});
        }   else if  (market === "Active") {
            posts = await Sitebill.find({ truckOwner:ownerName, siteBillStatus: "notPaid" });
        } else if (market === "Complete") {
            posts = await Sitebill.find({ truckOwner:ownerName, siteBillStatus: { $ne: "notPaid" } });
        } else if (ownerName) {
            posts = await Sitebill.find({ truckOwner:ownerName });
        } else {
            posts = await Sitebill.find({ truckOwner:ownerName });
        }

        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};


export const updatesitebill = async (request, response) => {
    try {
        const { selectedIds, selectedShipmentIds, deposit } = request.body;

        if (!selectedIds || !Array.isArray(selectedIds) || selectedIds.length === 0) {
            return response.status(400).json({ message: "selectedIds are required and must be a non-empty array." });
        }

        // Case 1: Bulk update – no deposit
        if (!deposit) {
            // Update Sitebill
            const updatedDriverBills = await Sitebill.updateMany(
                { _id: { $in: selectedIds } },
                {
                    $set: {
                        paymentOutstending: 0,
                        paymentDate: new Date(),
                        siteBillStatus: "paid"
                    }
                }
            );

            // Update Shipment
            if (selectedShipmentIds && Array.isArray(selectedShipmentIds) && selectedShipmentIds.length > 0) {
                const updatedShipments = await Shipment.updateMany(
                    {
                        _id: { $in: selectedShipmentIds },
                        siteBillStatus: "notPaid"
                    },
                    {
                        $set: {
                            paymentOutstending: 0,
                            siteBillStatus: "paid",
                            sitePaymentDate: new Date()
                        }
                    }
                );
                return response.status(200).json({
                    message: "Site bills and shipments updated successfully (bulk).",
                    modifiedDriverBills: updatedDriverBills.modifiedCount,
                    modifiedShipments: updatedShipments.modifiedCount,
                    isSuccess: true
                });
            }

            return response.status(200).json({
                message: "Site bills updated successfully (bulk). No matching shipments found.",
                modifiedCount: updatedDriverBills.modifiedCount,
                isSuccess: true
            });
        }

        // Case 2: Single update with deposit
        if (deposit && selectedIds.length === 1) {
            const id = selectedIds[0];

            const updated = await Sitebill.findByIdAndUpdate(
                id,
                { $set: { siteDeposit: deposit } },
                { new: true }
            );

            if (!updated) {
                return response.status(404).json({ message: "Site bill not found." });
            }

            return response.status(200).json({
                message: "Site deposit updated successfully.",
                updated,
                isSuccess: true
            });
        }

        // Invalid case
        return response.status(400).json({
            message: "Site can only be applied when one ID is selected.",
            isSuccess: false
        });

    } catch (error) {
        console.error("Error in updateSitebill:", error);
        response.status(500).json({ message: "Internal Server Error", error });
    }
};
