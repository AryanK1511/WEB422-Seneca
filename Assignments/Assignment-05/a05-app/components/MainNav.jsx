import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainNav() {
    const router = useRouter();
    const [ searchText, setSearchText ] = useState("");
    const [ isExpanded, setIsExpanded ] = useState(false);

    // As the input to the search bar changes, this function updates the search text in real time using state
    const updateSearchText = (event) => {
        setSearchText(event.target.value)
    }

    // When the user clicks on the search button, the form is submitted and the app redirects the user to the custom URL requested
    const handleSubmit = (event) => {
        setIsExpanded(false);
        event.preventDefault();
        console.log(searchText);
        if (searchText.trim() != '') {
            router.push(`/artwork?title=true&q=${searchText}`);
        }
        setSearchText("");
    }

    return (
        <>
            <Navbar expand="lg" className="bg-dark navbar-dark fixed-top nav-bar" expanded={isExpanded}>
                <Container>
                    <Navbar.Brand>Aryan Khurana</Navbar.Brand>
                    <Navbar.Toggle onClick={() => setIsExpanded(!isExpanded)} aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link href="/" passHref legacyBehavior><Nav.Link onClick={() => setIsExpanded(false)}>Home</Nav.Link></Link>
                        <Link href="/search" passHref legacyBehavior><Nav.Link onClick={() => setIsExpanded(false)}>Advanced Search</Nav.Link></Link>
                    </Nav>

                    {/* Form uses the idea of controlled components and keeps track of state */}
                    &nbsp;
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <Form.Control onChange={updateSearchText} type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button type='submit' variant="outline-success">Search</Button>
                    </Form>&nbsp;

                    <Nav>
                        <NavDropdown title="User Name" id="basic-nav-dropdown">
                        <Link href="/favourites" passHref legacyBehavior><Nav.Link><NavDropdown.Item onClick={() => setIsExpanded(false)} href="#action/3.1">Action</NavDropdown.Item></Nav.Link></Link>
                        </NavDropdown>
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /><br /><br /> 
        </>
    );
}