import React from 'react'
import { Table } from 'react-bootstrap'
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
import GlobalFilter from './GlobalFilter'
import { FaSortDown, FaSortUp, FaSort, FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight, FaAngleDown } from "react-icons/fa"
import PropTypes from 'prop-types'

const ReactGlobalTable = ({ columns, data, className, defaultPageSize, showPagination, useSorting, showGlobalFilter, editID }) => {
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
                                            <span style={{ position: 'absolute', right: 4, top: 8, }}>
                                                {column.isSorted ? (column.isSortedDesc ? (<FaSortDown />) : (<FaSortUp />)) : column.canSort ? (<FaSort style={{ opacity: 0.4 }} />) : ("")}
                                            </span>
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
                                <tr {...row.getRowProps()} className={row.original.id === editID ? 'trbgColor' : null}>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <span>
                            Page{' '}
                            <strong>{pageIndex + 1}</strong> - <strong>{pageOptions.length}</strong> of  <strong>{rows.length}</strong> Result
                            {' '}
                        </span>
                    </div>
                    <ul className="pagination m-0">
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: 8 }}> Jump to page :</span>
                            <input
                                className="form-control"
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const pages = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(pages)
                                }}
                                style={{ width: '80px', height: '38px' }}
                            />
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <span style={{ marginRight: 8 }}> Show :</span>
                            <select
                                className="form-control"
                                value={pageSize}
                                onChange={e => {
                                    setPageSize(Number(e.target.value))
                                }}
                                style={{ width: '80px', height: '38px' }}
                            >
                                {[5, 10, 20, 30, 40, 50].map(pageSizes => (
                                    <option key={pageSizes} value={pageSizes}>
                                        {pageSizes}
                                    </option>
                                ))}
                            </select>
                            <FaAngleDown style={{ position: 'absolute', right: 10, opacity: .4 }} />
                        </li>

                        <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            <span className="page-link">{<FaAngleDoubleLeft />}</span>
                        </li>
                        <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                            <span className="page-link">{<FaAngleLeft />}</span>
                        </li>
                        <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                            <span className="page-link">{<FaAngleRight />}</span>
                        </li>
                        <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                            <span className="page-link">{<FaAngleDoubleRight />}</span>
                        </li>
                    </ul>
                </div>
            }
            {/* PAGINATION :: END */}
        </div >
    )
}
ReactGlobalTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    className: PropTypes.string,
    defaultPageSize: PropTypes.number,
    showPagination: PropTypes.bool,
    useSorting: PropTypes.bool,
    showGlobalFilter: PropTypes.bool,
    editID:  PropTypes.string,
}
export default ReactGlobalTable
