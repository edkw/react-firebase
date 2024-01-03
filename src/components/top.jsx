import { Routes, Route } from "react-router-dom";
import Header from './header.jsx';
import Footer from './footer.jsx';
import Login from './about.jsx';
//import Auth from './auth.jsx';

/* 「Link」をimport↓ */



//import Dashboard from './dashboard';
//import User from './user';

const Admin = () => {
  

  return (
<div>
      <Routes>

        <Route path='/admin/login' element={<Login/>} />

      </Routes>
      </div>

  );
};

export default Admin;