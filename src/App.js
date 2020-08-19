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
	
	const getOpinion = res => {
		const poll = polls.find(p => p.id === res.pollId)
		const option = poll.options.find(opt => opt.id === res.selectedOption);
		poll.totalVote++;
		option.vote++;
		const opinion = {
			id:shortid.generate(),
			name:res.name,
			selectedOption:res.selectedOption
		};
		poll.opinions.push(opinion);
		setPolls(polls);

	}
	const updatePoll = updatePoll =>{
		const poll = polls.find(p => p.id === updatePoll.id)
		poll.title = updatePoll.title;
		poll.description = updatePoll.description;
		poll.options = updatePoll.opinions

		setPolls(polls);
	}
	const deletePoll = pollId => {
		const poll = polls.filter(p => p.id !== pollId)
		setPolls(poll);
		// selectedPoll({});

	}

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Sidebar polls={polls} selectPoll= {selectPoll} handleSearch={handleSearch} submit={addNewPoll}
		  />
        </Col>
        <Col md={8}>
			<MainContent poll={selectedPoll}  getOpinion={getOpinion} deletePoll= {deletePoll} submit={updatePoll} />
		</Col>
      </Row>
    </Container>
  );
}

export default App;
