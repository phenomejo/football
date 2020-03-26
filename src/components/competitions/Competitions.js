import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import League from './League'
import Standings from './Standings'
import './Competitions.css'
import { fetchComposition } from '@/actions/league'
import { fecthStanding, setStanding } from '@/actions/standing'

const LeagueList = () => {
  const dispatch = useDispatch()
  const leagueList = useSelector(state => state.leagueList)
  const standing = useSelector(state => state.standing)
  const standingList = useSelector(state => state.standingList)

  const [curLeague, setCurLeague] = useState()
  const [scoreList, setScoreList] = useState([])
  const [standingType, setStandingType] = useState('TOTAL')

  useEffect(() => {
    if (leagueList.length === 0)  {
      dispatch(fetchComposition())
    }
  }, [leagueList, dispatch])

  useEffect(() => {
    if (standing.length > 0) {
      setScoreList(standing.find(v => v.type === 'TOTAL').table)
    }
  }, [standing])

  const onSelectLeague = (v) => {
    const resp = standingList.find(c => c.competition.id === v.id)
    if (resp) {
      dispatch(setStanding(resp.standings))
    } else {
      dispatch(fecthStanding(v.id))
    }

    const { name, numberOfAvailableSeasons, currentSeason } = v
    const date = currentSeason.startDate.split('-')[0] + '/' + currentSeason.endDate.split('-')[0]
    setCurLeague (`${name}, Season: ${numberOfAvailableSeasons} - ${date}`)
    setStandingType('TOTAL')
  }

  if (leagueList.length > 0 && curLeague === undefined) {
    onSelectLeague(leagueList[0])
  }

  const onChaneStandingType = (type) => {
    setStandingType(type)
    setScoreList(standing.find(v => v.type === type).table)
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

      { scoreList.length === 0 ? null :
        <Standings standing={scoreList} curLeague={curLeague} standingType={standingType} onChaneStandingType={onChaneStandingType} />
      }
    </div>
  )
}

export default LeagueList