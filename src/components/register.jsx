/* Register.js */

/* useStateをimport↓ */
import React, { useState } from "react";

const Register = () => {
  /* ↓state変数を定義 */
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <>
      <h1>新規登録</h1>
      <form>
        <div>
          <label>メールアドレス</label>
          {/* ↓「value」と「onChange」を追加 */}
          <input
            name="email"
            type="email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          {/* ↓「value」と「onChange」を追加 */}
          <input
            name="password"
            type="password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <button>登録する</button>
      </form>
    </>
  );
};

export default Register;