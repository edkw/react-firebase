import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../../FirebaseConfig.js";
import {
  useNavigate,
  Navigate,
  //useResolvedPath,
  //useMatch,
} from "react-router-dom";

function Home() {
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
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/admin/login`} />
          ) : (
            <>
              <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a
                  className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
                  href="./"
                >
                  React-Firebase CMS
                </a>

                {user ? (
                  <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                      <NavLink className="nav-link px-3" onClick={logout}>
                        Sign out
                      </NavLink>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </header>

              <div className="container-fluid">
                <div className="row">
                  <nav
                    id="sidebarMenu"
                    className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                  >
                    <div className="position-sticky pt-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="./"
                          >
                            <span data-feather="home"></span>
                            Dashboard
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./">
                            <span data-feather="file"></span>
                            Posts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./">
                            <span data-feather="shopping-cart"></span>
                            Users
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>

                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <h1 className="h2">Dashboard</h1>

                    <div className="table-responsive">
                      <table className="table table-striped table-sm">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1,001</td>
                            <td>random</td>
                            <td>data</td>
                            <td>placeholder</td>
                            <td>text</td>
                          </tr>
                          <tr>
                            <td>1,002</td>
                            <td>placeholder</td>
                            <td>irrelevant</td>
                            <td>visual</td>
                            <td>layout</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </main>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Home;
