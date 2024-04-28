import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FirebaseConfig.js";
/* 「Link」をimport↓ */
import { Navigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  });

  return (
    <>
      {!loading && (
        <>
          {user ? (
            <Navigate to={`/admin`} />
          ) : (
            <>
              <main id="container">
                <form onSubmit={handleSubmit} id="login_form">
                  {/*<!-- FORM HEADER -->*/}
                  <div id="form_header">
                    <h1>Login</h1>
                  </div>

                  {/*<!-- INPUTS -->*/}
                  <div id="inputs">
                    {/*<!-- EMAIL -->*/}
                    <div class="input-box">
                      <label for="email">
                        E-Mail
                        <div class="input-field">
                          <i class="fa-solid fa-envelope"></i>
                          <input
                            name="email"
                            type="email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                          />
                        </div>
                      </label>
                    </div>
                    {/*<!-- PASSWORD -->*/}
                    <div class="input-box">
                      <label for="password">
                        Password
                        <div class="input-field">
                          <i class="fa-solid fa-key"></i>
                          <input
                            name="password"
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                          />
                        </div>
                      </label>
                    </div>
                  </div>

                  {/*<!-- LOGIN BUTTON -->*/}
                  <button type="submit" id="login_button">
                    Login
                  </button>
                </form>
              </main>

              <h1>ログインページaaaa</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>メールアドレス</label>
                  <input
                    name="email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label>パスワード</label>
                  <input
                    name="password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <button>ログイン</button>
                {/* ↓リンクを追加 */}
                <p>
                  新規登録は<Link to={`/register/`}>こちら</Link>
                </p>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Login;
