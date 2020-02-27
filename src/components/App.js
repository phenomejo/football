import React from 'react'
import { Layout } from 'antd'

import HeaderPage from './layouts/HeaderPage'
import FooterPage from './layouts/FooterPage'

import LeagueList from './competitions/league/LeagueList'

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <HeaderPage />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="container">
          <LeagueList />
        </div>
      </Content>
      <FooterPage/>
    </Layout>
  )
}

export default App
