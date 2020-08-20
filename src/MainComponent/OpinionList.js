import React,{useState} from 'react'
import { Button, ListGroup,ListGroupItem } from 'reactstrap'

function OpinionList({poll}) {
    const [opinion,setOpinion] = useState([]);
   
    const handleOpinion = (id) =>{
        const filterdData = poll.opinions.filter(opt => opt.selectedOption === id);
        setOpinion(filterdData);
    }
    // need to improve live show 

    return (
        <>
        <h3 className="my-4 text-primary">Names of Perticipants</h3>
        <div className="d-flex">
            {poll.options.map(opt => (<Button color="info" key={opt.id} className="mx-2" onClick={()=>handleOpinion(opt.id)} >{opt.value}</Button>))}
        </div>
        <div>
            {opinion.map(opt => <ListGroup key={opt.id} className="mt-2">
                <ListGroupItem className="text-center text-danger">{opt.name}</ListGroupItem>
            </ListGroup>)}
        </div>
        </>
    )
}

export default OpinionList
