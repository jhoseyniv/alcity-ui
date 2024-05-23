import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

const PLDifficultyList = () => {

  const [plDifficulties, setPlDifficulties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/base/pl-difficulty/all')
      .then(response => response.json())
      .then(data => {
        setPlDifficulties(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/base/pl-difficulty/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedPlDifficulties = [...plDifficulties].filter(i => i.id !== id);
      setPlDifficulties(updatedPlDifficulties);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const plDifficultiesList = plDifficulties.map(plDifficulty => {
    return <tr key={plDifficulty.id}>
      <td style={{whiteSpace: 'nowrap'}}>{plDifficulty.label}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/plDifficulties/" + plDifficulty.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(plDifficulty.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/plDifficulties/new">Add Puzzle Level Difficulty</Button>
        </div>
        <h3>Puzzle Level Difficulty Management </h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">label</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {plDifficultiesList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default PLDifficultyList;
