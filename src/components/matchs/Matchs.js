import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs, List } from 'antd'
import moment from 'moment'

import { fetchMath } from '@/actions/match'
const { TabPane } = Tabs

const Matchs = () => {
  const dispatch = useDispatch()
  const matchList = useSelector(state => state.matchList)

  if (matchList.length === 0) {
    dispatch(fetchMath())
  }

  const renderTeam = (team) => {
    return team.map(v => {
      return <List.Item key={`${v.id}`}>
          <span>{ moment(v.utcDate).format('HH:mm') }</span>
          <div style={{ margin: '0 auto' }}>
            { v.homeTeam.name } vs { v.awayTeam.name }
          </div>
      </List.Item>
    })
  }

  const renderLeague = (date, match) => {
    return match.map(v => {
      return <div style={{ width: '75%', margin: '0 auto' }}>
        <List header={<div style={{ fontWeight: 700, fontSize: 20 }}>{v.leagueName}</div>} key={`${date} - ${v.leagueName}`}>
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
    <div className="page-content">
      { matchList.length === 0 ? null :
        <Tabs defaultActiveKey="06/03/2020">
          { renderMatch }
        </Tabs>
      }
    </div>
  )
}

export default Matchs