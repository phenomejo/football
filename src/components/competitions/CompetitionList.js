import React, { useEffect, useState } from 'react'
import { Card, Table, Form, Radio } from 'antd'

import { LEAGUE_ID } from '../../util/Constant'
import competitionApi from '../../api/competitionApi'
import './competitions.css'

const { Meta } = Card

const columns = [
  { title: '#', dataIndex: 'position', align: 'center', width: '8%' },
  { title: 'Team', dataIndex: 'team.name', render: (text, record) => <span><img src={record.team.crestUrl} alt={record.team.name} style={{ width: 30, height: 30 }} /> {text}</span>, width: '45%' },
  { title: 'GP', dataIndex: 'playedGames' },
  { title: 'W', dataIndex: 'won' },
  { title: 'D', dataIndex: 'draw' },
  { title: 'L', dataIndex: 'lost' },
  { title: 'GF', dataIndex: 'goalsFor' },
  { title: 'GA', dataIndex: 'goalsAgainst' },
  { title: 'GD', dataIndex: 'goalDifference' },
  { title: 'P', dataIndex: 'points' }
]

const CompetitionList = () => {
  const [leagueList, setLeagueList] = useState([])
  const [curLeague, setCurLeague] = useState()
  const [standingsList, setStandingsList] = useState([])
  const [standings, setStandings] = useState([])
  const [standingType, setStandingType] = useState('TOTAL')

  useEffect(() => {
    const fetchData = async () => {
      const resp = await competitionApi.getCompetitionList({ plan: 'TIER_ONE' })
      setLeagueList(resp.competitions.filter(v => LEAGUE_ID.includes(v.id)))
    }

    fetchData()
  }, [])

  const onSelectLeague = async (v) => {
    const resp = await competitionApi.getstandings(v.id)
    const { name,  currentSeason } = v
    const date = currentSeason.startDate.split('-')[0] + '/' + currentSeason.endDate.split('-')[0]
    setCurLeague(`${name} - ${date}`)
    setStandingType('TOTAL')
    setStandingsList(resp.standings)
    setStandings(resp.standings.find(v => v.type === 'TOTAL').table)
  }

  const onChaneStandingType = (e) => {
    setStandingType(e.target.value)
    setStandings(standingsList.find(v => v.type === e.target.value).table)
  }

  const renderLeague = leagueList.map((v) => {
    return (
      <Card hoverable
            style={{ width: 220 }}
            key={v.id}
            onClick={e => onSelectLeague(v)}
            cover={<img alt="example" className="logo-image" src={
              v.id === 2013 ? require('../../assets/image/serie_A_brasil.png') :
              v.id === 2021 ? require('../../assets/image/premier-english.png') :
              v.id === 2016 ? require('../../assets/image/EFL_Championship.png') :
              v.id === 2018 ? require('../../assets/image/Euro_2020.png') :
              v.id === 2001 ? require('../../assets/image/UEFA_Champions.png') :
              v.id === 2015 ? require('../../assets/image/Ligue_1_frence.png') :
              v.id === 2002 ? require('../../assets/image/Bundesliga.png') :
              v.id === 2019 ? require('../../assets/image/Serie_A_italy.png') :
              v.id === 2003 ? require('../../assets/image/Eredivisie_netherlands.png') :
              v.id === 2017 ? require('../../assets/image/Liga_protugal.png') :
              v.id === 2014 ? require('../../assets/image/La_Liga.png') :
              v.id === 2000 ? require('../../assets/image/FIFA_World_Cup.png') : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            } /> }>
        <Meta title={v.name} description={v.area.name} />
      </Card>
    )
  })

  return (
    <div className="page-content">
      <div className="grid">
        {leagueList.length === 0 ? null : renderLeague}
      </div>

      { standingsList.length === 0 ? null :
        <div style={{ paddingTop: 50 }}>
          <h1>{curLeague}</h1>
          <Form.Item label="">
          <Radio.Group value={standingType} onChange={onChaneStandingType}>
            <Radio.Button value="TOTAL">TOTAL</Radio.Button>
            <Radio.Button value="HOME">HOME</Radio.Button>
            <Radio.Button value="AWAY">AWAY</Radio.Button>
          </Radio.Group>
          </Form.Item>
          <Table rowKey={record => record.team.id} columns={columns} dataSource={standings} pagination={false} size='small' scroll={{ x: 700 }} />
        </div>
      }
    </div>
  )
}

export default CompetitionList