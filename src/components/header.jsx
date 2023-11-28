import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import {
    useNavigate,
    Navigate
} from "react-router-dom";

function Header() {
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
        navigate("/login/");
    }

    return (
        <>
            {/*<!-- Responsive navbar-->*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link')} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link')} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link')} to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link')} to="/posts">Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link')} to="/terms">Terms</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <>
                {!loading && (
                    <>
                        {!user ? (
                            <Navigate to={`/login/`} />
                        ) : (
                            <>
                                <h1>マイページ</h1>
                                <p>{user?.email}</p>
                                <button onClick={logout}>ログアウト</button>
                            </>
                        )}
                    </>
                )}
            </>
            {/*<!-- Page header with logo and tagline-->*/}
            <header className="py-5 bg-light border-bottom mb-4">
                <div className="container">
                    <div className="text-center my-5">
                        <h1 className="fw-bolder">Welcome to Blog Home!</h1>
                        <p className="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;