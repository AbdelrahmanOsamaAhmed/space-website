import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navagationbar() {
  const items = [
    { text: "00 HOME", to: "/" },
    { text: "01 DESTINATION", to: "/destination" },
    { text: "02 CREW", to: "/crew" },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("touchmove", onScroll);
    return () => window.removeEventListener("touchmove", onScroll);
  }, []);
  return (
    <Navbar
      expand="lg"
      bg={scrolled ? "dark" : ""}
      variant="dark"
      style={{
        position: "fixed",
        zIndex: "100",
        width: "100%",
      }}
    >
      <div
        className="d-flex justify-content-around"
        style={{ width: "100%", paddingLeft: "3.125rem" }}
      >
        <Navbar.Brand
          style={{ color: "#FFF", marginTop: "3.75rem", fontSize: "3rem" }}
          href="#home"
        >
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ color: "#FFF" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse style={{ color: "#FFF" }} id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            style={{
              backgroundColor: "rgba(151,151,151,0.07)",
              backdropFilter: "blur(25px)",
              height: "5.8125rem",
              display: "flex",
              alignItems: "center",
              marginTop: "2.5rem",
              paddingLeft: "7.6875rem",
            }}
          >
            {items.map((item) => (
              <Nav.Link>
                <Link
                  className="nav-link"
                  to={item.to}
                  style={{ color: "#FFFFFF", marginRight: "3.125rem" }}
                >
                  {item.text}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
