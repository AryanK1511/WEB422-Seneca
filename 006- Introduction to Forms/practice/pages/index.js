import React from "react";
import StudentForm from "@/components/StudentForm";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <h1 className="main-heading">Create Student</h1><br /><br />
      <StudentForm />
    </Container>
  )
}
