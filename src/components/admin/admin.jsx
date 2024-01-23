import { Routes, Route } from "react-router-dom";
import Header from './header.jsx';
import Footer from './footer.jsx';
import Login from './login.jsx';
import Auth from './auth.jsx';

/* 「Link」をimport↓ */



import Dashboard from './dashboard.jsx';
import User from './user.jsx';

const Admin = () => {


  return (
    <div>
      <Header /> 

    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='' element={<Dashboard />} />
      <Route path='user' element={<User />} />
    </Routes>

    <Footer />
    </div>
  );
};

export default Admin;