import React from 'react';
import {Table} from 'antd'

function AntTable(props) {
    const {data, columns} = props
    return (
        <div>
            <Table
                dataSource={data}
                columns={columns}
            />
        </div>
    );
}

export default AntTable;