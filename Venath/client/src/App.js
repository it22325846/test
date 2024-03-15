import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // Import the NavBar component
import Events from './components/Events';
import EventCandidates from './components/EventCandidates';
import CreateCandidate from './components/CreateCandidate';
import EditCandidate from './components/EditCandidate';
import CandidateDetails from './components/CandidateDetails';
import AllCandidates from './components/AllCandidates';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import SignIn from './components/SignIn';
import EditPassword from './components/EditPassword';
import Home from './components/Home';

import AdminHome from './components/AdminHome';
import AdminSignup from './components/AdminSignup';
import AdminEditAll from './components/AdminEditAll';
import AdminEventCandidates from './components/AdminEventCandidates';



function App() {
  return (
    <Router>
       <style>{'body { background-color: #969696; }'}</style>
      <NavBar /> {/* Include the NavBar component here */}

      <Routes>

      <Route path="/" element={<Events />} />
      <Route path="/candidates/:event" element={<EventCandidates />} />
        <Route path="/add" element={<CreateCandidate />} />
        <Route path="/edit/:id" element={<EditCandidate />} />
        <Route path="/candidate/:id" element={<CandidateDetails />} />
        <Route path="/candidates" element={<AllCandidates />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/editpwd" element={<EditPassword />} />
        <Route path="/home" element={<Home />} />

        <Route path="/admin" element={<AdminHome />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/editcandidates" element={<AdminEditAll />} />
        <Route path="/admincandidates/:event" element={<AdminEventCandidates />} />
        <Route path="/user/:userName/:id" component={UserProfile} />
</Routes>
      <Footer />{}
    </Router>
  );
}

export default App;
