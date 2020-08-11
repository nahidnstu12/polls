import React from 'react';
import './App.css';
import {Container,Row,Col} from 'reactstrap';
import Sidebar from  './Sidebar/sidebarComponent';
import MainContent from './MainComponent/mainComponent';

function App() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
			<MainContent />
		</Col>
      </Row>
    </Container>
  );
}

export default App;
