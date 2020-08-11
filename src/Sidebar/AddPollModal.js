import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup,Input,Row,Col } from 'reactstrap';

function AddPollModal({modal,toggle}) {

    

    return (
        <div>
            <Button color="success" onClick={toggle}>Add Poll</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create A New Poll</ModalHeader>
                <ModalBody>
                <Form>
                <FormGroup>
                    <Input type="text" placeholder="Give a title" className="my-2"/>
                    <Input type="textarea" placeholder="Give a description" />
                </FormGroup>
                <FormGroup>
                   <div> <span>Enter a option</span> <Button color="info" className="ml-3">Add New Options</Button> </div> 
                   <Row className="my-2">
                   <Col>
                        <Input type="text" />
                   </Col>
                        <Button color="danger" disabled>Delete</Button>
                   </Row>
                   <Row className="my-2">
                   <Col>
                        <Input type="text" />
                   </Col>
                        <Button color="danger" disabled>Delete</Button>
                   </Row>
                   
                   
                  
                </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>Create Poll</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddPollModal
