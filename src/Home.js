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
          <Col className="head_style" >Administration Panel For Al City Project...</Col>
          
      </Row> 
      <Row>
          <Col className='group_style'>Base Data Types</Col>
          <Col className='group_style'>Journey Information</Col>
          <Col className='group_style'>Puzzle Level </Col>
          <Col className='group_style'>MemberShip and Wallet</Col>
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
              <Button color="link"><Link to="/clientTypes">Management - 1)  Journey </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 2)  Journey Learning Skill</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 3) JourneyStep </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 4) ..... </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 5)  ..... </Link></Button> <br />
        </Col>
        <Col>
              <Button color="link"><Link to="/clientTypes">Management - 1)  Puzzle Group</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 2)  Puzzle Level Ground</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 3)  Puzzle Level </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 4)  Puzzle Skill Learning Content </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 5)  ..... </Link></Button> <br />
        </Col>
        <Col>
              <Button color="link"><Link to="/clientTypes">Management - 1)  Wallet Item</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 2)  Currency Change Rate</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 3)  Gem Price</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 4)  Wallet Transaction </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management - 5) Application Members </Link></Button> <br />
        </Col>

        </Row>
      </Container>
      </div>
  );
}

export default Home;