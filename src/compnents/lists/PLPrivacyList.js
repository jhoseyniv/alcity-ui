import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

const PLPrivacyList = () => {

  const [plPrivacies, setPlPrivacies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/base/pl-privacy/all')
      .then(response => response.json())
      .then(data => {
        setPlPrivacies(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/base/pl-privacy/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedPlPrivacies = [...plPrivacies].filter(i => i.id !== id);
      setPlPrivacies(updatedPlPrivacies);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const plPrivaciesList = plPrivacies.map(plPrivacy => {
    return <tr key={plPrivacy.id}>
      <td style={{whiteSpace: 'nowrap'}}>{plPrivacy.label}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/plPrivacies/" + plPrivacy.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(plPrivacy.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/plPrivacies/new">Add Puzzle Level Privacy</Button>
        </div>
        <h3>Puzzle Level Privacy Management </h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">label</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {plPrivaciesList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default PLPrivacyList;
