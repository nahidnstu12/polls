import React,{useState} from 'react';
import {Button, Form, FormGroup,Input} from 'reactstrap';
import AddPollModal from './AddPollModal';

function Sidebar() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Form inline>
                <FormGroup className="mr-2">
                    <Input type="text" name="serach" placeholder="Search Polls"></Input>

                </FormGroup>
                {/* <Button color="primary" modal={modal} onClick={toggle}>Add</Button> */}
                <AddPollModal modal={modal} toggle={toggle}/>
            </Form>
            <div className="mt-5">
                <h3>Lists of polls</h3>

            </div>
        </div>
    )
}

export default Sidebar;
