import response from "../config/responceHandler.js";
import Post from "../model/Post.js";

//crate post
export const createPost = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { carname, location, description, price, date } = req.body;

        const file = req.file;

        const image = file ? file.path : null;

        // Create a new post
        const newPost = new Post({
            user: userId,
            carname,
            location,
            description,
            image,
            price,
            date
        });

        await newPost.save();
        return response(res, 201, 'Post created successfully', newPost);

    } catch (error) {
        console.log('Error creating post:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};

// Update a post by its ID
export const updateCreatePost = async (req, res) => {
    try {
        const { postId } = req.params;  // Post ID from route parameters
        const userId = req.user.userId;

        const { carname, location, description, price, date } = req.body;
        const file = req.file;

        const image = file ? file.path : null;

        // Find and update the post
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            {
                user: userId,
                carname,
                location,
                description,
                price,
                date,
                image
                // ...(image && { image }), // Only update image if a new file is uploaded
            },
            { new: true } // Return the updated document
        );

        if (!updatedPost) {
            return response(res, 404, 'Post not found with this ID');
        }

        return response(res, 200, 'Post updated successfully', updatedPost);
    } catch (error) {
        console.error('Error updating post:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};

// Delete a post by its ID
export const deleteCreatePost = async (req, res) => {
    try {
        const { postId } = req.params;  // Post ID from route parameters

        // Find the post by ID and delete it
        const deletedPost = await Post.findByIdAndDelete(postId);

        if (!deletedPost) {
            return response(res, 404, 'Post not found with this ID');
        }

        return response(res, 200, 'Post deleted successfully');
    } catch (error) {
        console.error('Error deleting post:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};

//get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .populate('user', '_id username profilePicture email')

        return response(res, 201, 'Get all posts successfully', posts)
    } catch (error) {
        console.log('error getting posts', error)
        return response(res, 500, 'Internal server error', error.message)
    }
}


// Get a single post by its ID
export const getPostById = async (req, res) => {
    const { postId } = req.params;  // Post ID from route parameters
    try {
        // Find the post by ID
        const post = await Post.findById(postId).populate('user', '_id username profilePicture email');

        if (!post) {
            return response(res, 404, 'Post not found with this ID');
        }

        return response(res, 200, 'Post retrieved successfully', post);
    } catch (error) {
        console.error('Error retrieving post:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};


