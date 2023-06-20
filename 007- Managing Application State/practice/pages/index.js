import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import B from "@/components/B";
import C from "@/components/C";

export default function Home() {
  return (
    <>
      <h1>React State Management - Context API</h1>
      <h3>This is the parent - Component A</h3>
      <B />
      <C />
    </>
  )
}
