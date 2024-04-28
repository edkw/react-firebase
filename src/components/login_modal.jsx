import React from "react";

const LoginModal = (props) => {
  const modalContent = {
    position: "relative",
    background: "white",
    borderRadius: "3px",

    width: "80%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  };

  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const btnPos = {
    //margin: "20px 0px",
  };

  const closeLoginModal = () => {
    props.setShowLoginModal(false);
  };

  return (
    <>
      {props.showFlag && (
        <div id="overlay" onClick={closeLoginModal} style={overlay}>
          <div id="modalContent" style={modalContent}>
            <iframe
              title="LoginForm"
              src="https://edkw.github.io/css-login/"
              frameborder="0"
              height="80%"
              width="80%"
            ></iframe>

            <div>
              <button onClick={closeLoginModal} style={btnPos}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
