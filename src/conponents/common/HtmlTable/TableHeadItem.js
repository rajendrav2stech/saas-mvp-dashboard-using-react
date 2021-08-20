import React from "react";

/**
 * Component for showing details of Global <Table> <Th>.
 * @param {array} itemsThead - Global mapping table thead column -
 */

const TableHeadItem = ({ itemsThead }) => {
    return (
        <th style={{ width: itemsThead.width, textAlign: itemsThead.textAlign }}>
            {itemsThead.name}
        </th>
    );
};

export default TableHeadItem;