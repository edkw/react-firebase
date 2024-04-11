import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

function Dashboard() {
  return (
    <>
      <Header />
      <h2>Posts</h2>
      <h1>ログインページ</h1>
      <Footer />
    </>
  );
}

export default Dashboard;
