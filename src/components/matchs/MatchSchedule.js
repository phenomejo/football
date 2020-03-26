import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import { Empty } from 'antd'

import { STATUS_SCHEDULED, STATIS_LIVE, STATUS_IN_PLAY } from '@/util/Constant'
import { fetchMath, setMatchList } from '@/actions/match'
import Match from './Match'

const MatchSchedule = () => {
  const dispatch = useDispatch()
  const matchList = useSelector(state => state.matchList)

  useEffect(() => {
    const dateFrom = moment().format('YYYY-MM-DD')
    const dateTo = moment().add(10, 'days').format('YYYY-MM-DD')
    const params = {
      dateFrom,
      dateTo,
      status: `${STATUS_SCHEDULED},${STATIS_LIVE},${STATUS_IN_PLAY}`
    }
    dispatch(fetchMath(params))

    return ()=> dispatch(setMatchList([]))
  }, [dispatch])

  return (
    <div className="page-content">
      { matchList.length === 0 ? <Empty /> : <Match matchList={matchList} /> }
    </div>
  )
}

export default MatchSchedule