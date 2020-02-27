import React, { useEffect, useState } from 'react'

import { LEAGUE_ID } from '@/util/Constant'
import competitionApi from '@/api/competitionApi'
import League from './League'
import Standings from './Standings'
import '../competitions.css'

const LeagueList = () => {
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

  useEffect(() => {
    if (leagueList.length > 0) {
      onSelectLeague(leagueList[0])
    }
  }, [leagueList])

  const onSelectLeague = async (v) => {
    const resp = await competitionApi.getstandings(v.id)
    const { name, numberOfAvailableSeasons, currentSeason } = v
    const date = currentSeason.startDate.split('-')[0] + '/' + currentSeason.endDate.split('-')[0]
    setCurLeague(`${name}, Season: ${numberOfAvailableSeasons} - ${date}`)
    setStandingType('TOTAL')
    setStandingsList(resp.standings)
    setStandings(resp.standings.find(v => v.type === 'TOTAL').table)
  }

  const onChaneStandingType = (type) => {
    setStandingType(type)
    setStandings(standingsList.find(v => v.type === type).table)
  }

  const renderLeague = leagueList.map((v) => {
    return (
      <League key={v.id} league={v} onSelectLeague={onSelectLeague} />
    )
  })

  return (
    <div className="page-content">
      <div className="grid">
        {leagueList.length === 0 ? null : renderLeague}
      </div>

      { standingsList.length === 0 ? null :
        <Standings standings={standings} curLeague={curLeague} standingType={standingType} onChaneStandingType={onChaneStandingType} />
      }
    </div>
  )
}

export default LeagueList