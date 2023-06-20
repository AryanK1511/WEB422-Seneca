import React from "react";
import { useAtom } from "jotai";
import { nameAtom, ageAtom } from "@/store";

export default function F() {
    const [ name, setName ] = useAtom(nameAtom);
    const [ age, setAge ] = useAtom(ageAtom);
    return (
        <>
            <br />
            <h2>Component F - CHILD</h2>
            {(name != "" && age > 0) && <div>{ name } is { age } years old</div>}
            {/* <div>{ name } is { age } years old</div> */}
            <br />
        </>
    );
}