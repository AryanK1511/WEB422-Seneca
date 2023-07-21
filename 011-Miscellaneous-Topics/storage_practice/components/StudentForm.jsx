import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';

export default function StudentForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          name: '',
          email: '',
          bio: '',
          level: '',
          gpa: '',
          date: '',
          hobbies: [],
          major: ''
        },
    });

    function submitForm(data) {
        const cookies = new Cookies();
        cookies.set('name', data.name, { path: '/' });
        cookies.set('email', data.email, { path: '/' });
        window.localStorage.setItem('bio', data.bio);
        console.log(data);
    }

    return (
        <Container>
            <Form noValidate onSubmit={handleSubmit(submitForm)}>
            <Row className="mb-3">

                {/* ========== NAME ========== */}
                <Form.Group as={Col} md="6">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        {...register("name", { required: "Name is required", maxLength: { value: 20, message: "Name can be a maximum of 20 characters long" } })} 
                        type="text" 
                        placeholder="Your name" 
                    />
                    {errors.name && <div className="text-danger">{errors.name.message}</div>}
                </Form.Group>

                {/* ========== EMAIL ========== */}
                <Form.Group as={Col} md="6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        {...register("email", { required: "Email is required", maxLength: { value: 50, message: "Email can be a maximum of 50 characters long" } })}
                        type="email"
                        placeholder="Your email"
                    />
                    {errors.email && <div className="text-danger">{errors.email.message}</div>}
                </Form.Group>

            </Row>
            <Row className="mb-3">

                {/* ========== BIO ========== */}
                <Form.Group as={Col}>
                    <Form.Label>Biographical Statement</Form.Label>
                    <Form.Control
                        {...register("bio", { required: "Biographical statement is required", maxLength: { value: 20, message: "Biographical statement can be a maximum of 20 characters long" } })}
                        as="textarea"
                        rows={2}
                        placeholder="A bit about you"
                    />
                    {errors.bio && <div className="text-danger">{errors.bio.message}</div>}
                </Form.Group>

            </Row>
            <Row className="mb-3">

                {/* ========== LEVEL ========== */}
                <Form.Group as={Col} md="4">
                    <Form.Label>Level</Form.Label>
                    <Form.Select {...register("level", { required: "Level is required" })}>
                        <option value="">Select level</option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </Form.Select>
                    {errors.level && <div className="text-danger">{errors.level.message}</div>}
                </Form.Group>

                {/* ========== GPA ========= */}
                <Form.Group as={Col} md="4">
                    <Form.Label>GPA</Form.Label>
                    <Form.Control
                        {...register("gpa", { required: "GPA is required" })}
                        type="number"
                        placeholder="GPA"
                    />
                    {errors.gpa && <div className="text-danger">{errors.gpa.message}</div>}
                </Form.Group>

                {/* ========== DATE ========== */}
                <Form.Group as={Col} md="4">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        {...register("date", { required: "Date is required" })}
                        type="date"
                    />
                    {errors.date && <div className="text-danger">{errors.date.message}</div>}
                </Form.Group>

            </Row>
            <Row className="mb-3">

                {/* ========== HOBBIES ========== */}
                <Form.Group>
                    <Form.Label>Hobbies</Form.Label>
                    <div className="box-options">
                        <Form.Check type="checkbox" label="Surfing" value="surfing" {...register("hobbies", { required: "Select at least one hobby" })} />
                        <Form.Check type="checkbox" label="Running" value="running" {...register("hobbies", { required: "Select at least one hobby" })} />
                        <Form.Check type="checkbox" label="Biking" value="biking" {...register("hobbies", { required: "Select at least one hobby" })} />
                        <Form.Check type="checkbox" label="Paddling" value="paddling" {...register("hobbies", { required: "Select at least one hobby" })} />
                    </div>
                    {errors.hobbies && <div className="text-danger">{errors.hobbies.message}</div>}
                </Form.Group>

            </Row>
            <Row className="mb-3">

                {/* ========== MAJOR ========== */}
                <Form.Group>
                    <Form.Label>Select Major</Form.Label>
                    <div className="box-options">
                        <Form.Check
                            {...register("major", { required: "Major is required" })}
                            type="radio"
                            label="Physics"
                            name="major"
                            value="physics"
                        />
                        <Form.Check
                            {...register("major", { required: "Major is required" })}
                            type="radio"
                            label="Maths"
                            name="major"
                            value="maths"
                        />
                        <Form.Check
                            {...register("major", { required: "Major is required" })}
                            type="radio"
                            label="Chemistry"
                            name="major"
                            value="chemistry"
                        />
                        <Form.Check
                            {...register("major", { required: "Major is required" })}
                            type="radio"
                            label="Computer Science"
                            name="major"
                            value="computer science"
                        />
                    </div>
                    {errors.major && <div className="text-danger">{errors.major.message}</div>}
                </Form.Group>

            </Row>
            <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}