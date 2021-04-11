import React from 'react';
import { version, Layout, Space } from 'antd'

function Footer() {
    return (
        <Layout.Footer>
            <Space>
                <span>©copyright</span>
                <small>powered by: antd version {version}</small>
            </Space>
        </Layout.Footer>
    );
}

export default Footer;