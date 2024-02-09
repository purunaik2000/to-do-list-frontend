import { useState } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from  './pages/Home/Home';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import Profile from './pages/User/Profile';
import WorkList from './pages/WorkList/WorkList';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/todos" element={<WorkList />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
