import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function Registration() {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        role: "EMPLOYEE"

    })

    const handleChange = (e) => {
        // It updates one field inside your formData state object when user types in an input.
        // It keeps old values and changes only the field that triggered the event.
        setformData({ ...formData, [e.target.name]: e.target.value, }) // ...formData (Spread operator)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register Data:", formData);

    }
    return (
        <div>
            <Card style={{ width: "50rem" }} className="mx-auto mt-5">
                <Card.Header>Registration Page</Card.Header>
                <Card.Body>

                    <Form onSubmit={handleSubmit} method="post">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label style={{ textAlign: "left", display: "block", fontWeight: "900" }}>Enter Full Name</Form.Label>
                            <Form.Control type="text" name="name" value={formData.name}
                                onChange={handleChange} placeholder="Enter Full Name"></Form.Control>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ textAlign: "left", display: "block", fontWeight: "900" }}>Enter Email ID</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email}
                                onChange={handleChange} placeholder="Enter Email ID"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMobile">
                            <Form.Label style={{ textAlign: "left", display: "block", fontWeight: "900" }}>Enter Mobile Number</Form.Label>
                            <Form.Control type="number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Mobile Number"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ textAlign: "left", display: "block", fontWeight: "900" }}>Enter Password</Form.Label>
                            <Form.Control type="Password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRole">
                            <Form.Label style={{ textAlign: "left", display: "block", fontWeight: "900" }}>Select Role</Form.Label>
                            <Form.Select aria-label="Default select example" name="role" value={formData.role} onChange={handleChange}>
                                <option value="ADMIN" >Admin</option>
                                <option value="EMPLOYEE">Employee</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRole">
                            <Button variant="danger"
                                type="submit"
                            >
                                Register
                            </Button>
                        </Form.Group>
                    </Form>

                </Card.Body>
            </Card>


        </div>
    )
}

export default Registration;