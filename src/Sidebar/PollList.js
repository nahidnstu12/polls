import React from 'react'
import {ListGroup,ListGroupItem}  from 'reactstrap';

function PollList({polls,selectPoll}) {
    return (
       <ListGroup>
           {polls.map(poll => (
               <ListGroupItem key={poll.id} style={{ cursor: "pointer",fontWeight:"600"}} title={poll.title} onClick={()=> selectPoll(poll.id)} className="text-primary" >
                {poll.title.length > 35 ? poll.title.substr(0,35)+"..." : poll.title}
               </ListGroupItem>
           ))}
       </ListGroup>
    )
} 
export default PollList
