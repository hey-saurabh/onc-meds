import React from 'react'
import { Table } from 'reactstrap'

const TableComponent = (props) => {
  return (
    <div>
      <Table responsive dark={props.isDark}>
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
      </Table>
    </div>
  )
}

export default TableComponent