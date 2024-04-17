import Header from "./../components/header";
import Footer from "./../components/footer";

function Home() {
  return (
    <>
      <Header />
      {/*<!-- Page content-->*/}
      <div className="container text-center">
        <div className="row  justify-content-md-center">
          {/*<!-- Blog entries-->*/}

          {/*<!-- Nested row for non-featured blog posts-->*/}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <a
              href="https://edkw.github.io/css-login/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <a
              href="https://edkw.github.io/js-digital-clock/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card card-minimal category-box text-center">
                <div className="card-body justify-content-center">
                  <i class="fa-solid fa-clock"></i>
                  <h4 className="card-title">Digital Clock</h4>
                </div>
              </div>
            </a>
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
            <a
              href="https://edkw.github.io/js-password-generator/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card card-minimal category-box text-center">
                <div className="card-body justify-content-center">
                  <i class="fa-solid fa-lock"></i>
                  <h4 className="card-title">Password Generator</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
