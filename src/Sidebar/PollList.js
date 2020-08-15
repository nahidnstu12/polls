import React from 'react'
import {ListGroup,ListGroupItem}  from 'reactstrap';

function PollList({polls,selectPoll}) {
    
    return (
       <ListGroup>
           {polls.map(poll => (
               <ListGroupItem key={poll.id} style={{ cursor: "pointer"}} title={poll.title} onClick={()=> selectPoll(poll.id)}>
                {poll.title.length > 30 ? poll.title.substr(0,30)+"..." : poll.title}
               </ListGroupItem>
           ))}
       </ListGroup>
    )
} 
export default PollList
