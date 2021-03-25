import React from 'react';
import ReactTable from 'react-table-v6'

function Table(props) {
    const {data, columns} = props
    return (
        <div>
            <ReactTable
                data={data}
                columns={columns}
                minRows={data.length!==0? data.length: 10}
                showPagination={false}
            />
        </div>
    );
}

export default Table;