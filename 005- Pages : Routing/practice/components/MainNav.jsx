import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";

export default function MainNav() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
                        <Link href="/about" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>
                        <Link href="/dashboard" passHref legacyBehavior><Nav.Link>Dashboard</Nav.Link></Link>
                        <Link href="/products" passHref legacyBehavior><Nav.Link>Products</Nav.Link></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}