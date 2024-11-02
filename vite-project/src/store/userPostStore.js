import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const userPostStore = create((set) => ({
    getAllPost: null,
    getSinglePost: null,
    loading: false,
    deleteLoader: false,

    travelPost: async (postData) => {
        try {
            set({ loading: true });
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/posts`, postData, {
                withCredentials: true,
            });
            // console.log(res.data.message)
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        } finally {
            set({ loading: false });
        }
    },

    getAllPostTravel: async () => {
        try {
            set({ loading: true });
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/posts`, {
                withCredentials: true,
            });
            console.log('Response data:', res.data); // Debug log
            set({ getAllPost: res.data });
        } catch (error) {
            console.error('Error:', error);
        } finally {
            set({ loading: false });
        }
    },


    travelPostDelete: async ({ postId }) => {
        try {
            set({ deleteLoader: true });
            const res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/users/posts/user/${postId}`, {
                withCredentials: true,
            });

            if (res.status === 200) {
                toast.success(res.data.message);
                // Update the state to remove the deleted post
                set((state) => ({
                    getAllPost: state.getAllPost.filter(post => post._id !== postId),
                }));
            } else {
                // Handle unexpected status codes
                toast.error("Unexpected response from server");

            }
        } catch (error) {
            console.log(error)
        } finally {
            set({ deleteLoader: false });
        }
    }






}))