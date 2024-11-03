import { create } from 'zustand';
import axios from "axios"
import toast from 'react-hot-toast';

export const userAuthStore = create((set) => ({
    getallUser: null,
    authUser: null,
    loading: false,
    userUpDateLoader: false,

    register: async ({ signupData }) => {
        try {
            set({ loading: true });
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, signupData, {
                withCredentials: true,
            });
            console.log(res.data.message)
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        } finally {
            set({ loading: false });
        }
    },

    login: async ({ loginData }) => {
        try {
            set({ loading: true });
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, loginData, {
                withCredentials: true,
            });

            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        } finally {
            set({ loading: false });
        }
    },
    logout: async () => {
        try {
            set({ loading: true });
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {
                withCredentials: true,
            });
            toast.success(res.data.message);

        } catch (error) {
            console.error('Error:', error);
            toast.error(error.response.data.message || "Something went wrong");
        } finally {
            set({ loading: false });
        }
    },

    checkAuth: async () => {
        try {
            set({ loading: true });
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/check-auth`, {
                withCredentials: true,
            });
            // console.log('Response data:', res.data); // Debug log
            set({ authUser: res.data });
        } catch (error) {
            console.error('Error:', error);
        } finally {
            set({ loading: false });
        }
    },
    userUpDate: async ({ userId, upData }) => {
        try {
            set({ userUpDateLoader: true });
            const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/auth/userUpdate/${userId}`, upData, {
                withCredentials: true,
            });
            // console.log('Response data:', res.data); // Debug log
            set({ authUser: res.data });
        } catch (error) {
            console.error('Error:', error);
        } finally {
            set({ userUpDateLoader: false });
        }
    },


}))

