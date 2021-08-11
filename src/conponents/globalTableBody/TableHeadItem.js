import React from "react";

const TableHeadItem = ({ itemsThead }) => {
    return (
        <th style={{ width: itemsThead.width, textAlign: itemsThead.textAlign }}>
            {itemsThead.name}
        </th>
    );
};

export default TableHeadItem;