import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

const PuzzleGroupList = ({apiAddress1},{apiAddress2},{apiAddress3}) => {

  const [puzzleGroups, setPuzzleGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiAddress = apiAddress1 + apiAddress2 + apiAddress3;
  useEffect(() => {
    setLoading(true);

    fetch(apiAddress)
      .then(response => response.json())
      .then(data => {
        setPuzzleGroups(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/base/pg/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedPuzzleGroups = [...puzzleGroups].filter(i => i.id !== id);
      setPuzzleGroups(updatedPuzzleGroups);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const puzzleGroupList = puzzleGroups.map(puzzleGroup => {
    return <tr key={puzzleGroup.id}>
      <td style={{whiteSpace: 'nowrap'}}>{puzzleGroup.title}</td>
      <td>
        <ButtonGroup>
        <Button size="sm" color="primary" tag={Link} to={"/puzzleGroups/" + puzzleGroup.id}>Edit</Button>&nbsp;&nbsp;
          <Button size="sm" color="danger" onClick={() => remove(puzzleGroup.id)}>Delete</Button>
        </ButtonGroup>
      </td>
      <td>
        <ButtonGroup>
        <Button size="sm" color="primary" tag={Link} to={"/alcityObjects/" + puzzleGroup.id}>AL City Objects</Button>&nbsp;&nbsp;
        <Button size="sm" color="primary" tag={Link} to={"/puzzleLevels/" + puzzleGroup.id}>Puzzle Levels</Button>&nbsp;&nbsp;
          <Button size="sm" color="primary" onClick={() => remove(puzzleGroup.id)}>Add Object</Button>
        </ButtonGroup>
      </td>
    </tr>
  });
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/puzzleGroup/new">Add Puzzle Group</Button>
        </div>
        <h3>Puzzle Group Management </h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">Title</th>
            <th width="10%">Actions...</th>
            <th width="10%">Details...</th>
          </tr>
          </thead>
          <tbody>
          {puzzleGroupList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default PuzzleGroupList;
