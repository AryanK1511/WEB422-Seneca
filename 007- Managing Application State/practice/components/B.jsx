import React, { useContext } from "react";
import { SetNameContext } from "@/pages/_app";

export default function B() {
    const setName = useContext(SetNameContext);
    const onButtonClick = () => {
        setName("Aryan");
    }

    return (
        <>
            <br />
            <h2>Component B - CHILD</h2>
            <button onClick={onButtonClick}>GO</button>
            <br />
        </>
    );
}