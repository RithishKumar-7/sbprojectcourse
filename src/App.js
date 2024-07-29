// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import AdminDashboard from './components/dashboards/AdminDashboard/AdminDashboard';
import EmployeeDashboard from './components/dashboards/EmployeeDashboard/EmployeeDashboard';
import HRDashboard from './components/dashboards/HRDashboard/HRDashboard';
import TeamLeadDashboard from './components/dashboards/TeamLeadDashboard/TeamLeadDashboard';
import DashNav from './components/dashboards/DashNav';
import About from './components/About';
import Contact from './components/contact';
import Footer from './components/Footer';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
  };

  const handleLogout = () => {
    setUser(null);
  };

  console.log("Current user:", user); // Debugging line

  return (
    <Router>
      <div className="app-container"> {/* Wrap in a div to control layout */}
        <DashNav /> {/* This will render the DashNav component on all pages */}
        <main className="main-content"> {/* Main content area */}
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/admin-dashboard" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
            <Route path="/employee-dashboard" element={user?.role === 'employee' ? <EmployeeDashboard /> : <Navigate to="/login" />} />
            <Route path="/hr-dashboard" element={user?.role === 'hr' ? <HRDashboard /> : <Navigate to="/login" />} />
            <Route path="/team-lead-dashboard" element={user?.role === 'team_lead' ? <TeamLeadDashboard /> : <Navigate to="/login" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
            <Route path="/home" element={<Home user={user} onLogout={handleLogout} />} />
          </Routes>
        </main>
        <Footer/>
         {/* Footer will be rendered on all pages */}
      </div>
    </Router>
  );
};

export default App;
