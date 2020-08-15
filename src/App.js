import React,{useState,useEffect} from 'react';
import './App.css';
import {Container,Row,Col} from 'reactstrap';
import Sidebar from  './Sidebar/sidebarComponent';
import MainContent from './MainComponent/mainComponent';
import {Polls} from './data';
import shortid from 'shortid';


function App() {
	const [polls,setPolls] = useState([]);
	const [selectedPoll,setSelectedPoll] = useState({});
	const [searchTerm,setSearchTerm] = useState('');

	useEffect(()=>{
		setPolls(Polls);
	},[])
	const selectPoll = (pollId) =>{
		const poll = polls.find(p => pollId === p.id);
		setSelectedPoll(poll);
	}
	const handleSearch = val => {

	}
	const addNewPoll = poll => {
		poll.id = shortid.generate();
		poll.created = new Date();
		poll.totalVote = 0;
		poll.opinions = [];
		setPolls(polls.concat(poll))
	}

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Sidebar polls={polls} selectPoll= {selectPoll} handleSearch={handleSearch} submit={addNewPoll}

		  />
        </Col>
        <Col md={8}>
			{/* <MainContent /> */}
		</Col>
      </Row>
    </Container>
  );
}

export default App;
