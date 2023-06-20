import React from "react";
import { useAtom } from "jotai";
import { nameAtom, ageAtom } from "@/store";

export default function E() {
    const [ name, setName ] = useAtom(nameAtom);
    const [ age, setAge ] = useAtom(ageAtom);
    return (
        <>
            <br />
            <h2>Component E - CHILD</h2>
            <button onClick={() => {
                setName("Aryan");
                setAge(19)
            }}>GO</button>
            <br />
        </>
    );
}