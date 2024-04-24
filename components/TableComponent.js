import { Pagination, Table } from 'antd/lib';
import React, { useState } from 'react'
// import { Table } from 'reactstrap'
import { DataGrid } from '@mui/x-data-grid';

const TableComponent = (props) => {
  const [current, setCurrent] = useState(1);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'scientific_name', headerName: 'Scientific Name', width: 260 },
    { field: 'common_name', headerName: 'Common Name', width: 350 },
    { field: 'type_of_cancer', headerName: 'Type of Cancer', width: 350 },
  ];
  return (
    <div>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      {/* <Table dark={props.isDark}>
        <thead className='sticky-top'>
          <tr>
            <th style={{ width: "80px", textAlign: "center"}}>
              S.No.
            </th>
            <th style={{ width: "250px"}}>
              Scientific Name
            </th>
            <th>
              Common Name
            </th>
            <th>
              Type Of Cancer
            </th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row" className='text-center'>
                    {index + 1}
                  </th>
                  <td>
                    {item.scientific_name}
                  </td>
                  <td>
                    {item.common_name}
                  </td>
                  <td>
                    {item.type_of_cancer}
                  </td>
                </tr>
            )})
          }
        </tbody>
      </Table> */}
    </div>
  )
}

export default TableComponent