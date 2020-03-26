import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { Layout, BackTop, Spin } from 'antd'
import { useSelector } from 'react-redux'

import HeaderPage from './layouts/HeaderPage'
import FooterPage from './layouts/FooterPage'

import Competitions from './competitions/Competitions'
import MatchSchedule from './matchs/MatchSchedule'
import MatchResult from './matchs/MatchResult'
import TopScore from './top-score/TopScore'

const { Content } = Layout;

const App = () => {
  const isLoading = useSelector(state => state.screen)

  return (
    <Layout>
      <BrowserRouter>
        <HeaderPage />
          <Content>
            <Spin tip="Loading..." spinning={isLoading}>
              <div className="container">
                <Route path="/" exact component={Competitions} />
                <Route path="/match" component={MatchSchedule} />
                <Route path="/match-result" component={MatchResult} />
                <Route path="/top-score" component={TopScore} />
              </div>
            </Spin>
          </Content>
        <FooterPage/>
      </BrowserRouter>
      <BackTop visibilityHeight={20} />
    </Layout>
  )
}

export default App
