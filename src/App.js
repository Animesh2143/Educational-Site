import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Crs from "./course/Crs.js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";

function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return( 
  <div className="w-screen h-screen overflow-auto  bg-richblack-900 flex flex-col ">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/about" element={<About/>}/>

      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
          <Crs/>
        </PrivateRoute>
      }/>
    </Routes>
  </div>);
}

export default App;
