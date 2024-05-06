//import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./../../FirebaseConfig.js";
import {
  Outlet,
  //useNavigate,
  Navigate,
  //useResolvedPath,
  //useMatch,
} from "react-router-dom";
import ReactLoading from "react-loading";
import "./Dashboard.css";
import Sidebar from "./sidebar";

import { collection, getDocs } from "firebase/firestore";
//import { doc, getDoc } from "firebase/firestore";
//import { collection, query, where, getDocs } from "firebase/firestore";

async function getData() {
  const querySnapshot = await getDocs(collection(db, "edkw_db"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}

function Dashboard() {
  //let resolved = useResolvedPath("/admin/login");
  //let match = useMatch({
  //  path: resolved.pathname,
  //  end: true,
  //});

  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    getData();
  }, []);

  //const navigate = useNavigate();

  /*   const logout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  }; */

  const containerStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {!loading ? (
        <>
          {!user ? (
            <Navigate to={`/admin/login`} />
          ) : (
            <>
              <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a
                  className="navbar-brand col-md-3 col-lg-2 me-0 px-3 bg-dark"
                  href="./admin"
                >
                  Dashboard
                </a>
                <button
                  className="navbar-toggler position-absolute d-md-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sidebarMenu"
                  aria-controls="sidebarMenu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </header>

              <div className="container-fluid">
                <div className="row">
                  <Sidebar />

                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                      <h1 className="h2">Dashboard</h1>
                    </div>

                    <Outlet />
                  </main>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div style={containerStyle}>
            <ReactLoading
              type="spin"
              color="black"
              height="200px"
              width="200px"
              className="mx-auto"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
