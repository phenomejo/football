import React from 'react'
import { Layout, Breadcrumb } from 'antd'

import HeaderPage from './layouts/HeaderPage'
import FooterPage from './layouts/FooterPage'

import CompetitionList from './competitions/CompetitionList'

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <HeaderPage />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 130px)' }}>
          <CompetitionList />
          <h1>dadsasd</h1>
        </div>
      </Content>
      <FooterPage/>
    </Layout>
  )
}

export default App
