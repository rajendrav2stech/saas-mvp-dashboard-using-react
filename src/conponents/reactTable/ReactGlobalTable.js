import React from 'react'
import { Table } from 'react-bootstrap'
import { useTable, useSortBy } from 'react-table'

const ReactGlobalTable = ({ columns, data, className }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = useTable({
        columns,
        data
    }, useSortBy)
    return (
        <div className={className}>
            <Table striped bordered hover {...getTableProps()}>
                <thead style={{ backgroundColor: '#c1c1c1' }}>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps({ style: { textAlign: column.textAlign, width: column.width, fontWeight: column.fontWeight } })}>
                                            {column.render('Header')}
                                            {/* <span>
                                            column.getSortByToggleProps(), 
                                                {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                                            </span> */}
                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {
                                                        cell.render('Cell')
                                                    }
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
        </div>
    )
}

export default ReactGlobalTable
