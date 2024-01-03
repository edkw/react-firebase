import { Routes, Route } from "react-router-dom";
import Header from './header.jsx';
import Footer from './footer.jsx';
import Login from './../about.jsx';
import Auth from './auth.jsx';

/* 「Link」をimport↓ */



import Dashboard from './dashboard';
import User from './user';

const Admin = () => {
  

  return (
<div>
      <Routes>
        <Route path="/admin/" element={<Dashboard/>} />
        <Route path='/admin/login' element={<Login/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path='/admin/user' element={<User/>} />
      </Routes>
      </div>

  );
};

export default Admin;