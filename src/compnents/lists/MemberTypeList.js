import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

const MemberTypeList = () => {

  const [memberTypes, setMemberTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/base/member-type/all')
      .then(response => response.json())
      .then(data => {
        setMemberTypes(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/base/member-type/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedMemberTypes = [...memberTypes].filter(i => i.id !== id);
      setMemberTypes(updatedMemberTypes);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const memberTypeList = memberTypes.map(memberType => {
    return <tr key={memberType.id}>
      <td style={{whiteSpace: 'nowrap'}}>{memberType.label}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/memberTypes/" + memberType.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(memberType.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/memberTypes/new">Add member type</Button>
        </div>
        <h3>Member Type Management </h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">label</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {memberTypeList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default MemberTypeList;
