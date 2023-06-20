import React, { useContext } from "react";
import { NameContext } from "@/pages/_app";

export default function C() {
    const name = useContext(NameContext);
    const onButtonClick = () => {
        setName("Aryan");
    }

    return (
        <>
            <br />
            <h2>Component C - CHILD</h2>
            <p>{name}</p>
            <br />
        </>
    );
}