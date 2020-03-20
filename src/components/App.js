import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { Layout, BackTop } from 'antd'
// import { useSelector } from 'react-redux'

import HeaderPage from './layouts/HeaderPage'
import FooterPage from './layouts/FooterPage'

import Competitions from './competitions/Competitions'
import MatchSchedule from './matchs/MatchSchedule'
import MatchResult from './matchs/MatchResult'
import TopScore from './top-score/TopScore'

const { Content } = Layout;

const App = () => {
  // const isLoading = useSelector(state => state.screen)

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
            {/* { isLoading ? 
              <Spin tip="loading...">
                <div className="container">
                </div>
             </Spin> :
              <div className="container">
                <Route path="/" exact component={Competitions} />
                <Route path="/match" component={MatchSchedule} />
                <Route path="/match-result" component={MatchResult} />
                <Route path="/top-score" component={TopScore} />
              </div>
            } */}
            <div className="container">
              <Route path="/" exact component={Competitions} />
              <Route path="/match" component={MatchSchedule} />
              <Route path="/match-result" component={MatchResult} />
              <Route path="/top-score" component={TopScore} />
            </div>
          </Content>
        <FooterPage/>
      </BrowserRouter>
      <BackTop visibilityHeight={20} />
    </Layout>
  )
}

export default App
