import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth } from "./../../FirebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

function Sidebar() {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to=""
              >
                <span data-feather="home"></span>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="./posts">
                <span data-feather="file"></span>
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="./users">
                <span data-feather="shopping-cart"></span>
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              {user && (
                <NavLink className="nav-link px-3" to="#" onClick={logout}>
                  Sign out
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
