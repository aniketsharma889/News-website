import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn} = useSelector((state) => state.user);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NewsSite
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/category/world">
                    World
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/politics">
                    Politics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/business">
                    Business
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/technology">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/science">
                    Science
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSearch}>
          <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button className="btn btn-outline-success" type="submit">
    <i className="bi bi-search me-2"></i>
  </button>
          </form>

          <ul className="navbar-nav ms-3">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle text-white"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User Actions
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow-lg p-3" aria-labelledby="navbarDropdown">
                <li>
                  <button
                    className="dropdown-item text-danger fw-bold"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                  </button>
                </li>
                <li>
                  <Link className="dropdown-item text-success fw-bold" to="/add-news">
                    <i className="bi bi-plus-circle me-2"></i>Add News
                  </Link>
                </li>
              </ul>
            </li>
            
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
