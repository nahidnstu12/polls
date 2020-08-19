import React, { useState } from 'react'
import {Form,FormGroup,CustomInput,Row,Col, Button,Badge, Label,Input,FormFeedback} from 'reactstrap';
import PollModal from '../Sidebar/AddPollModal';

function Poll({poll,getOpinion,deletePoll,submit}) {

    const [name,setName] = useState('');
    const [selectedOption,setOption] = useState('');
    const [errors,setErrors] = useState({});
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleEditPoll = () =>{

    }
    const handleSubmit = e =>{
        e.preventDefault();
        const {errors,isValid} = validate();
        if(isValid){
            getOpinion ({
                pollId:poll.id,
                name,
                selectedOption
            })

            // Resetting
           e.target.reset();
           setName('');
           setOption('');
           setErrors({})
        }else{
            setErrors(errors);
        }

    }
    const validate = () =>{
        const errors = {};
        if(!selectedOption){
            errors.selectOption = "Please Select Option";
        }
        if(!name){
            errors.name = "Please provide a name";
        }

        return {
            errors,
            isValid:Object.keys(errors).length === 0
        }
    }

    
    return (
        <div>
        
            <h3>{poll.title}</h3>
            <p>{poll.description}</p>
            <Row className="mb-5 mt-4">
                <Col md={6}>
                    <h3>Options</h3>
                </Col>
                <Col>
                    <Button color="warning" className="mr-2" onClick={toggle}>Edit</Button>
                    <Button color="danger" onClick={()=> deletePoll(poll.id)}>Delete</Button>
                </Col>
            </Row>
            <PollModal modal={modal} toggle={toggle} submit={submit} btnValue="Update Poll" header="Update Poll Form" />

            <Form onSubmit = {handleSubmit}>
            {poll.options.map((opt)=>(
            <Row key={opt.id}>
                <Col>
                    <FormGroup>
                    <CustomInput  type="radio"  name="selectedOption" id={opt.id} onChange={(e)=>setOption(e.target.value)} label={opt.value} value={opt.id} invalid={errors.selectOption ? true : false}/>
                    </FormGroup>
                </Col>
                <Col>
                    <Badge color="primary" className="m-2 p-3" style={{ fontSize: "100%" }}>{opt.vote}</Badge>
                    <Badge color="danger" className="p-3" style={{ fontSize: "100%" }}>{poll.totalVote > 0 ? Math.ceil((100*opt.vote) / poll.totalVote): 0 }%</Badge>
                </Col>
                {errors.selectOption && <FormFeedback>{errors.selectOption}</FormFeedback>}

            </Row>
            ))}
            
            <FormGroup>
                <Label>Enter Your Name</Label>
                <Input type="text" name="name" placeholder="Your name" onChange={(e)=>setName(e.target.value)} invalid={errors.name ? true : false}/>
                {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
                <Button color="success" className="my-2">Submit Your Opinion</Button>
            </FormGroup>
            
            </Form>
            
            
        </div>
    )
}

export default Poll
