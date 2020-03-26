import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchComposition } from '@/actions/league'
import { fecthScore, setScore } from '@/actions/score'
import League from '../competitions/League'
import Score from './Score'

const TopScore = () => {
  const dispatch = useDispatch()
  const leagueList = useSelector(state => state.leagueList)
  const scoreList = useSelector(state => state.scoreList)
  const score = useSelector(state => state.score)

  const [curLeague, setCurLeague] = useState()

  useEffect(() => {
    if (leagueList.length === 0)  {
      dispatch(fetchComposition())
    }
  }, [leagueList, dispatch])

  const onSelectLeague = (v) => {
    const resp = scoreList.find(c => c.competition.id === v.id)
    if (resp) {
      dispatch(setScore(resp.scorers))
    } else {
      dispatch(fecthScore(v.id))
    }

    const { name, numberOfAvailableSeasons, currentSeason } = v
    const date = currentSeason.startDate.split('-')[0] + '/' + currentSeason.endDate.split('-')[0]
    setCurLeague(`${name}, Season: ${numberOfAvailableSeasons} - ${date}`)
  }

  if (leagueList.length > 0 && curLeague === undefined) {
    onSelectLeague(leagueList[0])
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

      { score.length === 0 ? null :
        <Score score={score} curLeague={curLeague} />
      }
    </div>
  )
}

export default TopScore