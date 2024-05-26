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
               <Button color="link"><Link to="/puzzleGroup1">Management- 0) Puzzle Group 1 </Link></Button> <br />
               <Button color="link"><Link to="/puzzleGroup2">Management- 0) Puzzle Group 2 </Link></Button> <br />
               <Button color="link"><Link to="/userGenders">Management- 0) User Gender </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 1) Client Types</Link></Button> <br />
              <Button color="link"><Link to="/memberTypes">Management- 2) Member Types</Link></Button> <br />
              <Button color="link"><Link to="/plDifficulties">Management- 3) Puzzle Level Difficulty</Link></Button> <br />
              <Button color="link"><Link to="/plPrivacies">Management- 4) Puzzle Level Privacy</Link></Button> <br />
              <Button color="link"><Link to="/plStatuses">Management- 5) Puzzle Level Status</Link></Button> <br />
              <Button color="link"><Link to="/puzzleCategories">Management- 6) Puzzle Category </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management-7)  PO Action Owner Type</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 8) Object Category </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 9) Object Action Types </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 10) Wallet Item Category </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 11) Game Status </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 12) AL City Data Types</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 13) Binary Content Type </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 14) Attribute Owner Type</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 15) PL Rule Event Type</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 16) PL Rule Post Action Type</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 17) System Event</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 18) User Event</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 19) Learning Topic</Link></Button> <br />
              
        </Col>
        <Col>
              <Button color="link"><Link to="/clientTypes">Management- 1)Journey</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 2)Journey Learning Skill</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 3)JourneyStep</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 4)..... </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 5) ..... </Link></Button> <br />
        </Col>
        <Col>
              <Button color="link"><Link to="/puzzleGroups">Management- 1)Puzzle Group</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 2)Puzzle Level Ground</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 3)Puzzle Level</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 4)Puzzle Skill Learn Content</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 5).....</Link></Button> <br />
        </Col>
        <Col>
              <Button color="link"><Link to="/clientTypes">Management- 1)Wallet Item Types </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 2)Wallet Item</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 3)Currency Change Rate</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 4)Gem Price</Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 5)Wallet Transaction </Link></Button> <br />
              <Button color="link"><Link to="/clientTypes">Management- 6)Application Members </Link></Button> <br />
        </Col>

        </Row>
      </Container>
      </div>
  );
}

export default Home;