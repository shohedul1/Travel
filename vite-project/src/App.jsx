import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogsDetails from './pages/BlogsDetails';
import PlacesRoute from './pages/PlacesRoute';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Admin from './pages/Admin';
import AOS from "aos";
import "aos/dist/aos.css";
import Login from './pages/Login';
import { Toaster } from "react-hot-toast";
import { userAuthStore } from './store/useAuthStore';
import Profile from './pages/Profile';
import BokingTraver from './pages/BokingTraver';



const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const { checkAuth, loading, authUser, logout, register, login } = userAuthStore();


  useEffect(() => {
    if (!loading) {
      checkAuth();
    } else {
      return <p>loading...</p>
    }

  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout authUser={authUser} logout={logout} />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={authUser ? <Admin /> : <Navigate to="/login" replace />} />
          <Route path='/login' element={<Login register={register} loading={loading} login={login} authUser={authUser} />} />
          {/* Uncomment and define these components when needed */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/bokingTraver/:id" element={<BokingTraver />} />
          <Route path="/blogs/:id" element={<BlogsDetails />} />
          <Route path="/best-places" element={<PlacesRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>

  );
};

export default App;
