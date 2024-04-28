import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="./">
                <span data-feather="home"></span>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="./post">
                <span data-feather="file"></span>
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="./">
                <span data-feather="shopping-cart"></span>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
