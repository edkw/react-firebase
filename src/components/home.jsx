import { NavLink } from "react-router-dom";
import Header from "./../components/header";
import Footer from "./../components/footer";
import LoginModal from "./login_modal";
import PasswordModal from "./password_modal";
import ClockModal from "./clock_modal";
import "./main.css";
import React, { useState } from "react";

function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const ShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const ShowPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const [showClockModal, setShowClockModal] = useState(false);

  const ShowClockModal = () => {
    setShowClockModal(true);
  };

  return (
    <>
      <Header />
      {/*<!-- Page header with logo and tagline-->*/}
      <header className="py-3 bg-light border-bottom mb-4">
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder">Free Web Tools</h1>
            <p className="lead mb-0">To make any task easier</p>
          </div>
        </div>
      </header>
      {/*<!-- Page content-->*/}
      <div className="container text-center">
        <div className="row  justify-content-md-center">
          {/*<!-- Blog entries-->*/}

          {/*<!-- Nested row for non-featured blog posts-->*/}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <button onClick={ShowLoginModal} className="card-link">
              <div className="card card-minimal category-box text-center">
                <div className="card-body justify-content-center">
                  <i className="fa-solid fa-display"></i>
                  <h4 className="card-title">Login form</h4>
                  {/*<!-- <p className="card-text">Category with help articles about how to get started.</p> -->*/}
                  {/*<div className="author mt-3">
                    <small>5 articles by 1 author</small>
  </div>*/}
                </div>
              </div>
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <button onClick={ShowClockModal} className="card-link">
              <div className="card card-minimal category-box text-center">
                <div className="card-body justify-content-center">
                  <i className="fa-solid fa-clock"></i>
                  <h4 className="card-title">Digital Clock</h4>
                </div>
              </div>
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <a
              href="https://edkw.gitbook.io/memo/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card card-minimal category-box text-center">
                <div className="card-body justify-content-center">
                  <i class="fa-solid fa-book"></i>
                  <h4 className="card-title">Git Book</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <button onClick={ShowPasswordModal} className="card-link">
              <div className="card card-minimal category-box text-center">
                <div className="card-body justify-content-center">
                  <i className="fa-solid fa-lock"></i>
                  <h4 className="card-title">Password Generator</h4>
                </div>
              </div>
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <NavLink to="./posts">
              <button as="a" href="./posts" className="card-link">
                <div className="card card-minimal category-box text-center">
                  <div className="card-body justify-content-center">
                    <i className="fa-solid fa-table-list"></i>
                    <h4 className="card-title">Posts</h4>
                  </div>
                </div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <LoginModal
        showFlag={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        content="親から渡された値です。"
      />
      <PasswordModal
        showFlag={showPasswordModal}
        setShowPasswordModal={setShowPasswordModal}
        content="親から渡された値です。"
      />
      <ClockModal
        showFlag={showClockModal}
        setShowClockModal={setShowClockModal}
        content="親から渡された値です。"
      />

      <Footer />
    </>
  );
}

export default Home;
