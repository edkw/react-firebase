import { Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Login from "./login.jsx";
import Auth from "./auth.jsx";

/* 「Link」をimport↓ */

import Dashboard from "./dashboard.jsx";
import User from "./user.jsx";

import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../../FirebaseConfig.js";
import { useNavigate, Navigate } from "react-router-dom";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Admin = () => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  const pathname = useLocation().pathname;

  useEffect(() => {
    //alert("ssss");
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();
  /*
  const logout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  const user2 = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };
*/
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Admin;
