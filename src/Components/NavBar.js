import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <>
        <Navbar
          expand="lg"
          id={styles.nav}
          data-bs-theme="dark"
          breakpoints="sm"
        >
          <a
            class="navbar-brand"
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Spotify"
          >
            <i
              class="bi bi-spotify text-white fs-1"
              id={styles.spotifyIcon}
            ></i>
          </a>
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScrol
              >
                <button
                  type="button"
                  class="btn btn-light"
                  id={styles.homeIcon}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Home"
                >
                  <i class="bi bi-house-door-fill text-white "></i>
                </button>

                <Form className="d-flex">
                  <i class="bi bi-search" id={styles.serch_icon}></i>
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
                    | <i class="bi bi-archive"></i>
                  </span>
                </Nav.Link>
                <button
                  id={styles.nav_button}
                  type="button"
                  class="btn btn-light"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Upgrade to Premium"
                >
                  Explore Premium
                </button>

                <Nav.Link
                  href="#"
                  id={styles.spanTxt}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Install Now"
                >
                  <i class="bi bi-file-arrow-down"></i>
                  <span>Install App</span>
                </Nav.Link>

                <Nav.Link
                  href="#"
                  id={styles.icon}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Whats's New"
                >
                  <i class="bi bi-bell text-white "></i>
                </Nav.Link>

                <Nav.Link
                  href="#"
                  id={styles.icon}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Friend Activity"
                >
                  <i class="bi bi-person  text-white"></i>
                  <i class="bi bi-person  text-white"></i>
                </Nav.Link>

                {/* <button
                  type="button"
                  class="btn btn-light"
                  id={styles.profileIcon}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Sarthak Darade"
                ></button> */}

                {/* <div class="dropdown" id={styles.profileIcon}>
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Sarthak Darade"
                  >
                    <i class="bi bi-person-circle"></i>
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div> */}

                <div
                  class="dropdown"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Sarthak Darade"
                  id={styles.profileIcon}
                >
                  <button
                    class="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-person-circle"></i>
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end"
                    id={styles.userIconDropdown}
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Account
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Upgrade to Premium
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Support
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Download
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Log Out
                    </a>
                  </ul>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </>
  );
}

export default NavBar;
