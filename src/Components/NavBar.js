import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import { useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";




function NavBar(props) {
  const navigate=useNavigate();

  function clickInstallApp(){
    navigate("/installapp")
  }

  function goToHome(){
    navigate("/");
  }
  useEffect(() => {    
  }, [props]);
  return (
    <>
      <Navbar expand="lg" id={styles.nav} data-bs-theme="dark" breakpoints="sm">
        <a
          className="navbar-brand"
          href="#"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Spotify">
          <i
            className="bi bi-spotify text-white fs-1"
            id={styles.spotifyIcon}></i>
        </a>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <button
                type="button"
                id={styles.homeIcon}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Home"
                onClick={goToHome}>
                <i className="bi bi-house-door-fill text-white"></i>
              </button>

              <Form className="d-flex">
                <i className="bi bi-search" id={styles.serch_icon}></i>
                <Form.Control
                  type="search"
                  placeholder="What do you want to play?"
                  className="me-2"
                  aria-label="Search"
                  id={styles.nav_search}
                />
              </Form>

              <Nav.Link href="#">
                <span id={styles.browseIcon}>
                  {" "}
                  | <i className="bi bi-archive"></i>
                </span>
              </Nav.Link>
              {/* ---------------------------------------------------------------- */}

              {/* ----------------------------------------------------------------- */}
              <Link to="/explorepremium">
                <button
                  id={styles.nav_button}
                  type="button"
                  className="btn btn-light"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Upgrade to Premium">
                  Explore Premium
                </button>
              </Link>
              <Nav.Link
                id={styles.spanTxt}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Install Now"
                onClick={clickInstallApp}>
                <i className="bi bi-file-arrow-down"></i>
                <span>Install App</span>
              </Nav.Link>

              <Nav.Link
                href="#"
                id={styles.icon}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Whats's New">
                <i className="bi bi-bell text-white"></i>
              </Nav.Link>

              <Nav.Link
                href="#"
                id={styles.icon}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Friend Activity">
                <i className="bi bi-person text-white"></i>
                <i className="bi bi-person text-white"></i>
              </Nav.Link>

              <div
                className="dropdown"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Sarthak Darade"
                id={styles.profileIcon}>
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i className="bi bi-person-circle"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
                  <li
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Account">
                    <a className="dropdown-item">Account</a>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="dropdown-item"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explorepremium"
                      className="dropdown-item"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Upgrad to Premium">
                      Upgrade to Premium
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/support"
                      className="dropdown-item"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Support">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/installapp"
                      className="dropdown-item"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Download">
                      Download
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/seeting"
                      className="dropdown-item"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Setting">
                      Setting
                    </Link>
                  </li>
                  <div className="dropdown-divider"></div>
                  <Link
                    to="/logout"
                    className="dropdown-item"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Log out">
                    Log out
                  </Link>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
