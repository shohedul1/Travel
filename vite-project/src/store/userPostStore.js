import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const userPostStore = create((set) => ({
    getAllPost: null,
    getSinglePost: null,
    loading: false,

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


}))