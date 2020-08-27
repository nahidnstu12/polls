import React,{useState} from 'react';
import { Form, FormGroup,Input,Button} from 'reactstrap';
import PollList from './PollList';
import PollModal from './AddPollModal';

function Sidebar({polls,selectPoll,handleSearch,submit}) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Form inline>
                <FormGroup className="mr-2">
                    <Input type="search" name="search" placeholder="Search Polls" 
                         onChange={e => handleSearch(e.target.value.toLowerCase())} 
                        />
                </FormGroup>
                <Button color="success" onClick={toggle}>Add Poll</Button>
                    <PollModal modal={modal} toggle={toggle} submit={submit} btnValue="Submit Poll" header="Create A New Poll"/>
                
            </Form>
            <div className="mt-5">
                <h3>Lists of polls</h3>
                <PollList polls={polls} selectPoll={selectPoll}/>
            </div>
        </div>
    )
}

export default Sidebar;
