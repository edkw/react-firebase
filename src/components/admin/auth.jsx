import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../../FirebaseConfig.js";
import {
    useNavigate,
    Navigate
} from "react-router-dom";

function Auth() {
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
    }

    return (
        <>
                {!loading && (
                    <>
                    <h1>bbbb</h1>
                        {!user ? (
                            <>
                            {/*<h1>aaa</h1>*/}
                            <Navigate to={`/admin/login`} />
                            </>
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
    );
}

export default Auth;