import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import E from "@/components/E";
import F from "@/components/F";

export default function Home() {
  return (
    <>
      <h1>React State Management - Jotai</h1>
      <h3>This is the parent - Component A</h3>
      <E />
      <F />
    </>
  )
}
