import React, { useEffect, useState } from 'react'
import { Card } from 'antd'

import competitionApi from '../../api/competitionApi'
import './competitions.css'

const { Meta } = Card

const CompetitionList = () => {
  const [leagueList, setLeagueList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await competitionApi.getCompetitionList({ plan: 'TIER_ONE' })
      setLeagueList(resp.competitions)
    }

    fetchData()
  }, [])

  const renderLeague = leagueList.map((v) => {
    return (
      <Card hoverable
            style={{ width: 220 }}
            key={v.id}
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
    </div>
  )
}

export default CompetitionList