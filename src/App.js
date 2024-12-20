//import logo from './logo.svg';
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Routes, Route } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Posts from './components/posts';
import Post from './components/post';
import NoMatch from './components/nomatch';
import Terms from './components/terms';
import Register from './components/register';
import Dashboard from './components/admin/dashboard';
import Login from './components/admin/login';
import APosts from './components/admin/posts';
import Users from './components/admin/users';
import Blog from './components/blog';
import Chat from './components/chat';

function App() {
    return (
        <div>
            <Routes basename={process.env.PUBLIC_URL}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact message="Hello Contact" />} />
                <Route path="/posts" element={<Posts />} >
                    <Route path=":postId" element={<Post />} />
                </Route>
                <Route path="/terms" element={<Terms />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/*" element={<NoMatch />} />
                <Route path="/register" element={<Register />} ></Route>

                <Route path="/admin" element={<Dashboard />} >
                    <Route path="posts" element={<APosts />} />
                    <Route path="users" element={<Users />} />
                </Route>
                <Route path="/admin/login" element={<Login />} />

            </Routes>

        </div>

    );
}

export default App;
