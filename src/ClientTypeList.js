import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const ClientTypeList = () => {

  const [clientTypes, setClientTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/base/client-type/all')
      .then(response => response.json())
      .then(data => {
        setClientTypes(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/base/client-Type/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedClientTypes = [...clientTypes].filter(i => i.id !== id);
      setClientTypes(updatedClientTypes);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const clientTypeList = clientTypes.map(clientType => {
    return <tr key={clientType.id}>
      <td style={{whiteSpace: 'nowrap'}}>{clientType.label}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/clientTypes/" + clientType.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(clientType.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/clientTypes/new">Add ClientType</Button>
        </div>
        <h3>My JUG Tour</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">label</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {clientTypeList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default ClientTypeList;
