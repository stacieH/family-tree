import React from 'react';
import ReactTable from 'react-table-v6'

function Table(props) {
    const {data, columns} = props
    console.log(data)
    return (
        <div>
            <ReactTable
                data={data}
                columns={columns}
            />
        </div>
    );
}

export default Table;