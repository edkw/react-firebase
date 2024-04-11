import { Routes, Route } from "react-router-dom";
import Header from './header.jsx';
import Footer from './footer.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Index from './index.jsx';

/* 「Link」をimport↓ */



//import Dashboard from './dashboard.jsx';
//import User from './user.jsx';

const Front = () => {

console.log('real front');
  return (

    <Routes>
      <Route path='' element={<Index />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact message="Hello Contact"/>} />
    </Routes>

  );
};

export default Front;