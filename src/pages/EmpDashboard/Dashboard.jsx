import { useState } from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";


function Dashboard() {
    const [hour, sethours] = useState("00");
    const [min, setmin] = useState("00")
    const [sec, setsec] = useState("00")
    const [post, setPost] = useState("Senior Software Developer")
    const [name, setName] = useState("Gaurav Singh")
    const [punchIn, setpunchIn] = useState(true)
    const [punchOut, setpunchout] = useState(false)
    return (
        <div>

            <Container >
                <Row>
                    <Col style={{ marginBottom: 100 }}>
                        <h1 style={{ fontWeight: 900, fontStyle: "italic" }}>Attendence Marking System</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Card>

                            <Card.Body>
                                <Image src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg" thumbnail />
                            </Card.Body>
                            <Card.Footer>
                                <h3>{name}</h3>
                                <h5>[{post}]</h5>
                                <h7 style={{ color: "green", fontWeight: 900 }}>Active Now</h7>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={8}>
                        <Card className="shadow-lg border-0 rounded-4 overflow-hidden">

                            <Card.Body
                                className="text-center"
                                style={{
                                    backgroundImage:
                                        'url("https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60241.jpg")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    padding: "8rem",
                                }}
                            >
                                {/* Clock */}
                                <Row className="justify-content-center align-items-center mb-2">

                                    <Col xs="auto">
                                        <h1 className="fw-bold text-dark display-4">{hour}</h1>
                                    </Col>

                                    <Col xs="auto">
                                        <h1 className="fw-bold text-secondary">:</h1>
                                    </Col>

                                    <Col xs="auto">
                                        <h1 className="fw-bold text-dark display-4">{min}</h1>
                                    </Col>

                                    <Col xs="auto">
                                        <h1 className="fw-bold text-secondary">:</h1>
                                    </Col>

                                    <Col xs="auto">
                                        <h1 className="fw-bold text-dark display-4">{sec}</h1>
                                    </Col>

                                </Row>


                                <Row className="justify-content-center g-3">

                                    <Col xs="auto">
                                        <Button
                                            variant="success"
                                            size="lg"
                                            className="px-4 shadow"
                                        >
                                            Punch In
                                        </Button>
                                    </Col>

                                    <Col xs="auto">
                                        <Button
                                            variant="danger"
                                            size="lg"
                                            className="px-4 shadow"
                                        >
                                            Punch Out
                                        </Button>
                                    </Col>

                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;