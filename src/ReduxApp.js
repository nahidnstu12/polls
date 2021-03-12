import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadPolls, addNewPoll } from './Redux/pollActions';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './Sidebar/sidebarComponent';
import { addPoll} from './data'
import shortid from 'shortid';

const ReduxApp = ({loadPolls, addNewPoll, ...props}) => {
  const [polls, setPolls] = useState([]);
  const [poll,setPoll] = useState({...props.poll})

  useEffect(() => {
    if(polls.length === 0){
      loadPolls()
    }
    setPolls([...props.polls])
    setPoll(props.poll)

  }, [props.polls,props.poll]);


  function handleChange(event) {
    const { name, value } = event.target;
    setPoll((prevPoll) => ({
      ...prevPoll,
      [name]:  value,
    }));
  }

  const handleSave = event => {
    event.preventDefault()
    addNewPoll(poll)
  }

  return (
    <Container className='my-5'>
      <Row>
        <Col md={4}>
          <Sidebar
            polls={polls}
            submit={handleSave}
            handleChange={handleChange}
            poll={poll}
          />
        </Col>
        
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    polls : state.polls,
    poll: {
      id:shortid.generate(),
      ...addPoll
    }
  };
};
const mapDispatchToProps = {
  loadPolls,
  addNewPoll,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
