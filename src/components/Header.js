import React from 'react';
import { Layout } from 'antd'

function Header() {
    return (
      <Layout.Header>
        <nav>
          <span style={{color:'#fff', fontSize: 18, fontWeight:500}}>Family Tree</span>
        </nav>
      </Layout.Header>
    );
}

export default Header;