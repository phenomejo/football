import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { Layout, BackTop } from 'antd'

import HeaderPage from './layouts/HeaderPage'
import FooterPage from './layouts/FooterPage'

import Competitions from './competitions/Competitions'
import Matchs from './matchs/Matchs'

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <HeaderPage />
        <Content>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="container">
            <Route path="/" exact component={Competitions} />
            <Route path="/match" component={Matchs} />
          </div>
        </Content>
        <FooterPage/>
      </BrowserRouter>
      <BackTop visibilityHeight={20} />
    </Layout>
  )
}

export default App
