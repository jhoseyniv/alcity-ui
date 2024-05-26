import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { Alert } from 'reactstrap';

import { useParams } from 'react-router';

const mycolumns = [
	{
		name: 'id',
		selector: row => row.id,
	},
	{
		name: 'title',
		selector: row => row.title,
	},
	{
		name: 'iconId',
		selector: row => row.iconId,
	},
	{
		name: 'picId',
		selector: row => row.picId,
	},
		{
		name: 'version',
		selector: row => row.version,
	},
	{
		name: 'created',
		selector: row => row.created,
	},
	{
		name: 'updated',
		selector: row => row.updated,
	},
	{
		name: 'createdBy',
		selector: row => row.createdBy,
	},
	{
		name: 'updatedBy',
		selector: row => row.updatedBy,
	},
];

const PuzzleGroup = ({title , url1,url2 }) => {

	const [apiData, setApiData] = useState(null);
	const params= useParams()
	const id = params.id;
	//alert(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url1+id+url2);
        setApiData(response.data);
        console.error(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      {apiData ? (
        // Render your component using the fetched data
        <MyComponent incolumns = {mycolumns} indata = {apiData} />
      ) : (
        // Render a loading state or placeholder
        <p>Loading...</p>
      )}
    </div>
  );
};

const MyComponent = ({incolumns , indata }) => {
    return (
      		<DataTable
      			columns={incolumns}
      			data={indata}
      		/>
      	);
};

export default PuzzleGroup;