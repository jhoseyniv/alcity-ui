import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

const PuzzleCategoryList = () => {

  const [puzzleCategories, setPuzzleCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/pc/all')
      .then(response => response.json())
      .then(data => {
        setPuzzleCategories(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/base/pc/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedPuzzleCategories = [...puzzleCategories].filter(i => i.id !== id);
      setPuzzleCategories(updatedPuzzleCategories);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const puzzleCategoryList = puzzleCategories.map(puzzleCategory => {
    return <tr key={puzzleCategory.id}>
      <td style={{whiteSpace: 'nowrap'}}>{puzzleCategory.label}</td>
      <td>
        <ButtonGroup>
        <Button size="sm" color="primary" tag={Link} to={"/puzzleCategories/" + puzzleCategory.id}>Edit </Button>&nbsp;&nbsp;
        <Button size="sm" color="primary" tag={Link} to={"/pc/id/" + puzzleCategory.id +"/pg/all"}>puzzle groups </Button>&nbsp;&nbsp;
          <Button size="sm" color="danger" onClick={() => remove(puzzleCategory.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/puzzleCategories/new">Add Puzzle Category</Button>
        </div>
        <h3>Puzzle Category Management </h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">label</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {puzzleCategoryList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default PuzzleCategoryList;
