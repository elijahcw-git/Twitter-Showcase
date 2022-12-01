import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navbaricon from "../Images/navbaricon.png";
import "./Navbar.css";

const TweetNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <span>
                <img
                    src={navbaricon}
                    alt="navbar icon"
                    className="nav-icon"
                ></img>
            </span>
            <div className="nav-header">Twitter Showcase App</div>
            <Container className="nav-container">
                <Nav variant="pills" className="navbar-links">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="../Showcase">
                        Tweet Search
                    </NavLink>
                    <NavLink className="nav-link" to="../Random">
                        Random Tweet
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default TweetNavbar;
