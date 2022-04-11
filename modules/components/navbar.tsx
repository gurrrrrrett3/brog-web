import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function GlobalNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Broglands Nation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://discord.gg/6zgUqwk4pD">Discord</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Logged in as: <a href="/me">Test</a> 
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
