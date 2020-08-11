import React from 'react'
import {Form,FormGroup,CustomInput,Row,Col, Button,Badge, Label,Input} from 'reactstrap'
function Poll() {
    return (
        <div>
            <h3>What is your favourite programming language?</h3>
            <p>There are lot of programming languages.Among them what is your favourite</p>
            <Row className="mb-5 mt-4">
                <Col md={6}>
                    <h3>Options</h3>
                </Col>
                <Col>
                    <Button color="warning" className="mr-2">Edit</Button>
                    <Button color="danger">Delete</Button>
                </Col>
            </Row>
            <Form>
            <Row>
                <Col>
                    <FormGroup>
                    <CustomInput type="radio"  name="customRadio" label="Java" />
                    </FormGroup>
                </Col>
                <Col>
                    <Badge color="primary" className="m-2 p-3" style={{ fontSize: "100%" }}>7</Badge>
                    <Badge color="danger" className="p-3" style={{ fontSize: "100%" }}>25%</Badge>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                    <CustomInput type="radio"  name="customRadio" label="Javascript" />
                    </FormGroup>
                </Col>
                <Col>
                    <Badge color="primary" className="m-2 p-3" style={{ fontSize: "100%" }}>9</Badge>
                    <Badge color="danger" className="p-3" style={{ fontSize: "100%" }}>55%</Badge>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                    <CustomInput type="radio"  name="customRadio" label="Python" />
                    </FormGroup>
                </Col>
                <Col>
                    <Badge color="primary" className="m-2 p-3" style={{ fontSize: "100%" }}>15</Badge>
                    <Badge color="danger" className="p-3" style={{ fontSize: "100%" }}>75%</Badge>
                </Col>
            </Row>
            
                <FormGroup>
                    <Label>Enter Your Name</Label>
                    <Input type="text" name="perticipants" placeholder="Your name"/>
                    <Button color="success" className="my-2">Submit Your Opinion</Button>
                </FormGroup>
            
            </Form>
            
            
        </div>
    )
}

export default Poll
