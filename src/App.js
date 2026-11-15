import React from 'react'
import { Layout } from 'antd'

import Header from './components/Header';
import Footer from './components/Footer';
import Members from './pages/Members'

function App() {
  return (
    <Layout style={{minHeight:'100vh'}}>
      {/* <Layout.Sider collapsible collapsed={true} onCollapse={()=>{}}>
        <nav>Sider menu is here...</nav>
      </Layout.Sider> */}
      <Layout>
        <Header/>
        <Layout.Content>
          <Members/>
        </Layout.Content>
        <Footer/>
      </Layout>
    </Layout>
  );
}

export default App;
