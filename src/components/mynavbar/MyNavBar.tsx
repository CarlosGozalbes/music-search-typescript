import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Image,
  Form,
} from "react-bootstrap";
import shazam_logo from "../../assets/Shazam-Logo.png";
import { FormEvent, useState } from "react";
const MyNavBar = () => {

  const [keyWordSearch, setKeyWordSearch] = useState("");
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("bravo!");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="navigation-bar">
      <Navbar.Brand href="#home">
        <Image
          src={shazam_logo}
          alt="job search logo"
          className="mr-3"
          height={60}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="d-flex justify-content-between navbarcollapse"
      >
        <Nav className="me-auto">
          <Nav.Link href="#deets" className="mr-3 navigation-link">
            MY LIBRARY
          </Nav.Link>
          <Nav.Link href="#deets" className="mr-3 navigation-link">
            APPS
          </Nav.Link>
          <Nav.Link href="#deets" className="mr-3 navigation-link">
            CHARTS
          </Nav.Link>
        </Nav>
        <Nav>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search music..."
              className="mr-4 search-input"
              value={keyWordSearch}
              onChange={(e) => setKeyWordSearch(e.target.value)}
            />
            <input
              type="submit"
              value={"search music"}
              className="searchoffersbutton"
            />
          </form>
          <Nav.Link href="#deets" className="mr-3 navigation-link">
            DOWNLOAD APP
          </Nav.Link>
          <Nav.Link href="#memes" className="ml-3 navigation-link">
            CONNECT APPLE MUSIC
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNavBar;
