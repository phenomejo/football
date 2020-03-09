import React from 'react'
import { Tabs, List, Typography, Row, Col, Tag } from 'antd'
import moment from 'moment'

import { STATUS_SCHEDULED, STATUS_FINISHED } from '@/util/Constant'
import './Match.css'

const { TabPane } = Tabs
const { Text } = Typography

const Match = ({ matchList }) => {
  const getScore = (v) => {
    let str = 'vs'

    if (v.status !== STATUS_SCHEDULED) {
      const { fullTime, halfTime, extraTime, penalties } = v.score
      const scoreHome = v.status === STATUS_FINISHED ? fullTime.homeTeam + extraTime.homeTeam + penalties.homeTeam : halfTime.homeTeam
      const scoreAway = v.status === STATUS_FINISHED ? fullTime.awayTeam + extraTime.awayTeam + penalties.awayTeam : halfTime.awayTeam
      str = `${!scoreHome ? 0 : scoreHome} - ${!scoreAway ? 0 : scoreAway}`
    }

    return str
  }

  const renderTeam = (team) => {
    return team.map(v => {
      return <List.Item key={` ${v.id}`}>
          <Tag color="#108ee9">{ moment(v.utcDate).format('HH:mm') }</Tag>
          <div className="width-75">
            <Row>
              <Col className="col-home" xs={{ span: 24 }} sm={{ span: 24 }} xl={{ span: 11 }}>{ v.homeTeam.name }</Col>
              <Col className="col-score" xs={{ span: 24 }} sm={{ span: 24 }} xl={{ span: 2 }}><Text mark>&nbsp;{getScore(v)}&nbsp;</Text></Col>
              <Col className="col-away" xs={{ span: 24 }} sm={{ span: 24 }} xl={{ span: 11 }}>{ v.awayTeam.name }</Col>
            </Row>
          </div>
          { v.status !== STATUS_SCHEDULED && v.status !== STATUS_FINISHED ? <Tag color="red">{ v.status }</Tag> : null }
      </List.Item>
    })
  }

  const renderLeague = (date, match) => {
    return match.map(v => {
      return <div className="width-75" key={`${date} - ${v.leagueName}`}>
        <List header={<div style={{ fontWeight: 700, fontSize: 20 }}>{v.leagueName}</div>}>
          { renderTeam(v.league) }
        </List>
      </div>
    })
  }

  const renderMatch = matchList.map(v => {
    return <TabPane tab={v.date} key={v.date}>
      { renderLeague(v.date, v.match) }
    </TabPane>
  })

  return (
    <>
      <Tabs defaultActiveKey={moment().format('DD/MM/YYYY')}>
        { renderMatch }
      </Tabs>
    </>
  )
}

export default Match