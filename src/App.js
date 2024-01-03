//import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

//import Header from './components/header';
//import Footer from './components/footer';
//import Home from './components/front';
import About from './components/about';
import Contact from './components/contact';
import Posts from './components/posts';
import Post from './components/post';
import NoMatch from './components/nomatch';
import Terms from './components/terms';
import Register from './components/register';
//import Login from './components/admin';

import Admin from './components/top';
import Front from './components/front';

function App() {
    return (
        <div>

            {/*<Header />*/}

            <Routes>
            <Route path="/" element={<Front />} />
                <Route path="/admin/*" element={<Admin />} />
                
                {/*}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact message="Hello Contact" />} />
                <Route path="/posts" element={<Posts />} >
                    <Route path=":postId" element={<Post />} />
                </Route>
                <Route path="/terms" element={<Terms />} ></Route>
                <Route path="/*" element={<NoMatch />} />
                <Route path="/register" element={<Register />} ></Route>
                {/* </Routes><Route path="/login" element={<Login />} ></Route> */}

            </Routes>

            {/*<Footer />*/}

        </div>

    );
}

export default App;
