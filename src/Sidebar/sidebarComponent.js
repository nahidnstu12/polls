import React,{useState} from 'react';
import { Form, FormGroup,Input} from 'reactstrap';
import PollModal from './AddPollModal';
import PollList from './PollList';

function Sidebar({polls,selectPoll,handleSearch,submit}) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
   
    return (
        <div>
            <Form inline>
                <FormGroup className="mr-2">
                    <Input type="search" name="search" placeholder="Search Polls" 
                         onChange={e => handleSearch(e.target.value)} 
                        />
                </FormGroup>
                <PollModal modal={modal} toggle={toggle} submit={submit}/>
            </Form>
            <div className="mt-5">
                <h3>Lists of polls</h3>
                <PollList polls={polls} selectPoll={selectPoll}/>

            </div>
        </div>
    )
}

export default Sidebar;
