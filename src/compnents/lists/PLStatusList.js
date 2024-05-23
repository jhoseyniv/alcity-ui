import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

const PLStatusList = () => {

  const [plStatuses, setPlStatuses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/base/pl-status/all')
      .then(response => response.json())
      .then(data => {
        setPlStatuses(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/base/pl-status/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedPlStatuses = [...plStatuses].filter(i => i.id !== id);
      setPlStatuses(updatedPlStatuses);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const plStatusesList = plStatuses.map(plStatus => {
    return <tr key={plStatus.id}>
      <td style={{whiteSpace: 'nowrap'}}>{plStatus.label}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/plStatuses/" + plStatus.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(plStatus.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/plStatuses/new">Add Puzzle Level Status</Button>
        </div>
        <h3>Puzzle Level Status Management </h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">label</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {plStatusesList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default PLStatusList;
