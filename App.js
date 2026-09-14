// client/my_app/src/App.jsx
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MyBooks from "./pages/MyBooks";
import SearchBooks from "./pages/SearchBooks";
import UserProfile from "./pages/UserProfile";

import Error from './components/Error';
import ManageBooks from "./pages/admin/ManageBooks";
import AddBook from "./pages/admin/AddBook";
import ViewBooks from "./pages/admin/ViewBook";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Notifications from './pages/Notifications';
import ReadingHistory from './pages/ReadingHistory';
import BookSuggestions from './pages/BookSuggestions';
import ViewReports from './pages/admin/ViewReports';
import ManageUsers from './pages/admin/ManageUsers';
import AdminProfileSettings from './pages/admin/AdminProfileSettings';

function App() {
  return (
    <BrowserRouter>
  <div className="app-container">
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/view-reports" element={<ViewReports/>} />
        <Route path="/admin/manage-books" element={<ManageBooks />} />
        <Route path="/admin/manage-user" element={<ManageUsers/>} />
        <Route path="/admin/addbook" element={<AddBook />} />
        <Route path="/admin/profile-settings" element={<AdminProfileSettings />} />
        <Route path="/admin/viewbook" element={<ViewBooks />} />
        <Route path="/searchbook" element={<SearchBooks />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/Reading-History" element={<ReadingHistory />} />
        <Route path="/suggestive-book" element={<BookSuggestions />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/*" element={<><Error /></>} />

      </Routes>
    </div>
    <Footer />
  </div>
</BrowserRouter>

  );
}

export default App;
