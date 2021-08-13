import React from 'react'
import { Table } from 'react-bootstrap'
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
import GlobalFilter from './GlobalFilter'
import FastForwardIcon from '@material-ui/icons/FastForward'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'

const ReactGlobalTable = ({ columns, data, className, defaultPageSize, showPagination, useSorting, showGlobalFilter }) => {
    let isPageSize = defaultPageSize > 0 ? defaultPageSize : data.length
    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        rows,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {
            pageIndex,
            pageSize,
            globalFilter
        },
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: isPageSize },
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
    )

    return (
        <div className={className}>
            {
                showGlobalFilter && <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            }
            {console.log("NUmber of Page", page)}
            <Table striped bordered hover {...getTableProps()}>
                <thead style={{ backgroundColor: '#c1c1c1' }}>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(useSorting && column.getSortByToggleProps())}
                                            style={{ textAlign: column.textAlign, width: column.width, fontWeight: column.fontWeight }} >
                                            {column.render('Header')}
                                            {
                                                useSorting && <span>
                                                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                                                </span>
                                            }

                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {/*  className={row.original.id === editID ? 'trbgColor' : null} */}
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
            {/* PAGINATION :: SET */}
            {
                showPagination &&
                <ul ul className="pagination">
                    <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        <a className="page-link">{<FastRewindIcon />}</a>
                    </li>
                    <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <a className="page-link">{<ArrowLeftIcon />}</a>
                    </li>
                    <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                        <a className="page-link">{<ArrowRightIcon />}</a>
                    </li>
                    <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        <a className="page-link">{<FastForwardIcon />}</a>
                    </li>
                    <li>
                        <a className="page-link">
                            Page{' '}
                            <strong>
                                {pageIndex + 1} - {pageOptions.length} of {rows.length}
                            </strong>{' '}
                        </a>
                    </li>
                    <li>
                        <a className="page-link">
                            <input
                                className="form-control"
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const pages = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(pages)
                                }}
                                style={{ width: '100px', height: '20px' }}
                            />
                        </a>
                    </li>{' '}
                    <select
                        className="form-control"
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                        style={{ width: '120px', height: '38px' }}
                    >
                        {[5, 10, 20, 30, 40, 50].map(pageSizes => (
                            <option key={pageSizes} value={pageSizes}>
                                Show {pageSizes}
                            </option>
                        ))}
                    </select>
                </ul>
            }
            {/* PAGINATION :: END */}
        </div >
    )
}

export default ReactGlobalTable
