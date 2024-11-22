import React from "react";
import Left from "./home/left/left";
import Right from "./home/right/right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Router, Navigate } from "react-router-dom";

function App() {
  const { authUser } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={authUser?(
          <div className="flex h-screen">
          <Left></Left>
          <Right></Right> 
          </div>):(<Navigate to={"/login"}/>)} />
          <Route path="/signup" element={authUser?<Navigate to="/"/>:<Signup></Signup>}></Route> 
          <Route path="/login" element={authUser?<Navigate to="/"/>:<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
