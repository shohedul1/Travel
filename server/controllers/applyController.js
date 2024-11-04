import response from "../config/responceHandler.js";
import Apply from "../model/Apply.js";

export const createApply = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { postId } = req.params;  // Post ID from route parameters
        const { name, email, address, number } = req.body;
        // Create a new post
        const newApply = new Apply({
            user: userId,
            post: postId,
            name,
            email,
            address,
            number,
        });

        await newApply.save();
        return response(res, 201, 'Apply created successfully', newApply);

    } catch (error) {
        console.log('Error creating apply:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};

//get all posts
export const getAllApply = async (req, res) => {
    try {
        const getAppltQuary = await Apply.find()
            .sort({ createdAt: -1 })
            .populate('user', '_id username profilePicture email')
            .populate('post', '_id carname location description price date image')


        return response(res, 201, 'Get all Apply successfully', getAppltQuary)
    } catch (error) {
        console.log('error getting posts', error)
        return response(res, 500, 'Internal server error', error.message)
    }
}