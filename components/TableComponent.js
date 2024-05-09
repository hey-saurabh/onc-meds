import React, { useEffect, useState } from 'react'
// import { Table } from 'reactstrap'
// import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
// import { EyeOutlined } from '@ant-design/icons/lib';
import { LinkTab } from '@/utils/iconClasses';

const TableComponent = (props) => {
  const [current, setCurrent] = useState(1);
  const [innerWidth, setInnerWidth] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [])

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [])

  // const columns = [
  //   { field: 'id', headerName: 'S.No.', width: 50 },
  //   { field: 'scientific_name', headerName: 'Scientific Name', width: 200 },
  //   { field: 'common_name', headerName: 'Common Name', width: 350 },
  //   { field: 'type_of_cancer', headerName: 'Type of Cancer', width: 450 },
  //   {
  //     field: 'actions',
  //     type: 'actions',
  //     width: 200,
  //     getActions: () => [
  //       <GridActionsCellItem icon={<EyeOutlined />} label="Edit" key={0} />,
  //     ],
  //   },
  // ];
  return (
    <div>
      {/* <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={false}
      /> */}
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

<div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{ height: innerWidth > 1537 ? "510px" : "400px" }}>
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase dark:text-white" style={{ backgroundColor: "#4F46E5" }}>
            <tr>
                <th scope="col" className="px-6 py-3">
                    S.No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Scientific Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Common name
                </th>
                <th scope="col" className="px-6 py-3">
                    Type of Cancer
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((item, index) => {
              return (
                <tr className={`border-b border-blue-400 ${props.isDark ? "bg-sky-950 text-blue-100" : "bg-gray-200 text-zinc-950"}`} key={item.id}>
                  <th scope="row" className="px-6 py-4 font-medium">
                      {item.id}
                  </th>
                  <td className="px-6 py-4 italic">
                      {item.scientific_name}
                  </td>
                  <td className="px-6 py-4">
                    {item.common_name}
                  </td>
                  <td className="px-6 py-4">
                      {item.type_of_cancer}
                  </td>
                  <td className="px-6 py-4">
                  <button onClick={() => props.handleViewPlants(item)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-2 items-center">View {LinkTab}</button>
                  </td>
                </tr>
              )
            })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableComponent;