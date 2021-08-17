import React from 'react'
import { Table } from 'react-bootstrap'
import TableHeadItem from './TableHeadItem';

const TableComponents = ({ tHeadData, tBodyData, customClass }) => {
    return (
        <Table className={customClass}>
            <thead style={{ backgroundColor: '#c1c1c1' }}>
                <tr>
                    {tHeadData.map((itemsThead) => {
                        return <TableHeadItem key={itemsThead} itemsThead={itemsThead} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tBodyData.map((rowData) => {
                    return (
                        <tr key={rowData} >
                            {
                                tHeadData.map((coldata) => {
                                    return (
                                        <td key={coldata}>
                                            {rowData[coldata.dataIndex]}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    )
}

export default TableComponents
