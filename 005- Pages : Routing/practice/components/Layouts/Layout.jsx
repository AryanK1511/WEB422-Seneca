import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from 'react-bootstrap';
import footer from "./Footer";

export default function Layout(props) {
    return(
        <>
            <Header />
            <br />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    );
}