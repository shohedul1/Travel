import bcrypt from "bcryptjs";
import User from "../model/User.js";
import generateToken from "../config/generateToken.js";
import response from "../config/responceHandler.js";




export const registerUser = async (req, res) => {
    try {
        const { username, email, password, gender } = req.body;
        const file = req.file;
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return response(res, 400, 'User with this email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const profilePicture = file ? file.path : null;

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            gender,
            profilePicture,
        });

        const accessToken = generateToken(newUser);
        // Set auth token in cookies
        res.cookie("auth_token", accessToken, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        });

        await newUser.save();
        return response(res, 201, 'User created successfully', newUser);

    } catch (error) {
        console.log('Error creating user:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};



export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return response(res, 404, 'User not found with this email');
        }

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return response(res, 400, 'Invalid Password');
        }

        const accessToken = generateToken(user);
        // Set auth token in cookies
        res.cookie("auth_token", accessToken, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        });

        return response(res, 200, "User logged in successfully", {
            user
        });

    } catch (error) {
        console.error("Error during user login:", error);
        return response(res, 500, "Internal Server Error", error.message);
    }
};

// User logout
export const logout = (req, res) => {
    try {
        res.cookie("auth_token", "", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            expires: new Date(0),
        });
        return response(res, 200, "User logged out successfully");
    } catch (error) {
        console.error("Error during user logout:", error);
        return response(res, 500, "Internal Server Error", error.message);
    }
};

// Get all users
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        return response(res, 200, "Users fetched successfully", users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return response(res, 500, "Internal server error", error.message);
    }
};

//check if user is authenticated or not 
export const checkUserAuth = async (req, res) => {
    try {
        const userId = req?.user?.userId;
        if (!userId) return response(res, 404, 'unauthenticated ! please login before access the data')

        //fetch the user details and excude sensitive information
        const user = await User.findById(userId).select('-password');

        if (!user) return response(res, 403, 'User not found')

        return response(res, 201, 'user retrived and allow to use facebook', user)
    } catch (error) {
        return response(res, 500, 'Internal server error', error.message)
    }
}

