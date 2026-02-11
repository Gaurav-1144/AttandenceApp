import { Button, Card, Form } from "react-bootstrap";
import { useState } from "react";


function Login() {
    const [formData, setformData] = useState({
        email: "",
        password: "",
        role:"EMPLOYEE"

    })

    const handleChange = (e) => {
        //It updates one field inside your formData state object when user types in an input.
        // It keeps old values and changes only the field that triggered the event.
        setformData({ ...formData, [e.target.name]: e.target.value, }) // ...formData (Spread operator)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
    } 
    return (
        <div>
            <Card style={{ width: "50rem" }} className="mx-auto mt-5">
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ textAlign: "left", display: "block", fontWeight: "900" }}>Enter Email ID</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} required
                                onChange={handleChange} placeholder="Enter Email ID"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ textAlign: "left", display: "block", fontWeight: "900" }}>Enter Password</Form.Label>
                            <Form.Control type="Password" name="password" value={formData.password} required onChange={handleChange} placeholder="Enter Password"></Form.Control>
                        </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicRole">
                            <Form.Label style={{ textAlign: "left", display: "block", fontWeight: "900" }}>Select Role</Form.Label>
                            <Form.Select aria-label="Default select example" name="role" value={formData.role} onChange={handleChange}>
                                <option value="ADMIN" >Admin</option>
                                <option value="EMPLOYEE">Employee</option>
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit" variant="success">Login</Button>
                    </Form>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;