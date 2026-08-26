import Flore from '../model/flour.js';
import Property from '../model/property.js';


export const addFlore = async (request, response) => {
    const { propertyId, title, flourName, ownerName, lightFixedChargeUnitFlour } = request.body;

    try {
        // Step 1: Fetch the property data using propertyId
        const property = await Property.findById(propertyId);
        if (!property) {
            return response.status(404).json({ message: 'Property not found' });
        }

        // Step 2: Prepare Flore data, filling empty fields from Property data if available
        const floreData = {
            propertyId: propertyId,
            propertyName: property.propertyName,            // Use propertyName as propertyName
            title: title ,                      // Title from request, if provided
            flourName,
            ownerName: ownerName,  // Use owner's name from Property if missing
            statusProp: property.statusProp || 'active',
            lightFixedChargeUnitFlour: lightFixedChargeUnitFlour || property.lightFixedChargeUnitProp, // Fallback to property value if needed
            createdDate: new Date()
        };

        // Step 3: Create and save the new Flore document
        const flore = new Flore(floreData);
        await flore.save();

        // Step 4: Increment propertyTotalRent by 1 in the Property model
        property.propertyFloure += 1;
        await property.save();

        return response.status(200).json({ message: 'Flore saved successfully', flore });
    } catch (error) {
        console.error('Error saving Flore:', error);
        return response.status(500).json({ message: 'Error saving Flore', error });
    }
};


export const updateFlore = async (request, response) => {
    try {
        const post = await Flore.findById(request.params.id);

        if (!Flore) {
            response.status(404).json({ msg: 'Flore not found' })
        }
        
        await Flore.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('Property updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deleteFlore = async (request, response) => {
    try {
        const Flore = await Flore.findById(request.params.id);
        
        await Flore.findByIdAndDelete(Flore._id)

        response.status(200).json('Property deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getFlore = async (request, response) => {
    try {
        // Use the model instance to fetch documents with the given propertyId
        const floreItems = await Flore.find({ propertyId: request.params.propertyId });

        if (!floreItems || floreItems.length === 0) {
            return response.status(404).json({ message: "No matching documents found for the provided propertyId" });
        }

        // Return the found documents in the response
        response.status(200).json(floreItems);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error fetching flore items:", error);
        response.status(500).json({ message: "Error fetching flore items", error });
    }
};

export const getAllFlores = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let market = request.query.market;
    let posts;
    try {
        if(username) {
            posts = await Post.find({ username: username });
        }else if (category && market) {
            posts = await Post.find({ categories: category, market: market });
        }else if (category) {
            posts = await Post.find({ categories: category });
        }else if (market) {
            posts = await Post.find({ market: market });
        }else {
            posts = await Post.find({});
        }
        
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}