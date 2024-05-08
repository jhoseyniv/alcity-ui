import React from 'react';
import './App.css';
import AppNavbar from './compnents/AppNavbar';
import { Link } from 'react-router-dom';
import { Button, CardColumns, Container, Row } from 'reactstrap';
import Col from 'react-bootstrap/Col';


const Home = () => {
  return (
    <div >
      <AppNavbar/>
      <Container fluid>
      <Row>
          <Col className="mystyle" >Administration Panel For Al City Project...</Col>
          
      </Row> 
      <Row>
          <Col>one</Col>
          <Col>two</Col>
          <Col>three</Col>
      </Row> 
      <Row>
         <Col>
              <Button color="link"><Link to="/clientTypes">Management - 1)  Client Types</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 2)  Member Types</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 3)  Puzzle Level Privacy</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 4)  Puzzle Category </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 5)  Wallet Item Types </Link></Button> <br />
        </Col>
        <Col>
              <Button color="link"><Link to="/clientTypes">Management - 1)  Client Types</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 2)  Member Types</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 3)  Puzzle Level Privacy</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 4)  Puzzle Category </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 5)  Wallet Item Types </Link></Button> <br />
        </Col>
        <Col>
              <Button color="link"><Link to="/clientTypes">Management - 1)  Client Types</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 2)  Member Types</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 3)  Puzzle Level Privacy</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 4)  Puzzle Category </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 5)  Wallet Item Types </Link></Button> <br />
        </Col>

        </Row>
      </Container>
      </div>
  );
}

export default Home;