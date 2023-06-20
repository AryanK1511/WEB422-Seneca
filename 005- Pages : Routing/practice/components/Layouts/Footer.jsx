import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <Container>
                <Link href="/" passHref legacyBehavior><Button variant="dark">Back Home</Button></Link>
                <br /><br />
                <p>&copy; 2023 All rights reserved.</p>
            </Container>
        </>
    );
}