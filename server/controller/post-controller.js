import Post from '../model/post.js';
import Flour from '../model/flour.js';

// export const createPost = async (request, response) => {
//     try {
//         const post = await new Post(request.body);
//         post.save();

//         return response.status(200).json('Post saved successfully');
//     } catch (error) {
//         return response.status(500).json(error);
//     }
// }

export const createPost = async (request, response) => {
    const { propertyId, flourId, renterName, ...otherData } = request.body;

    try {
        // Verify if flourId exists in the Flour collection
        const flour = await Flour.findById(flourId);

        if (!flour || flour.propertyId !== propertyId) {
            return response.status(400).json('Invalid propertyId or flourId');
        }

        // Create the new renter entry
        const newPost = new Post({
            propertyId,
            flourId,
            renterName,
            propertyName: flour.propertyName,
            flourName: flour.flourName, // Populate flourName from Flour collection
            ...otherData
        });

        await newPost.save();

        return response.status(200).json('Renter saved successfully');
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Server error', error });
    }
};


// export const updatePost = async (request, response) => {
//     try {
//         const post = await Post.findById(request.params.id);

//         if (!post) {
//             response.status(404).json({ msg: 'Post not found' })
//         }
        
//         await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

//         response.status(200).json('post updated successfully');
//     } catch (error) {
//         response.status(500).json(error);
//     }
// }

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params._id);

        if (!post) {
            return response.status(404).json({ msg: 'Post not found' }); // Stop execution
        }

        const updatedPost = await Post.findByIdAndUpdate(
            request.params.id,
            { $set: request.body },
            { new: true, runValidators: true } // Ensure the updated post is returned
        );

        response.status(200).json({ msg: 'Post updated successfully', updatedPost });
    } catch (error) {
        console.error("Error updating post:", error);
        response.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
};

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        await Post.findByIdAndDelete(post._id)

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getAllPosts = async (request, response) => {
    let ownerName = request.query.ownerName;
    let flourId = request.query.flourId;
    let propertyId = request.query.propertyId;
    let posts;
    try {
        if(ownerName) {
            posts = await Post.find({ ownerName: ownerName });
        }else if (flourId && propertyId) {
            posts = await Post.find({ flourId: flourId, propertyId: propertyId });
        }else if (flourId) {
            posts = await Post.find({ flourId: flourId });
        }else if (propertyId) {
            posts = await Post.find({ propertyId: propertyId });
        }else {
            posts = await Post.find({ ownerName: ownerName });
        }
        
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}