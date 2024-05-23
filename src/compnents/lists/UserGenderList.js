import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

const UserGenderList = () => {

  const [userGenders, setUserGenders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/base/gender/all')
      .then(response => response.json())
      .then(data => {
        setUserGenders(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/base/user-gender/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedUserGenders = [...userGenders].filter(i => i.id !== id);
      setUserGenders(updatedUserGenders);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const userGenderList = userGenders.map(userGender => {
    return <tr key={userGender.id}>
      <td style={{whiteSpace: 'nowrap'}}>{userGender.label}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/userGenders/" + userGender.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(userGender.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/userGenders/new">Add userGender</Button>
        </div>
        <h3>User Gender Management </h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">label</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {userGenderList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default UserGenderList;
