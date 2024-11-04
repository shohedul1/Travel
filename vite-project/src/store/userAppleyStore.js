import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const userApplyStore = create((set) => ({
    getAllApply: null,
    applyPostLoader: false,
    getAllPostApplyLoader: false,

    applyPost: async ({ applyData, postId }) => {
        try {
            set({ applyPostLoader: true });
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/apply/posts/${postId}`, applyData, {
                withCredentials: true,
            });
            // console.log(res.data.message);
            // set({ getAllPost: res.data });
            toast.success(res.data.message);
            return res;
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        } finally {
            set({ applyPostLoader: false });
        }
    },

    getAllPostApply: async () => {
        try {
            set({ getAllPostApplyLoader: true });
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/apply/posts`, {
                withCredentials: true,
            });
            // console.log('Response data:', res.data); // Debug log
            set({ getAllApply: res.data });
            return res;
        } catch (error) {
            console.error('Error:', error);
        } finally {
            set({ getAllPostApplyLoader: false });
        }
    },


}))