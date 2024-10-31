import React from 'react';
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

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/admin" element={false ? <Admin /> : <Navigate to="/login" replace />} />
        <Route path='/login' element={<Login />} />
        {/* Uncomment and define these components when needed */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsDetails />} />
        <Route path="/best-places" element={<PlacesRoute />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
