// import Property from '../model/property.js';
import Truck from '../model/truck.js';
import Driver from '../model/driver.js';
import Site from '../model/site.js';

// export const addAssets = async (request, response) => {
//     try {
//         const property = await new Property(request.body);
//         property.save();

//         return response.status(200).json('Property saved successfully');
//     } catch (error) {
//         return response.status(500).json(error);
//     }
// }


export const addTrucks = async (request, response) => {
    try {
        const property = new Truck(request.body);
        await property.save();  // Add 'await' here

        return response.status(200).json('Truck saved successfully');
    } catch (error) {
        return response.status(500).json(error.message);
    }
};

export const addDriver = async (request, response) => {
    try {
        const property = new Driver(request.body);
        await property.save();  // Add 'await' here

        return response.status(200).json('Driver saved successfully');
    } catch (error) {
        return response.status(500).json(error.message);
    }
};

export const addSite = async (request, response) => {
    try {
        const property = new Site(request.body);
        await property.save();  // Add 'await' here

        return response.status(200).json('Site saved successfully');
    } catch (error) {
        return response.status(500).json(error.message);
    }
};

// export const updateProperty = async (request, response) => {
//     try {
//         const post = await Property.findById(request.params.id);

//         if (!Property) {
//             response.status(404).json({ msg: 'Property not found' })
//         }
        
//         await Property.findByIdAndUpdate( request.params.id, { $set: request.body })

//         response.status(200).json('Property updated successfully');
//     } catch (error) {
//         response.status(500).json(error);
//     }
// }

// export const deleteProperty = async (request, response) => {
//     try {
//         const Property = await Property.findById(request.params.id);
        
//         await Property.findByIdAndDelete(Property._id)

//         response.status(200).json('Property deleted successfully');
//     } catch (error) {
//         response.status(500).json(error)
//     }
// }

// export const getProperty = async (request, response) => {
//     try {
//         // Fetch all properties with the given ownerName
//         const properties = await Property.find({ ownerName: request.params.ownerName });
        
//         // Return the found properties in the response
//         response.status(200).json(properties);
//     } catch (error) {
//         response.status(500).json({ message: "Error fetching properties", error });
//     }
// };

export const getTruck = async (request, response) => {
    try {
        // Fetch all properties with the given ownerName
        const properties = await Truck.find({ truckOwner: request.params.truckOwner });
        
        // Return the found properties in the response
        response.status(200).json(properties);
    } catch (error) {
        response.status(500).json({ message: "Error fetching Trucks", error });
    }
};

export const getDriver = async (request, response) => {
    try {
        // Fetch all properties with the given ownerName
        const properties = await Driver.find({ truckOwner: request.params.truckOwner });
        
        // Return the found properties in the response
        response.status(200).json(properties);
    } catch (error) {
        response.status(500).json({ message: "Error fetching Drivers", error });
    }
};

export const getSite = async (request, response) => {
    try {
        // Fetch all properties with the given ownerName
        const properties = await Site.find({ truckOwner: request.params.truckOwner });
        
        // Return the found properties in the response
        response.status(200).json(properties);
    } catch (error) {
        response.status(500).json({ message: "Error fetching Sites", error });
    }
};


export const getTruckbyid = async (request, response) => {
    try {
        // Fetch all properties with the given ownerName
        const properties = await Truck.find({ _id: request.params._id });
        
        // Return the found properties in the response
        response.status(200).json(properties);
    } catch (error) {
        response.status(500).json({ message: "Error fetching Trucks", error });
    }
};

export const getDriverbyid = async (request, response) => {
    try {
        // Fetch all properties with the given ownerName
        const properties = await Driver.find({ _id: request.params._id });
        
        // Return the found properties in the response
        response.status(200).json(properties);
    } catch (error) {
        response.status(500).json({ message: "Error fetching Drivers", error });
    }
};

export const getSitebyid = async (request, response) => {
    try {
        // Fetch all properties with the given ownerName
        const properties = await Site.find({ _id: request.params._id });
        
        // Return the found properties in the response
        response.status(200).json(properties);
    } catch (error) {
        response.status(500).json({ message: "Error fetching Sites", error });
    }
};



export const deleteProperty = async (request, response) => {
    try {
        const { id, entity } = request.query; // Extract query parameters

        if (!id || !entity) {
            return response.status(400).json({ msg: 'Missing id or entity' });
        }

        let Model;
        if (entity === 'Truck') {
            Model = Truck;
        } else if (entity === 'Driver') {
            Model = Driver;
        } else if (entity === 'Site') {
            Model = Site;
        } else {
            return response.status(400).json({ msg: 'Invalid entity type' });
        }

        const deletedItem = await Model.findByIdAndDelete(id);

        if (!deletedItem) {
            return response.status(404).json({ msg: `${entity} not found` });
        }

        response.status(200).json({ msg: `${entity} deleted successfully`, deletedItem });
    } catch (error) {
        console.error(`Error deleting ${request.query.entity}:`, error);
        response.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
};



export const updateTruck = async (request, response) => {
    try {
        const truck = await Truck.findById(request.params.id);

        if (!truck) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Truck.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('Truck updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}




export const updateDriver = async (request, response) => {
    try {
        const driver = await Driver.findById(request.params.id);

        if (!driver) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Driver.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('Driver updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}


export const updateSite = async (request, response) => {
    try {
        const site = await Site.findById(request.params.id);

        if (!site) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Site.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('Site updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}


